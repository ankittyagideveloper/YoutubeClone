import React from "react";
import Comment from "./Comment";
const CommentList = ({ comments }) => {
  return (
    comments?.length > 0 &&
    comments?.map((comment, i) => (
      <div>
        <Comment comment={comment} key={i} />
        {console.log(comment.replies)}
        <div className="pl-5 border border-l-black ml-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ))
  );
};

export default CommentList;
