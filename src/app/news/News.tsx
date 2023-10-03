"use client";
// react
import React, { useEffect, useState } from "react";

// axios
import axios, { AxiosResponse } from "axios";

//styles
import styles from "../news/news.module.css";

// typescipt type
import { IArticle, NewsArticle, NewsArticleItem } from "@/types/types";
import NewsList from "@/components/newsLists/NewsList";

const News = () => {
  const [news, setNews] = useState<Array<IArticle>>([]);
  const [view, setView] = useState<string>("list");
  const [loader, setLaoder] = useState<boolean>(false);

  const viewToggle = (type: string) => {
    setView(type);
  };

  const fetchNews = async () => {
    let url = `${process.env.NEXT_PUBLIC_NEWS_API_URL}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&size=10&language=en`;
    setLaoder(true);
    try {
      let res: AxiosResponse<NewsArticle> = await axios.get(url);
      let news: AxiosResponse<NewsArticle> = await res;
      setNews(news.data.results);
      setLaoder(false);
    } catch (error: any) {
      setLaoder(false);
      console.log("Error while fetching news", error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className={styles.news}>
      <h1>News</h1>
      <div className={styles.newsViewMode}>
        <button
          style={{
            background: view === "list" ? "#2b2a2a" : "#ffff",
            color: view === "list" ? "#fff" : "#2b2a2a",
          }}
          onClick={() => viewToggle("list")}
        >
          list view
        </button>
        <button
          style={{
            background: view === "grid" ? "#2b2a2a" : "#ffff",
            color: view === "grid" ? "#fff" : "#2b2a2a",
          }}
          onClick={() => viewToggle("grid")}
        >
          grid view
        </button>
      </div>
      <NewsList news={news} view={view} loader={loader} />
    </div>
  );
};

export default News;
