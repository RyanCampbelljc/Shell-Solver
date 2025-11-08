export interface Question {
    id: number;
    title: string;
    description: string;
    expectedOutput: string;
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      title: "Find Files Containing 'XYZ'",
      description: `Suppose you had this file structure. Write a shell script to print the names of all files that contain "XYZ".`,
      expectedOutput: "file1.txt\nfile3.log"
    },
    {
      id: 2,
      title: "Count Lines in a File",
      description: `Write a shell command to count the number of lines in 'data.txt'.`,
      expectedOutput: "42"
    }
  ];
  