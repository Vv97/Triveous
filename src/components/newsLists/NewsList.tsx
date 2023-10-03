import { IArticle, NewsArticleItem } from "@/types/types";
import React from "react";
import styles from "../../app/news/news.module.css";
import Loader from "../loader/Loader";
import Article from "../Article/Article";

const NewsList = ({
  news = [],
  view = "list",
  loader = false,
}: {
  news: IArticle[];
  view: string;
  loader: boolean;
}) => {
  return loader ? (
    <Loader />
  ) : (
    <div className={view === "list" ? styles.newsList : styles.newsGrid}>
      {news.length > 0 &&
        news.map((res, index) => <Article {...res} key={index} view={view} />)}
    </div>
  );
};

export default NewsList;
