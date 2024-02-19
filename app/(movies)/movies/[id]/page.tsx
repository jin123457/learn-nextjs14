import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={`Loading movie info`}>
        {/* @ts-expect-error Async Server Component */}
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={`Loading movie video`}>
        {/* @ts-expect-error Async Server Component */}
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
