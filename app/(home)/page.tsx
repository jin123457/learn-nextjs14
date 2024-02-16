import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const url = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const moives = await getMovies();
  return <p>{JSON.stringify(moives)}</p>;
}
