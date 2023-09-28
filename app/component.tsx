import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{count}</h2>
      <p>Example text</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}
