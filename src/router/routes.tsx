import { createBrowserRouter, Outlet } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Home } from "@/pages/Home";
import { Navbar } from "@/components/customs/Navbar";
import { Footer } from "@/components/customs/Footer";
import { Experiences } from "@/pages/Experiences";
import { Projects } from "@/pages/Projects";
import Contact from "@/pages/Contact";

const RootLayout = () => (
  <>
    <SEO />
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
            <Experiences />
            <Projects />
            <Contact />
          </>
        ),
      },
    ],
  },
]);
