import React from "react";

const Comment = ({ comment, reply }) => {
  const { image, name, text } = comment;
  return (
    <div className="flex flex-col ">
      <div className="flex items-center py-2 my-1 px-2 rounded-lg bg-slate-100">
        <img
          src={image}
          alt="profile"
          className={`rounded-full  object-cover ${
            reply ? "h-6 w-6" : "h-12 w-12"
          }`}
        />
        <div className="pl-5">
          <h1 className="font-bold text-sm">{name}</h1>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
