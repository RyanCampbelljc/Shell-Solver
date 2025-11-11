import React, {  } from "react";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;

    // Ensure every new line starts with "user:~$ "
    const lines = value.split("\n").map((line) => {
      if (!line.startsWith("user:~$ ")) {
        return `user:~$ ${line}`;
      }
      return line;
    });

    const formatted = lines.join("\n");
    onChange(formatted);
  };

  return (
    <textarea
      value={code}
      onChange={handleChange}
      className="w-full h-48 border rounded p-2 font-mono text-sm bg-black text-green-400 resize-none"
      spellCheck={false}
    />
  );
};

export default CodeEditor;
