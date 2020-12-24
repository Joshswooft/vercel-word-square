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
    word: "eeeeddoonnnsssrv",
  },
  {
    size: 4,
    word: "eeeeddoonnnsssrv",
  },
  {
    size: 4,
    word: "eeeeddoonnnsssrv",
  },
  {
    size: 4,
    word: "eeeeddoonnnsssrv",
  },
  {
    size: 4,
    word: "eeeeddoonnnsssrv",
  },
];

const ExampleBlockDiv = styled.div`
  p {
    /* display: inline-block; */
  }
  button {
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
    <div>
      <p>
        square size: {values.size}, word: {values.word}
      </p>
      <Button onClick={() => onSubmit(values)}>Try me</Button>
    </div>
  );
}
