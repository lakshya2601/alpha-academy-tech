import Navbar from "./components/Navbar/page";
import HomePage from "./components/Home/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Navbar />
      <HomePage />
    </div>
  );
}
