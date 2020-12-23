import React from "react";

export function Form({ children }: { children: JSX.Element }) {
  return (
    <div>
      <form>{children}</form>
    </div>
  );
}
