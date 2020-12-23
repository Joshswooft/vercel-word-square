import React from "react";

export function Results({ words }: { words: string[] }) {
  return (
    <div>
      results:
      {words.toString()}
    </div>
  );
}
