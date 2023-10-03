import { useState } from "react";
import { PrimaryButton } from "@cerebruminc/cerebellum";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{count}</h2>
      <p>Example text</p>
      <PrimaryButton onClick={() => setCount(count + 1)} text="+" />
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
    </>
  );
}
