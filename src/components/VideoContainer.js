import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { AdCard } from "./VideoCard";

const VideoContainer = () => {
  const getSearchQuery = useSelector((state) => state.app.searchQuery);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVieos();
  }, [getSearchQuery]);

  const fetchVieos = async () => {
    let data;
    if (getSearchQuery?.length > 0) {
      data = await fetch(
        process.env.REACT_APP_YOUTUBE_SEARCH_RESULTS +
          process.env.REACT_APP_API_KEY +
          "&q=" +
          getSearchQuery
      );
    } else {
      data = await fetch(
        process.env.REACT_APP_YOUTUBE_VIDEOS_API + process.env.REACT_APP_API_KEY
      );
    }

    const videosData = await data?.json();
    setVideos(videosData?.items);
  };

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap  ">
      {videos[1] && <AdCard info={videos[1]} />}
      {videos?.length > 0 &&
        videos.map((video) => (
          <Link
            to={`/watch?v=${
              video?.id?.videoId ? video?.id?.videoId : video?.id
            }`}
          >
            <VideoCard key={video?.id} info={video} />
          </Link>
        ))}
    </div>
  );
};
export default VideoContainer;
