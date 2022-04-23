import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  console.log(videos);

  const uniqueVideos = Array.from(
    new Set(videos.map((video) => video.youtubeID))
  ).map((id) => {
    return videos.find((video) => video.youtubeID === id);
  });

  return (
    <div>
      {uniqueVideos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 15)}
        >
          {uniqueVideos.map((video) => (
            <Video
              key={video.youtubeID}
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
            />
          ))}
        </InfiniteScroll>
      )}
      {loading && <div>Loading</div>}
      {!loading && videos.length === 0 && <div>No quiz found!</div>}
      {error && <div>There was an error!</div>}
    </div>
  );
};

export default Videos;
