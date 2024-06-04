import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center h-90vh">
      <div className="container flex flex-col items-center justify-center h-90vh">
        <h1 className="mb-10 text-6xl">{count}</h1>
        <div className="content flex ">
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-primary m-3"
          >
            Increase
          </button>
          <button
            onClick={() =>
              setCount((count) => {
                if (count > 0) {
                  return count - 1;
                } else {
                  return count;
                }
              })
            }
            className="btn btn-error m-3"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
