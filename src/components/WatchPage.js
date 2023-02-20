import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import { mockComments } from "./mock";

const WatchPage = () => {
  const screenSize = window.screen.width;
  const [searchParams] = useSearchParams();
  const url = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" md:px-5">
      <iframe
        width={`${screenSize < 400 ? "400" : "1000"}`}
        height={`${screenSize < 400 ? "300" : "500"}`}
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer comments={mockComments} />
    </div>
  );
};

export default WatchPage;
