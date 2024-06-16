"use client";

import { getUser, logIn } from "@frontifyHub/common/redux/features/authSlice";
import { useDispatch } from "react-redux";

export default function ButtonTesting() {
  const dispatch = useDispatch();

  const handleClickButton = () => {
    // dispatch(logIn("nhinbm"));
    dispatch(getUser());
  };

  return <button onClick={handleClickButton}>Button Testing</button>;
}
