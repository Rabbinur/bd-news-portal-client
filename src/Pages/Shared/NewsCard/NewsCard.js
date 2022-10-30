import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    author,
    rating,
    title,
    total_view,
    _id,
    thumbnail_url,
    image_url,
    details,
  } = news;
  // console.log(news);
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex ">
          <Image
            roundedCircle
            className="me-3"
            src={author?.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <h6>{author?.name}</h6>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaBookmark className="me-3"></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 300 ? (
            <>
              {details.slice(0, 300) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div className="text-center">
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div className="text-center">
          <FaEye className="me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
