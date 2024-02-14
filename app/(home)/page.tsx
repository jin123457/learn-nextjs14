import { Metadata } from "next";
import Navigation from "../../components/navigation";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <h1>Home!</h1>
    </>
  );
}
