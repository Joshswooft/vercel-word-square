import fetch from "cross-fetch";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "./components/common";
import { ThemeWrapper } from "./components/common/theme";
import { ExampleBlock, examples } from "./components/ExampleBlock";
import { Results } from "./components/Results";

export interface FormValues {
  size: number;
  word: string;
}

function App() {
  const [wordSquares, setWordSquares] = useState<string[]>([]);

  const validate = (values: FormValues) => {
    const errors = {} as any;
    if (values.size <= 1) {
      errors.size = "Square size must be greater than 1";
    }
    if (values.word == "") {
      errors.word = "Word is required.";
    }
    if (values.word.length !== values.size * values.size) {
      errors.word =
        "Word must be n^2 the size. E.g. size = 3, words length must be 9";
    }
    return errors;
  };
  const onSubmit = async (values: FormValues) => {
    const getWordSquares = await fetch("./api", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
    setWordSquares(getWordSquares.data);
  };

  return (
    <ThemeWrapper>
      <div className="App">
        <h1 className="center bold">The Word Square Challenge</h1>
        <p>
          This challenge is to produce a word square. In a word square you are
          given a grid with letters arranged that spell valid English language
          words when you read from left to right or from top to bottom, with the
          requirement that the words you spell in each column and row of the
          same number are the same word. For example, the first row and the
          first column spell the same word, the second row and second column do,
          too, and so on. <br />
          The challenge is that in arranging those letters that you spell valid
          words that meet those requirements. One variant is where you're given
          an n*n grid and asked to place a set of letters inside to meet these
          rules, and that’s our challenge: given the grid dimensions and a list
          of letters, can you produce a valid word square.
        </p>
        <h3 className="bold">Examples</h3>
        {examples.map((e) => (
          <ExampleBlock onSubmit={onSubmit} values={e} />
        ))}
        <Formik<FormValues>
          initialValues={{ size: 0, word: "" }}
          validate={validate}
          onSubmit={async (values, { setSubmitting }) => {
            await onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="number" name="size" />
              <ErrorMessage name="size" component="div" />

              <Field type="text" name="word" maxLength={100} />
              <ErrorMessage name="word" component="div" />

              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <Results words={wordSquares} />
      </div>
    </ThemeWrapper>
  );
}

export default App;
