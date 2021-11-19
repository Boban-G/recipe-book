import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearMessage } from "../../store/message";
import styled from "./messageModal.module.css";
const MessageModal = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearMessage());
    }, 1500);
  }, []);
  return (
    <div
      className={`${styled.MessageModal} ${
        message.status
          ? message.status === "danger"
            ? styled.Danger
            : styled.Info
          : ""
      }`}
    >
      <div>{message.message}</div>
    </div>
  );
};

export default MessageModal;
