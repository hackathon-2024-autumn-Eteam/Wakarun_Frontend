import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type question = {
  id: string;
  user_name: string;
  user_icon: string;
  title: string;
  content: string;
  type: number;
};

export default function timelinePage() {
  const [questions, setQuestions] = useState<question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/timeline');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data: question[] = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      <main className="flex-1 overflow-y-auto hidden-scrollbar">
        <div className="">
          {questions.map((question) => (
            <div className="justify-items-center pb-9">
              <li
                key={question.id}
                className="bg-litegreen rounded-[35px] w-[65.9375rem] py-5"
              >
                <div className="grid grid-cols-2">
                  <div className="flex justify-self-start items-center pl-8">
                    <div className="rounded-full bg-white w-10 h-10">
                      <FaUserCircle size={40} />
                    </div>
                    <p className="pl-6 text-3xl">{question.user_name}</p>
                  </div>
                  <div className="flex justify-self-end items-center pr-16 text-5xl">
                    <p>{question.title}</p>
                  </div>
                  <div className="col-span-2 px-[72px] text-left line-clamp-4">
                    <p>{question.content}</p>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
