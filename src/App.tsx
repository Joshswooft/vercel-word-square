import fetch from "cross-fetch";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "./App.css";
import { Results } from "./components/Results";

interface FormValues {
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
    console.log(getWordSquares);
  };

  return (
    <div className="App">
      <h1>The Word Square Challenge</h1>
      <p>Description of challenge here</p>
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

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {wordSquares && (
        <div>
          <Results words={wordSquares} />
        </div>
      )}
    </div>
  );
}

export default App;
