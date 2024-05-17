import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { increment, decrement } from "../state/counter/counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.counterStore.value);
  const dispatch = useDispatch()
  return (
    <div>
      <h2 className="text-5xl my-3 text-red-600 font-medium">{count}</h2>
      <button className="px-3 py-2 border mr-5" onClick={() => dispatch(increment())}>Increment</button>
      <button className="px-3 py-2 border" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
