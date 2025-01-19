const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex flex-row p-2  shadow-sm rounded-lg my-2 items-center">
      <img
        className="w-8 m-2"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessages;
