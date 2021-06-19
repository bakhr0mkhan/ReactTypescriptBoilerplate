import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// redux actions
import { increment, decrement } from "../../state/actions";

interface Props {}

const Dashboard = (props: Props) => {
  const counter = useSelector((state) => state);
  // hooks
  const dispatch = useDispatch();
  // effects
  useEffect(() => {
    console.log("DOTENV", process.env.REACT_APP_ENV_CHECK);
  }, []);
  return (
    <div>
      <div>Counter {counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Dashboard;
