import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const mockList = [
    "All",
    "Sitcom",
    "Kapil Sharma",
    "live",
    "trending",
    "React",
    "Redux",
    "Ankit Tyagi",
    "Cooking",
    "Music",
    "Food",
    "Workout",
    "Gym",
    "Javascript",
    "HTML",
  ];
  return (
    <div className="flex m-2">
      {mockList.map((x, key) => (
        <Button data={x} key={key} />
      ))}
    </div>
  );
};

export default ButtonList;
