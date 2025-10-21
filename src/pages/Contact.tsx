import { easeOut, motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

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
    <section id="contact" className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full mx-auto space-y-14"
      >
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
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {t("pages.contact.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">{t("pages.contact.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 items-start">
          <div className="space-y-14 md:col-span-2">
            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-base font-semibold text-green-700 dark:text-green-400">{t("pages.contact.labels.contact")}</h3>
              <motion.div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full sm:w-auto sm:min-w-[145px]"
                >
                  <Button
                    variant="outline"
                    className="w-full border border-gray-300 px-6 py-2 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-900/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <a href="mailto:mayeul.deries@gmail.com" target="_blank" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{t("pages.contact.buttons.email.label")}</span>
                    </a>
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
                    className="w-full border border-gray-300 px-6 py-2 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-900/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <a href="https://wa.me/33699453963" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>{t("pages.contact.buttons.whatsapp.label")}</span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <h3 className="text-base font-semibold text-green-700 dark:text-green-400">{t("pages.contact.labels.connect")}</h3>
              <motion.div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full sm:w-auto sm:min-w-[145px]"
                >
                  <Button
                    variant="outline"
                    className="w-full border border-gray-300 px-6 py-2 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-900/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <a
                      href="https://www.linkedin.com/in/mayeul-deries/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>{t("pages.contact.buttons.linkedin.label")}</span>
                    </a>
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
                    className="w-full border border-gray-300 px-6 py-2 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-900/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <a
                      href="https://github.com/Mayeul-Deries"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t("pages.contact.buttons.github.label")}</span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          {/* Image div */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col pt-18 md:pt-0 items-center md:items-start space-y-2"
          >
            <div className="flex flex-col">
              <motion.div className="w-48 h-48 rounded-full overflow-hidden" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img src="/mayeul-deries.jpg" alt="Mayeul Deries" className="w-full h-full object-cover" />
              </motion.div>
              <h3 className="text-xl font-semibold mt-4">Mayeul Deries</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-green-700" />
                <span>{t("pages.contact.labels.location")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
