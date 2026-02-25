import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#6A7337]/20 backdrop-blur-md shadow-lg rounded-2xl p-8 text-center max-w-sm w-full">
      <h1 className="text-2xl font-bold text-[#3B3E2F] mb-4">Counter</h1>
      <p className="text-xl mb-6">
        Current Count: <span className="font-mono">{count}</span>
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
