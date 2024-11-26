import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';
import { GiBookCover } from 'react-icons/gi';
import { RiArrowGoBackFill } from 'react-icons/ri';

type question = {
  id: string;
  user_name: string;
  user_icon: string;
  title: string;
  content: string;
  type: number;
};

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  question: question | null;
  value: string;
};

const AnswerConfirmationModal = ({
  isOpen,
  onClose,
  question,
  value,
}: ConfirmationModalProps) => {
  if (!isOpen || !question) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div
          className="bg-white rounded-[40px] w-5/6 h-5/6 border-gray-950 border"
          onClick={(e) => e.stopPropagation()} // モーダル内クリックで閉じない
        >
          <div className="flex items-center header rounded-t-[39px] w-full bg-blue h-[10%] relative">
            <p className="hidden">{question.id}</p>
            <div className="pl-5">
              <FaUserCircle
                size={40}
                className="rounded-full bg-white w-10 h-10"
              />
            </div>
            <p className="pl-4 text-3xl">{question.user_name}</p>
            <p className="absolute inset-0 flex items-center justify-center text-5xl">
              {question.title}
            </p>
            <button
              className="absolute inset-y-0 flex items-center right-[2%] text-5xl font-bold"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="context flex items-center w-full h-[50%] border-gray-950 border-y overflow-y-auto relative hidden-scrollbar">
            <div className="absolute inset-5 flex justify-center text-5xl">
              解答
            </div>
            <div className="w-full h-[90%]">
              <p className="w-full max-h-full p-20 break-words whitespace-normal text-5xl">
                {question.content}
              </p>
            </div>
          </div>
          <div className="textInput w-full h-[30%] border-gray-950 border-b">
            <p className="resize-none w-full h-full p-10 break-words whitespace-normal text-3xl  hidden-scrollbar">
              {value}
            </p>
          </div>
          <div className="flex h-[10%]">
            <button
              className="fotter flex items-center justify-center rounded-bl-[39px] w-[50%] h-full bg-blue"
              onClick={onClose}
            >
              <RiArrowGoBackFill size={40} />
              <p className="text-2xl pl-4">タイムラインに戻る</p>
            </button>
            <button
              className="fotter flex items-center justify-center rounded-br-[39px] w-[50%] h-full bg-skin"
              onClick={onClose}
            >
              <GiBookCover size={40} />
              <p className="text-2xl pl-4">マイ問題集に追加</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { AnswerConfirmationModal };
