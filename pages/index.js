import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* Example: Click a button to increase the number counter by one */}
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>
    </div>
  );
}
