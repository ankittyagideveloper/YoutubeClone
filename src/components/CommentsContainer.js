import React from "react";
import CommentList from "./CommentList";

const CommentsContainer = ({ comments }) => {
  return (
    <div className="py-10 px-2 shadow-lg">
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
