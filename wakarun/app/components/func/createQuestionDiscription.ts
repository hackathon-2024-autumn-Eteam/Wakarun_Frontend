import axios from "axios";

interface QuestionPram {
  userId: string;
  title: string;
  content: string;
  answer: string;
}

interface QuestionRequest {
  user: string;
  title: string;
  content: string;
  type: number;
}

interface AnswerRequest {
  question_id: string;
  content: string;
  is_true: null;
}

export const CreateQuestionsDiscription = async ({
  userId,
  title,
  content,
  answer,
}: QuestionPram) => {
  if (!userId) {
    throw new Error("ユーザーが認証されていません");
  }

  try {
    const QuestionRequestData: QuestionRequest = {
      user: userId,
      title: title,
      content: content,
      type: 1,
    };

    const questionsResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/questions/`,
      QuestionRequestData
    );

    if (questionsResponse.status >= 200 && questionsResponse.status < 300) {
      console.log("成功");

      const AnswerRequestData: AnswerRequest[] = [
        {
          question_id: questionsResponse.data.id,
          content: answer,
          is_true: null,
        },
      ];

      const answersResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/answers/`,
        AnswerRequestData
      );

      return console.log(answersResponse);
    }
  } catch (error) {
    console.error("失敗", error);
    throw error;
  }
};
