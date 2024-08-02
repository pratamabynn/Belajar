import Navbar from "@/components/block/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header className="w-full relative">
        <Navbar />
      </header>
      <main className="mx-8 mt-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
