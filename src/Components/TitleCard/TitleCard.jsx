import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import cardData from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const cardRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDdhNWI0NDlkYTg3OGJiNThhZTJhOGMxNTI3YWYyNyIsIm5iZiI6MTczMTUzMzU1MS4zNjQyNCwic3ViIjoiNjczNTE5OGRmZjg1ODgxMzkzYTA4MWMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qCB5-3b_8YXUtqvnPRp1-SIatXODGCjYvUZobSl6Ytk",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <section className="popular-movies">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, idx) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={idx}>
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
                alt={card.overview}
              />
              <p>{card.title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TitleCard;
