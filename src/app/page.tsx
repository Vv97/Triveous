import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import News from "./news/News";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProtectedRoute>
        <Navbar />
        <News />
      </ProtectedRoute>
    </main>
  );
}
