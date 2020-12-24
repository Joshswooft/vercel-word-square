import React from "react";
import styled from "styled-components";

const generateTableContent = (word: string): JSX.Element[] | null => {
  const chars = [...word];
  return chars.map((c, i) => <td key={i}>{c}</td>);
};

const StyledTable = styled.table`
  margin: 40px auto;
  max-width: 90%;
  border: 1px solid black;

  td {
    padding: 10px;
  }
`;

export function ResultsTable({ words }: { words: string[] }) {
  return (
    <StyledTable>
      <tbody>
        {words.map((word, i) => {
          return <tr key={i}>{generateTableContent(word)}</tr>;
        })}
      </tbody>
    </StyledTable>
  );
}
