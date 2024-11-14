export default function createQuestionsDescription() {
    return (
        <>
            <div className="flex flex-col items-center space-y-6 w-[60vw] mx-auto mt-[20vh]">
                <input 
                    type="text"
                    name="title"
                    placeholder="問題のタイトルを入力"
                    className="w-full h-[5vh] border-2 border-black rounded-2xl px-4"
                />
                <textarea
                    name="question"
                    placeholder="問題文を入力"
                    className="w-full h-[15vh] border-2 border-black rounded-3xl p-4"
                />
                <textarea
                    name="answer"
                    placeholder="問題の解答を入力"
                    className="w-full h-[30vh] border-2 border-black rounded-3xl p-4"
                />
            </div>
            <div className="flex justify-end w-[60vw] mt-[6vh] mx-auto">
                <button className="relative h-20 overflow-hidden rounded-3xl bg-Lgreen px-20 py-2.5 ring-green ring-4 text-black transition-all duration-300 hover:bg-LLgreen hover:ring-4 hover:ring-green hover:ring-offset-4">
                    <span className="relative text-3xl font-black">作成</span>
                </button>
            </div>
        </>
    );
}