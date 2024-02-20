import { Metadata } from "next";
import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(process.env.API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const moives = await getMovies();
  return (
    <div className={styles.container}>
      {moives.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
