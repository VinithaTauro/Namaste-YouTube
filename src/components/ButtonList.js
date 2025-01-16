import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name={"All"} />
      <Button name={"Live"} />
      <Button name={"Podcasts"} />
      <Button name={"Music"} />
      <Button name={"Shopping"} />
      <Button name={"Products"} />
      <Button name={"Web Series"} />
      <Button name={"Cricket"} />
      <Button name={"Mixes"} />
      <Button name={"Dramas"} />
    </div>
  );
};

export default ButtonList;
