import React from "react";

const VideoCard = ({ info, adv }) => {
  console.log(info);
  const { snippet, statistics } = info;
  console.log(snippet, statistics);
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-80 md:w-80 shadow-lg cursor-pointer h-90 h-72">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div>
        <div className="font-bold  line-clamp-2">{title}</div>
        <div>{channelTitle}</div>
        {!adv && <div>{statistics?.viewCount} Views</div>}
      </div>
    </div>
  );
};
export const AdCard = ({ info }) => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.linkedin.com/in/thereactdeveloper/"
    >
      <VideoCard info={info} adv={true} />
    </a>
  );
};

export default VideoCard;
