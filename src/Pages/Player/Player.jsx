import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import Home from "../Home/Home";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDdhNWI0NDlkYTg3OGJiNThhZTJhOGMxNTI3YWYyNyIsIm5iZiI6MTczMTY3ODg3My4zNTAzMjQyLCJzdWIiOiI2NzM1MTk4ZGZmODU4ODEzOTNhMDgxYzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KEkMhQruAa9TAUgifxH-q3wl1SfoJqktamdfHmgFSU8",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setVideoData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="player">
      <img onClick={()=> navigate("/")} src={back_arrow} alt="back icon" />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${videoData.key}`}
        frameborder="0"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{videoData.published_at.slice(0, 10)}</p>
        <p>{videoData.name}</p>
        <p>{videoData.type}</p>
      </div>
    </section>
  );
};

export default Player;
