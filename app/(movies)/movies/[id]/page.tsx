import Navigation from "../../../../components/navigation";

export default function ({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <Navigation />
      <h1>movies {id}</h1>
    </>
  );
}
