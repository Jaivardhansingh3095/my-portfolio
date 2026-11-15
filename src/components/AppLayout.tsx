import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div
      data-theme="rise"
      className="w-full min-h-screen grid grid-rows-[auto_1fr_auto] bg-(--key-bgColor) font-dmsans"
    >
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
