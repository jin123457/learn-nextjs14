import { Metadata } from "next";
import Navigation from "../../components/navigation";

export const metadata: Metadata = {
  title: "About Us",
};
export default function AboutUs() {
  return (
    <>
      <Navigation />
      <h1>about us!</h1>
    </>
  );
}
