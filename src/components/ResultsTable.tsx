import React from "react";

const generateTableContent = (word: string): JSX.Element[] | null => {
  const chars = [...word];
  return chars.map((c, i) => <td key={i}>{c}</td>);
};
export function ResultsTable({ words }: { words: string[] }) {
  return (
    <table>
      <tbody>
        {words.map((word, i) => {
          return <tr key={i}>{generateTableContent(word)}</tr>;
        })}
      </tbody>
    </table>
  );
}
