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
      className="p-4 border rounded cursor-pointer hover:bg-gray-100 shadow-sm transition"
    >
      <h2 className="text-lg font-medium">{question.title}</h2>
    </div>
  );
};

export default QuestionPreview;
