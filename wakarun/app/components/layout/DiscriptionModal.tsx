"use client"

import Link from "next/link";

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
const ConfirmationModal = ({ open, onClose, questionData, onConfirm } : ConfirmationModalProps) => {
    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 bg-white bg-opacity-50 z-10" onClick={onClose} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl z-20 w-[50vw]">
                <h2 className="text-2xl font-bold mb-4">問題作成の確認</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold">タイトル:</h3>
                        <p className="p-2 bg-gray-100 rounded">{questionData.title}</p>
                    </div>
                    <div>
                        <h3 className="font-bold">問題文:</h3>
                        <p className="p-2 bg-gray-100 rounded">{questionData.question}</p>
                    </div>
                    <div>
                        <h3 className="font-bold">解答:</h3>
                        <p className="p-2 bg-gray-100 rounded">{questionData.answer}</p>
                    </div>
                </div>
                <div className="flex justify-end space-x-4 mt-6">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-colors"
                    >
                        書き直す
                    </button>
                    <button 
                        onClick={onConfirm}
                        className="px-6 py-2 rounded-xl bg-Lgreen hover:bg-LLgreen transition-colors ring-2 ring-green"
                    >
                        作成
                    </button>
                </div>
            </div>
        </>
    );
};

// 完了モーダルコンポーネント
const CompletionModal = ({ open, onClose, questionData } : CompletionModalProps) => {
    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={onClose} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl z-20 w-[50vw]">
                <h2 className="text-2xl font-bold mb-4">問題作成が完了しました</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold">タイトル:</h3>
                        <p className="p-2 bg-gray-100 rounded">{questionData.title}</p>
                    </div>
                    <div>
                        <h3 className="font-bold">問題文:</h3>
                        <p className="p-2 bg-gray-100 rounded">{questionData.question}</p>
                    </div>
                    <div>
                        <h3 className="font-bold">解答:</h3>
                        <p className="p-2 bg-gray-100 rounded">{questionData.answer}</p>
                    </div>
                </div>
                <div className="flex justify-end space-x-4 mt-6">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-colors"
                    >
                        タイムラインページへ
                    </button>
                    <Link href="/create_questions">
                        <button 
                            className="px-6 py-2 rounded-xl bg-Lgreen hover:bg-LLgreen transition-colors ring-2 ring-green"
                        >
                            問題作成に戻る
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export {CompletionModal, ConfirmationModal}