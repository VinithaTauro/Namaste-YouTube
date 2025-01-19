const Button = ({ name }) => {
  return (
    <div className="">
      <button className="bg-gray-300 rounded-lg px-4 py-2 m-4 whitespace-nowrap overflow-hidden">
        {name}
      </button>
    </div>
  );
};

export default Button;
