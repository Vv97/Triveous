import { IArticle, NewsArticleItem } from "@/types/types";
import React from "react";
import styles from "../../app/news/news.module.css";

const Article = ({
  title,
  image_url,
  description = "",
  view,
  link,
}: IArticle) => {
  return view !== "list" ? (
    <a href={link} target="_blank">
      <div className={styles.article}>
        <div className={styles.aritcle_img_con}>
          <img
            className={styles.aritcle_image}
            src={image_url ?? "https://image.dummyjson.com/400x200/282828"}
            alt={title + " img"}
          />
        </div>
        <h4 className={styles.article_title}>{title}</h4>
      </div>
    </a>
  ) : (
    <a href={link} target="_blank">
      <div className={styles.article}>
        <div className={styles.aritcle_img_con}>
          <img
            className={styles.aritcle_image}
            src={image_url ?? "https://image.dummyjson.com/400x200/282828"}
            alt={title + " img"}
          />
        </div>
        <div className={styles.article_text}>
          <h4 className={styles.article_title}>{title}</h4>
          <p className={styles.article_description}>
            {" "}
            {description && description.length > 200
              ? `${description.substring(0, 250)}...`
              : description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Article;
