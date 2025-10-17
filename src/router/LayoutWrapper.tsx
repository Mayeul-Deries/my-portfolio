import { Navbar } from "@/components/customs/Navbar";
import { Footer } from "@/components/customs/Footer";
import { Outlet } from "react-router-dom";

interface LayoutWrapperProps {
  withLayout?: boolean;
}

export const LayoutWrapper = ({ withLayout = true }: LayoutWrapperProps) => {
  return (
    <>
      {withLayout && <Navbar />}
      <Outlet />
      {withLayout && <Footer />}
    </>
  );
};
