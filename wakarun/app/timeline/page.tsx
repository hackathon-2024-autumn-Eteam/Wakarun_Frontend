'use client';

import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { AnswerInputModal } from '@/app/components/modal/AnswerInputModal';
import { AnswerConfirmationModal } from '@/app/components/modal/AnswerConfirmationModal';

type question = {
  id: string;
  user_name: string;
  user_icon: string;
  title: string;
  content: string;
  type: number;
};

export default function TimelinePage() {
  const [questions, setQuestions] = useState<question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<question | null>(
    null
  );
  const [answerInputModalValue, setAnswerInputModalValue] = useState('');
  const [isAnswerInputModalOpen, setAnswerInputModalOpen] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/timeline`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const responseBody = await response.json();
        const data: question[] = responseBody.questions;

        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  const openAnswerInputModal = (question: question) => {
    setSelectedQuestion(question);
    setAnswerInputModalOpen(true);
    setAnswerInputModalValue('');
  };

  const closeAnswerInputModal = () => {
    setSelectedQuestion(null);
    setAnswerInputModalOpen(false);
  };

  const openConfirmationModal = (question: question, value: string) => {
    setConfirmationModalOpen(true);
    setAnswerInputModalOpen(false);
    setSelectedQuestion(question);
    setAnswerInputModalValue(value);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
    setAnswerInputModalValue('');
  };

  return (
    <>
      <main className="flex-1 overflow-y-auto hidden-scrollbar">
        <div className="">
          {questions.map((question) => (
            <div key={question.id} className="justify-items-center pb-9">
              <li
                className="bg-litegreen rounded-[35px] w-[65.9375rem] py-5 cursor-pointer"
                onClick={() => openAnswerInputModal(question)}
              >
                <div className="grid grid-cols-2">
                  <div className="flex justify-self-start items-center pl-8">
                    <div className="rounded-full bg-white w-10 h-10">
                      <FaUserCircle size={40} />
                    </div>
                    <p className="pl-6 text-3xl">{question.user_name}</p>
                  </div>
                  <div className="flex justify-self-end items-center pr-16 text-5xl truncate">
                    <p>{question.title}</p>
                  </div>
                  <div className="col-span-2 px-[72px] text-left line-clamp-4">
                    <p>{question.content}</p>
                  </div>
                </div>
              </li>
            </div>
          ))}
          <AnswerInputModal
            isOpen={isAnswerInputModalOpen}
            onClose={closeAnswerInputModal}
            question={selectedQuestion}
            onConfirm={openConfirmationModal}
          />
          <AnswerConfirmationModal
            isOpen={isConfirmationModalOpen}
            onClose={closeConfirmationModal}
            question={selectedQuestion}
            value={answerInputModalValue}
          />
        </div>
      </main>
    </>
  );
}
