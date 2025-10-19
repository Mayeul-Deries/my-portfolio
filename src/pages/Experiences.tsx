import { easeOut, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    title: "Sopra Steria",
    role: "sopra_steria.role",
    period: "sopra_steria.period",
    description: "sopra_steria.description",
    icon: Briefcase,
  },
  {
    title: "Capgemini",
    role: "capgemini.role",
    period: "capgemini.period",
    description: "capgemini.description",
    icon: Briefcase,
  },
  {
    title: "IMT Mines Alès",
    role: "imt_mines_ales.role",
    period: "imt_mines_ales.period",
    description: "imt_mines_ales.description",
    icon: GraduationCap,
  },
  {
    title: "GTRsuite",
    role: "gtrsuite.role",
    period: "gtrsuite.period",
    description: "gtrsuite.description",
    icon: Briefcase,
  },
  {
    title: "STMicroelectronics",
    role: "stmicroelectronics.role",
    period: "stmicroelectronics.period",
    description: "stmicroelectronics.description",
    icon: Briefcase,
  },
  {
    title: "IUT Informatique Grenoble",
    role: "iut_grenoble.role",
    period: "iut_grenoble.period",
    description: "iut_grenoble.description",
    icon: GraduationCap,
  },
];

export const Experiences = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="experiences" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-12">
          {/* Title */}
          <div className="flex flex-col items-center">
            <div className="text-left space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{t("pages.experiences.title")}</h2>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative min-h-full">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50 origin-top"
            />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative sm:pl-20">
                  {/* Point */}
                  <div className="hidden sm:block absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />

                  {/* Card */}
                  <Card className="w-full p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <exp.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {t(`pages.experiences.list_experiences.${exp.period}`)}
                          </span>
                        </div>
                        <p className="text-base font-medium text-muted-foreground">{t(`pages.experiences.list_experiences.${exp.role}`)}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                          {t(`pages.experiences.list_experiences.${exp.description}`)}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
