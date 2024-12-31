import Navbar from "../components/Navbar";
import HomePage from "../components/Home/page";
import Home2 from "../components/Home/home2";
import Home3 from "@/components/Home/home3";
import Home4 from "@/components/Home/home4";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Navbar />
      <HomePage />
      <Home2 />
      <Home3 />
      <Home4 />
    </div>
  );
}
