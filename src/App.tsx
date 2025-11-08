import React from "react";
import { questions } from "./data/questions";
import QuestionView from "./components/QuestionView";

const App: React.FC = () => {
  const q = questions[0];
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Shell Practice MVP</h1>
      <QuestionView question={q} />
    </div>
  );
};

export default App;
