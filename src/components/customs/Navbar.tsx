import { Briefcase, FileText, House, Mail, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";
import { ThemeChanger } from "./ThemeChanger";
import { LanguageChanger } from "./LanguageChanger";
import { scrollToSection } from "@/utils/scrollToSection";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const navItems = [
    { id: "home", label: t("navbar.home"), icon: <House className="w-4 h-4" /> },
    { id: "experiences", label: t("navbar.experiences"), icon: <Briefcase className="w-4 h-4" /> },
    { id: "projects", label: t("navbar.projects"), icon: <FileText className="w-4 h-4" /> },
    { id: "contact", label: t("navbar.contact"), icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && open) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navItems.map((item) => item.id);
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-100  ${
        isScrolled ? "bg-background/60 backdrop-blur-md py-3" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between select-none">
          <div className="font-medium text-xl">
            <Link to="/" onClick={(e) => scrollToSection("home", e)}>
              Mayeul
            </Link>
          </div>

          <div className="flex gap-8 font-light text-gray-600 dark:text-neutral-300">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                className={`transition-all duration-100 ease-in-out hover:scale-105 ${activeSection === item.id ? "text-primary font-medium" : "hover:text-primary"}
                  `}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 items-center justify-between">
            <LanguageChanger />
            <ThemeChanger />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-between items-center p-1">
          <div className="font-medium text-xl">
            <Link to="/" onClick={(e) => scrollToSection("home", e)}>
              Mayeul
            </Link>
          </div>
          <Menu onClick={() => setOpen(!open)} className="cursor-pointer" />
        </div>
      </div>

      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 w-4/5 h-screen overflow-hidden bg-background transition-transform duration-300 ease-in-out z-20",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end">
          <X onClick={() => setOpen(!open)} className="m-4 cursor-pointer" />
        </div>
        <div className="flex flex-col gap-8 p-8 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`#${item.id}`}
              onClick={(e) => {
                (scrollToSection(item.id, e), setOpen(false));
              }}
              className={`flex gap-4 items-center justify-start ${activeSection === item.id ? "text-primary" : "hover:text-primary"}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <Separator />
          <div className="flex gap-8 justify-center items-center">
            <LanguageChanger />
            <ThemeChanger />
          </div>
        </div>
      </div>
    </header>
  );
};
