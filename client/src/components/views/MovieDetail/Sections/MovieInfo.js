import React from "react";
import { Descriptions } from "antd";

function MovieInfo(props) {
  let { movie } = props;

  return (
    <Descriptions>
      <Descriptions.Item label="Title">
        {movie.original_title}
      </Descriptions.Item>
      <Descriptions.Item label="release_data">
        {movie.release_data}
      </Descriptions.Item>
      <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
      <Descriptions.Item label="runtime">{movie.runtime}</Descriptions.Item>
      <Descriptions.Item label="vote_average" span={2}>
        {movie.vote_average}
      </Descriptions.Item>
      <Descriptions.Item label="vote_count">
        {movie.vote_count}
      </Descriptions.Item>
      <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
      <Descriptions.Item label="popularity">
        {movie.popularity}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default MovieInfo;
