import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={`Loading movie info`}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={`Loading movie video`}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
