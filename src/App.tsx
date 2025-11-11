import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { questions } from "./data/questions";
import QuestionPreview from "./components/QuestionPreview";
import QuestionView from "./components/QuestionView";

// The list of all the question names on the home page.
const QuestionList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      {questions.map((q) => (
        <QuestionPreview
          key={q.id} // Unique identifier that react needs for rendering lists.
          question={q} // Parameters 1 for QuestionView function.
          onSelect={() => navigate(`/question/${q.id}`)} // Parameters 2 for QuestionView function.
        />
      ))}
    </div>
  );
};

// A question page when you click on a question.
const QuestionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const question = questions.find((q) => q.id === Number(id)); // Gets the question information needed for this page.

  if (!question) {
    return <div className="text-center mt-10">Question not found.</div>;
  }

  return <QuestionView question={question} />;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 justify-center pt-20">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white py-4 text-center shadow-md">
        <h1 className="text-2xl bg-blue-600 font-bold text-black">Shell Practice MVP</h1>
      </header>

      {/* Routes */}
      <main className="w-full max-w-2xl mt-6 px-4">
        <Routes>
          <Route path="/" element={<QuestionList />} />
          <Route path="/question/:id" element={<QuestionPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
