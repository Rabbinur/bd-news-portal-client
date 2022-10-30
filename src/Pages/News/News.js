import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import useTitle from "../../Hooks/UseTitle";

const News = () => {
  useTitle("News Details");
  const news = useLoaderData();
  const { title, details, image_url, category_id, author, total_view } = news;
  console.log(news);
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>
          {title}
          <div className="mt-3 mb-3 d-flex justify-content-between">
            <div className="">
              <h6>
                Author: <span>{author.name}</span>
              </h6>
            </div>
            <div>
              <h6>Publish Date : {author.published_date}</h6>
            </div>
            <div>
              <FaEye className="me-2"></FaEye>
              <span>{total_view}</span>
            </div>
          </div>
        </Card.Title>

        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All this news category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
