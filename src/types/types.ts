import { User } from "firebase/auth";

export interface IUserFrom {
  email: string;
  password: string;
}

export // Define the authentication context type
interface AuthContext {
  user: User | null | undefined;
  error: Error | null | undefined;
  setUser: (user: User | null) => void;
  setError: (error: Error | null) => void;
  logout: () => void;
}

// export interface NewsArticle {
//   status: string;
//   totalResults: number;
//   articles: NewsArticleItem[];
// }

export interface NewsArticleItem {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  view?: string;
}

export interface IArticle {
  article_id: string;
  category: string[];
  content: string;
  country: string[];
  creator: string[];
  description: string;
  image_url: string | null;
  keywords: string[];
  language: string;
  link: string;
  pubDate: string;
  source_id: string;
  source_priority: number;
  title: string;
  video_url: string | null;
  view?: string;
}

export interface NewsArticle {
  nextPage: string;
  results: Array<IArticle>;
  status: string;
  totalResults: number;
}
