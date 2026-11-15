import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import BurgerKillaStudy from "./pages/BurgerKillaStudy";
import KeyTyppStudy from "./pages/KeyTyppStudy";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/work/burgerkilla",
        Component: BurgerKillaStudy,
      },
      {
        path: "/work/keyTypp",
        Component: KeyTyppStudy,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
