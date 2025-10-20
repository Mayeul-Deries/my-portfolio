import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, ExternalLink, FileCode, Sheet, ToyBrick, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Job Tracker",
    subtitles: ["Fullstack"],
    description: "job_tracker.description",
    icon: Sheet,
    iconColor: "text-green-500",
    iconColorDark: "text-green-400",
    iconBg: "bg-green-500/10",
    keyFeatures: "job_tracker.key_features",
    stack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    githubLink: "https://github.com/Mayeul-Deries/job-tracker",
    demoLink: "https://jobtracker-pro.vercel.app/",
  },
  {
    title: "Pharmadesk",
    subtitles: ["Frontend", "Serverless"],
    description: "pharmadesk.description",
    icon: Database,
    iconColor: "text-green-500",
    iconColorDark: "text-green-400",
    iconBg: "bg-green-500/10",
    keyFeatures: "pharmadesk.key_features",
    stack: ["Angular", "Supabase", "PostgreSQL", "TailwindCSS"],
  },
  {
    title: "Lets-go lego",
    subtitles: ["Fullstack"],
    description: "lets_go_lego.description",
    icon: ToyBrick,
    iconColor: "text-green-500",
    iconColorDark: "text-green-400",
    iconBg: "bg-green-500/10",
    keyFeatures: "lets_go_lego.key_features",
    stack: ["React", "Node.js", "Express", "MongoDB", "Styled Components"],
    githubLink: "https://github.com/BerriatMagasin/letsgo-lego",
  },
  {
    title: "Portfolio",
    subtitles: ["Frontend"],
    description: "portfolio.description",
    icon: FileCode,
    iconColor: "text-green-500",
    iconColorDark: "text-green-400",
    iconBg: "bg-green-500/10",
    keyFeatures: "portfolio.key_features",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    githubLink: "https://github.com/Mayeul-Deries/my-portfolio",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex sm:py-20 items-center justify-center px-6 md:px-10 lg:px-16" id="projects">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {t("pages.projects.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">{t("pages.projects.description")}</p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((proj, index) => {
            const Icon = proj.icon;
            const features: string[] = t(`pages.projects.list_projects.${proj.keyFeatures}`, {
              returnObjects: true,
            }) as string[];
            return (
              <motion.div key={index} whileHover={{ y: -3 }} variants={itemVariants}>
                <Card className="flex flex-col overflow-hidden h-full border-2 border-border/50 hover:border-green-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
                  {/* Header */}
                  <CardHeader className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${proj.iconBg} flex-shrink-0`}>
                      <Icon className={`h-6 w-6 ${proj.iconColor} dark:${proj.iconColorDark}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{proj.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {proj.subtitles.map((subtitle, i) => (
                          <Badge key={i} variant="secondary" className="transition-colors cursor-pointer">
                            {subtitle}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                      {t(`pages.projects.list_projects.${proj.description}`)}
                    </p>
                    {/* Key Features */}
                    <div className="space-y-2 pt-4">
                      <h4 className="text-sm font-semibold text-foreground">{t("pages.projects.labels.key_features")}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-green-700 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Tech Stack */}
                    <div className="space-y-2 pt-4">
                      <h4 className="text-sm font-semibold text-foreground">{t("pages.projects.labels.tech_stack")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.stack.map((tech, n) => (
                          <Badge
                            key={n}
                            variant="secondary"
                            className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800 transition-colors cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  {/* Buttons */}
                  <CardFooter className="flex justify-between pt-4 mt-auto">
                    {proj.githubLink ? (
                      <Button asChild variant="link" size="sm">
                        <Link to={proj.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          {t("pages.projects.buttons.code")}
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild variant="ghost" size="sm" className="hover:cursor-not-allowed">
                        <span className="text-muted-foreground">{t("pages.projects.buttons.no_code")}</span>
                      </Button>
                    )}
                    {proj.demoLink ? (
                      <Button asChild size="sm">
                        <Link to={proj.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          {t("pages.projects.buttons.demo")}
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild variant="ghost" size="sm" className="hover:cursor-not-allowed">
                        <span className="text-muted-foreground">{t("pages.projects.buttons.no_demo")}</span>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
