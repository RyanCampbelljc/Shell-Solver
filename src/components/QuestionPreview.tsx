import React from "react";
import type { Question } from "../data/questions";

interface Props {
  question: Question;
  onSelect: () => void; // ← add this line
}

const QuestionPreview: React.FC<Props> = ({ question, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="p-4 border rounded cursor-pointer hover:bg-gray-600 shadow-sm transition bg-gray-500">

      <h2 className="text-lg font-medium text-black">{question.title}</h2>
    </div>
  );
};

export default QuestionPreview;
