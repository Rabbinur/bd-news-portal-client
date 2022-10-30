import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";
import NewsCard from "../Shared/NewsCard/NewsCard";

const Home = () => {
  const allNews = useLoaderData(); //load data form loader
  useTitle("Home");

  return (
    <div>
      <h2>THis is home page {allNews.length}</h2>
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
