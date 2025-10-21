import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";
import { scrollToSection } from "@/utils/scrollToSection";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { easeOut, motion, AnimatePresence, type Variants } from "framer-motion";

export const Home = () => {
  const { t } = useTranslation();

  const rotatingTexts = ["fullstack_dev", "tech_explorer", "uiux_lover"];
  const skills = [
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker",
    "Vercel",
    "Render",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  // Blur animation on rotating texts
  const blurVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(6px)",
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen pt-20 sm:pt-36 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center max-w-5xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
          {/* Presentation */}
          <div className="mb-4">
            <motion.h1 className="text-4xl sm:text-6xl font-bold mb-2" variants={itemVariants}>
              <span className="text-foreground">Mayeul Deries</span>
            </motion.h1>

            {/* Rotating texts with blur */}
            <div className="relative h-10 sm:h-14 overflow-hidden flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingTexts[index]}
                  variants={blurVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute text-lg sm:text-xl text-muted-foreground"
                >
                  {t(`pages.home.rotating_texts.${rotatingTexts[index]}`)}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            className="text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t("pages.home.me")}
          </motion.p>

          {/* Skills */}
          <motion.div className="flex flex-wrap justify-center gap-8 mb-12">
            <motion.div>
              <h3 className="text-xl font-semibold mb-4 flex justify-center items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                {t("pages.home.skills")}
              </h3>
              <motion.div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                  <motion.div key={index} whileHover={{ y: -3 }} variants={itemVariants}>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800 transition-colors cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}

          <motion.div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto sm:min-w-[145px]"
            >
              <Button
                variant="outline"
                onClick={(e) => scrollToSection("contact", e)}
                className="w-full border border-gray-300 px-6 py-2 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-900/20 flex items-center justify-center gap-2"
              >
                <span>{t("pages.home.button.action1")}</span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto sm:min-w-[145px]"
            >
              <Button
                variant="outline"
                onClick={(e) => scrollToSection("projects", e)}
                className="w-full border border-gray-300 px-6 py-2 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-900/20 flex items-center justify-center gap-2"
              >
                <span>{t("pages.home.button.action2")}</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center mt-5 sm:mt-16 lg:mt-24">
          <Button
            variant="ghost"
            className="flex items-center justify-center"
            size="icon"
            aria-label="Voir la section À propos"
            onClick={(e) => scrollToSection("experiences", e)}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </Button>
        </div>
      </div>
    </section>
  );
};
