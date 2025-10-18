import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Navbar } from "@/components/customs/Navbar";
import { Footer } from "@/components/customs/Footer";

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
          </>
        ),
      },
    ],
  },
]);
