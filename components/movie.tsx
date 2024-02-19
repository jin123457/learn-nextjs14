"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";
interface IMovie {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovie) {
  const router = useRouter();
  const onHandleRouter = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onHandleRouter} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
