import Button from "./Button";

const lists = [
  "All",
  "Live",
  "Podcasts",
  "Music",
  "Shopping",
  "Products",
  "Web Series",
  "Cricket",
  "Mixes",
  "Dramas",
  "Shorts",
  "Game",
];
const ButtonList = () => {
  return (
    <div className="flex items-center">
      {lists.map((list) => (
        <Button name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
