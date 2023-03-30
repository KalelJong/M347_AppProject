import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Socket } from "socket.io-client";
import { FunctionComponent, useEffect, useState } from "react";
import { messageData } from "../types/types";
import ScrollToBottom from "react-scroll-to-bottom";
interface ChatProps {
  username: string;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  room: string;
}

const Chat = ({ username, socket, room }: ChatProps) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<messageData[]>([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData: messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      const input : HTMLInputElement = document.querySelector(".chat-footer input")!;
      input.value = "";
    }
  };

  useEffect(() => {
    socket.on("receive_message", (message: messageData) => {
      setMessageList((list) => [...list, message]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>{room} | Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={`${messageContent.author === username ? "you" : "other"}`}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey..."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyDown={(e) => {e.key === "Enter" && sendMessage()}}
        />
        <button onClick={ sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;
