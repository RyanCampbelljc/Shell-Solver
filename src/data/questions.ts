export interface Question {
  id: number;
  difficulty: number;
  title: string;
  description: string;
  expectedOutput: string;
}
  
export const questions: Question[] = [
  {
    id: 1,
    difficulty: 1.0,
    title: "Listing Files",
    description: `Write a command to list all the files in this directory".`,
    expectedOutput: "ls" // TODO update all these to expected output.
  },
  {
    id: 2,
    difficulty: 1.1,
    title: "Counting Lines",
    description: `Write a shell command to count the number of lines in 'data.txt'.`,
    expectedOutput: "wc -l filename.txt"
  }
];
  