import { Metadata } from "next";
import { json } from "stream/consumers";
import Navigation from "../../components/navigation";

export const metadata: Metadata = {
  title: "Home",
};

const url = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const moives = await getMovies();
  return (
    <>
      <Navigation />
      <p>{JSON.stringify(moives)}</p>
    </>
  );
}
