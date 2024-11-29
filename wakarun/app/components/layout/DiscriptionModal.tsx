"use client";

import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

// 入力内容の型定義
type QuestionInput = {
  title: string;
  question: string;
  answer: string;
};

// モーダルの共通Props
type ModalProps = {
  open: boolean;
  onClose: () => void;
};

// 確認モーダルのProps
type ConfirmationModalProps = ModalProps & {
  questionData: QuestionInput;
  onConfirm: () => void;
};

// 完了モーダルのProps
type CompletionModalProps = ModalProps & {
  questionData: QuestionInput;
};

// 確認モーダルコンポーネント
const ConfirmationModal = ({
  open,
  onClose,
  questionData,
  onConfirm,
}: ConfirmationModalProps) => {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black bg-cover bg-[url('/images/modalbackground.png')] p-8 rounded-3xl z-20 w-[50vw] max-h-[80vh] overflow-auto scrollbar-none">
        <h2 className="text-2xl font-bold mb-4">問題作成の確認</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">タイトル:</h3>
            <p className="p-3 bg-white border-black border rounded-xl">
              {questionData.title}
            </p>
          </div>
          <div>
            <h3 className="font-bold">問題文:</h3>
            <p className="p-3 bg-white border-black border rounded-xl">
              {questionData.question}
            </p>
          </div>
          <div>
            <h3 className="font-bold">解答:</h3>
            <p className="p-3 bg-white border-black border rounded-xl">
              {questionData.answer}
            </p>
          </div>
          <p className="text-center font-bold">
            ※上記の内容で作成してよろしいですか？
          </p>
        </div>
        <div className="relative -m-8 h-32">
          {" "}
          {/* ボタン用のスペースを確保 */}
          <div className="absolute flex justify-between h-16 left-0 bottom-0 right-0">
            <button
              onClick={onClose}
              className="bg-blue hover:bg-Lblue transition flex-1 flex justify-center items-center gap-4 rounded-bl-3xl"
            >
              <RiArrowGoBackFill className="h-8 w-8" />
              <span className="text-xl font-bold">書き直す</span>
            </button>
            <button
              onClick={onConfirm}
              className="bg-green hover:bg-Lgreen transition flex-1 flex justify-center items-center gap-4 rounded-br-3xl"
            >
              <FaCheck className="h-8 w-8" />
              <span className="text-xl font-bold">作成</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// 完了モーダルコンポーネント
const CompletionModal = ({
  open,
  onClose,
  questionData,
}: CompletionModalProps) => {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black bg-cover bg-[url('/images/modalbackground.png')] p-8 rounded-3xl z-20 w-[50vw] max-h-[80vh] overflow-auto scrollbar-none">
        <h2 className="text-2xl font-bold mb-4">問題作成完了</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">タイトル:</h3>
            <p className="p-3 bg-white border-black border rounded-xl">
              {questionData.title}
            </p>
          </div>
          <div>
            <h3 className="font-bold">問題文:</h3>
            <p className="p-3 bg-white border-black border rounded-xl">
              {questionData.question}
            </p>
          </div>
          <div>
            <h3 className="font-bold">解答:</h3>
            <p className="p-3 bg-white border-black border rounded-xl">
              {questionData.answer}
            </p>
          </div>
          <p className="text-center font-bold">※上記の内容で作成しました！</p>
        </div>
        <div className="relative -m-8 h-32">
          {" "}
          {/* ボタン用のスペースを確保 */}
          <div className="absolute flex justify-between h-16 left-0 bottom-0 right-0">
            <Link href="/timeline" className="w-full">
              <button className="bg-blue hover:bg-Lblue w-full h-full transition flex-1 flex justify-center items-center gap-4 rounded-bl-3xl">
                <RiArrowGoBackFill className="h-8 w-8" />
                <span className="text-xl font-bold">タイムラインに戻る</span>
              </button>
            </Link>
            <Link href="/create_questions" className="w-full">
              <button className="bg-yellow2 hover:bg-Lyellow2 transition flex justify-center items-center gap-4 rounded-br-3xl w-full h-full">
                <RiArrowGoBackFill className="h-8 w-8" />
                <span className="text-xl font-bold">問題作成に戻る</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { CompletionModal, ConfirmationModal };
