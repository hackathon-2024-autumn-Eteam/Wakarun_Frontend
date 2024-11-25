import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';

type question = {
  id: string;
  user_name: string;
  user_icon: string;
  title: string;
  content: string;
  type: number;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  question: question | null;
};

const Modal = ({ isOpen, onClose, question }: ModalProps) => {
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
          <div className="context flex items-center w-full h-[50%] border-gray-950 border-y overflow-y-auto hidden-scrollbar">
            <p className="w-full max-h-full p-20 break-words whitespace-normal text-5xl">
              {question.content}
            </p>
          </div>
          <div className="textInput w-full h-[30%] border-gray-950 border-b">
            <textarea
              className="resize-none w-full h-full p-10 break-words whitespace-normal text-3xl  hidden-scrollbar"
              placeholder="解答を入力してください"
            ></textarea>
          </div>
          <button className="fotter flex items-center justify-center rounded-b-[39px] w-full bg-green h-[10%]">
            <MdQuestionAnswer size={40} />
            <p className="text-2xl pl-4">解答する</p>
          </button>
        </div>
      </div>
    </>
  );
};

export { Modal };
