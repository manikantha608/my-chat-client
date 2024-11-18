import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { connectWithSocketServer } from "../socket/socketConnection";
import { toast } from "react-toastify";
import {
  AddMessage,
  FetchChatHistory,
  UpdateStatus,
  UpdateTypingStatus,
} from "../redux/slices/chat";

export default function index() {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useSelector((state) => state.auth);

  useEffect(() => {
    let socket;
    if (isLoggedIn) {
      socket = connectWithSocketServer({
        token: token,
      });

      // ** WORKING
      socket.on("connect", () => {
        console.log("succesfully connected with socket.io server");
        console.log(socket.id);
      });

      // ** WORKING
      socket.on("error", (data) => {
        // ? DATA FORMAT

        // data = { message: "Conversation not found" }

        console.log(data);
        toast.error(data?.message || "Something went wrong");
      });

      // ** WORKING
      socket.on("user-disconnected", (data) => {
        console.log(data, "user-disconnected");

        // ? DATA FORMAT

        // data = {
        //   message: `User ${user.name} has gone offline.`,
        //   userId: user._id,
        //   status: "Offline",
        // }

        dispatch(
          UpdateStatus({
            userId: data.userId,
            status: data.status,
          })
        );
      });

      // ** WORKING
      socket.on("user-connected", (data) => {
        console.log(data, "user-connected");

        // ? DATA FORMAT

        // data = {
        //   message: `User ${user.name} has connected.`,
        //   userId: user._id,
        //   status: "Online",
        // };

        dispatch(
          UpdateStatus({
            userId: data.userId,
            status: data.status,
          })
        );
      });

      // ** WORKING
      socket.on("chat-history", (data) => {
        console.log(data, "chat-history");

        // ? DATA FORMAT

        // data = {
        //   conversationId,
        //   history: conversation.messages,
        // };

        dispatch(FetchChatHistory(data));
      });

      // ** WORKING
      socket.on("new-direct-chat", (data) => {
        console.log(data, "new-message");

        // ? DATA FORMAT

        // data = {
        //   conversationId: conversationId,
        //   message: newMessage,
        // }

        dispatch(AddMessage(data));
      });

      socket.on("start-typing", (data) => {
        console.log(data, "start-typing");

        // ? DATA FORMAT

        // const data = {
        //   conversationId,
        //   typing: true,
        // };

        dispatch(UpdateTypingStatus(data));
      });

      socket.on("stop-typing", (data) => {
        console.log(data, "stop-typing");

        // ? DATA FORMAT

        // const data = {
        //   conversationId,
        //   typing: true,
        // };

        dispatch(UpdateTypingStatus(data));
      });
    }

    // Cleanup when the component unmounts or when the socket is manually disconnected
    return () => {
      if (socket) {
        socket.off("connect");
        socket.off("error");
        socket.off("user-disconnected");
        socket.off("user-connected");
        socket.off("chat-history");
        socket.off("new-message");
        socket.off("start-typing");
        socket.off("stop-typing");

        socket.disconnect();
        console.log("Disconnected from socket server");
      }
    };
  }, []);
  return (
    <div className="h-[calc(100vh)] overflow-hidden sm:h-screen">
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
        {/* Sidebar */}
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
}
