"use client";

import {
  ConfirmationModal,
  CompletionModal,
} from "@/app/components/layout/DiscriptionModal";
import React, { useState } from "react";
import useAuth from "@/utils/useAuth";
import { CreateQuestionsDiscription } from "@/app/components/func/createQuestionDiscription";
import Header from "@/app/components/layout/header/header";

type QuestionInput = {
  title: string;
  question: string;
  answer: string;
};

export default function CreateQuestionsDescription() {
  const loginUser = useAuth();
  const [questionInput, setQuestionInput] = useState<QuestionInput>({
    title: "",
    question: "",
    answer: "",
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuestionInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShowConfirmModal = () => {
    setShowConfirmModal(true);
  };

  const handleShowCompletionModal = () => {
    try {
      CreateQuestionsDiscription({
        userId: loginUser.id,
        title: questionInput.title,
        content: questionInput.question,
        answer: questionInput.answer,
      });
      setShowConfirmModal(false);
      setShowCompletionModal(true);
    } catch (error) {
      console.error("handleShowCompletionModalエラー", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center space-y-6 w-[60vw] mx-auto">
        <input
          type="text"
          name="title"
          value={questionInput.title}
          onChange={handleInputChange}
          placeholder="問題のタイトルを入力"
          className="w-full h-[5vh] border-2 border-black rounded-2xl px-4"
        />
        <textarea
          name="question"
          value={questionInput.question}
          onChange={handleInputChange}
          placeholder="問題文を入力"
          className="w-full h-[15vh] border-2 border-black rounded-3xl p-4 scrollbar-none"
        />
        <textarea
          name="answer"
          value={questionInput.answer}
          onChange={handleInputChange}
          placeholder="問題の解答を入力"
          className="w-full h-[30vh] border-2 border-black rounded-3xl p-4 scrollbar-none"
        />
      </div>
      <div className="flex justify-end w-[60vw] mt-[6vh] mx-auto">
        <button
          onClick={handleShowConfirmModal}
          className="relative h-20 overflow-hidden rounded-3xl bg-Lgreen px-20 py-2.5 ring-green ring-4 text-black transition-all duration-300 hover:bg-LLgreen hover:ring-4 hover:ring-green hover:ring-offset-4"
        >
          <span className="relative text-3xl font-black">作成</span>
        </button>
      </div>

      <ConfirmationModal
        open={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        questionData={questionInput}
        onConfirm={handleShowCompletionModal}
      />

      <CompletionModal
        open={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        questionData={questionInput}
      />
    </>
  );
}
