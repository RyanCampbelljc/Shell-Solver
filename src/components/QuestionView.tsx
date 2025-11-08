import React, { useState } from "react";
import type { Question } from "../data/questions";
import CodeEditor from "./CodeEditor";

interface Props {
  question: Question;
}

const QuestionView: React.FC<Props> = ({ question }) => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleRun = async () => {
    // Temporary: mock backend
    const mockOutput = "file1.txt\nfile3.log"; // placeholder
    setResult(mockOutput);
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">{question.title}</h2>
      <p className="mb-4 text-gray-700">{question.description}</p>
      <CodeEditor code={code} onChange={setCode} />
      <button
        onClick={handleRun}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Run
      </button>
      {result && (
        <div className="mt-3 p-2 bg-gray-100 rounded">
          <strong>Output:</strong>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>
  );
};

export default QuestionView;
