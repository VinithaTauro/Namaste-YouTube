import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../utils/chatSlice";
import { generateName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChatMessages({
          name: generateName(),
          message: randomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  });

  return (
    <>
      <div className="border border-black bg-slate-100 rounded-lg w-full h-[550px] p-2 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, i) => (
            <ChatMessages key={i} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChatMessages({
              name: "Vinitha",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="p-2">
          <input
            className="w-72  p-2"
            type="text"
            placeholder="Type message..."
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="ml-2 bg-amber-200 rounded-lg px-2">Send</button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
