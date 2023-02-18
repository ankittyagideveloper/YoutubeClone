import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS, YOUTUBE_VIDEOS_API } from "../Constants";
import VideoCard from "./VideoCard";
import { AdCard } from "./VideoCard";
import { AdvInfo } from "./mock";

const VideoContainer = () => {
  const getSearchQuery = useSelector((state) => state.app.searchQuery);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVieos();
  }, [getSearchQuery]);

  const fetchVieos = async () => {
    let data;
    if (getSearchQuery?.length > 0) {
      data = await fetch(YOUTUBE_SEARCH_RESULTS + getSearchQuery);
    } else {
      data = await fetch(YOUTUBE_VIDEOS_API);
    }

    const videosData = await data?.json();
    setVideos(videosData?.items);
  };

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap  ">
      {videos[1] && <AdCard info={AdvInfo} />}
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
