import React from "react";
import { ResultsTable } from "./ResultsTable";

export function Results({ words }: { words: string[] }) {
  return (
    <div>
      <h2>Results</h2>
      {words.length > 0 ? (
        <ResultsTable words={words} />
      ) : (
        <p>No word square could be generated</p>
      )}
    </div>
  );
}
