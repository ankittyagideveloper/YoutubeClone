import React from "react";

const VideoCard = ({ info, adv }) => {
  console.log(info);
  const { snippet, statistics } = info;
  console.log(snippet, statistics);
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-80 md:w-80 shadow-lg cursor-pointer h-90">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div>
        <div className="font-bold py-2">{title}</div>
        <div>{channelTitle}</div>
        <div>{statistics?.viewCount} Views</div>
      </div>
      {adv && <div>Advertisement</div>}
    </div>
  );
};
export const AdCard = ({ info }) => {
  return (
    <div className="border border-red-900">
      <VideoCard info={info} adv={true} />
    </div>
  );
};

export default VideoCard;
