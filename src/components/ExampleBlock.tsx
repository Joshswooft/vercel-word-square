import React from "react";
import styled from "styled-components";
import { FormValues } from "../App";
import { Button } from "./common";

export const examples: FormValues[] = [
  {
    size: 4,
    word: "eeeeddoonnnsssrv",
  },
  {
    size: 4,
    word: "aaccdeeeemmnnnoo",
  },
  {
    size: 5,
    word: "aaaeeeefhhmoonssrrrrttttw",
  },
  {
    size: 5,
    word: "aabbeeeeeeeehmosrrrruttvv",
  },
  {
    size: 7,
    word: "aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy",
  },
];

const ExampleBlockDiv = styled.div`
  display: inline-flex;
  width: 100%;
  p {
    width: 100%;
    word-break: break-all;
  }
  button {
    justify-content: center;
    margin: 1em auto;
  }
`;

export function ExampleBlock({
  onSubmit,
  values,
}: {
  onSubmit: (values: FormValues) => void;
  values: FormValues;
}) {
  return (
    <ExampleBlockDiv>
      <p>
        square size: {values.size}, word: {values.word}
      </p>
      <Button onClick={() => onSubmit(values)}>Try me</Button>
    </ExampleBlockDiv>
  );
}
