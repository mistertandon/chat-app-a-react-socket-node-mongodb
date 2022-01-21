import React from "react";
import { useParams } from "react-router-dom";
const ChatroomPage = () => {
  const { id: chatRoomId } = useParams();

  console.log("Chatroom ID: ", chatRoomId);
  return <div>Hello from ChatroomPage: {chatRoomId}</div>;
};

export default ChatroomPage;
