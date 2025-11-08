import React from "react";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  return (
    <textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-48 border rounded p-2 font-mono text-sm"
      placeholder="Write your shell command here..."
    />
  );
};

export default CodeEditor;
