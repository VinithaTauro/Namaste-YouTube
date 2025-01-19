const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="shadow-lg p-2 m-2 w-64">
      <img
        alt="thumbnail"
        className="rounded-lg  w-70"
        src={thumbnails.medium.url}
      ></img>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
