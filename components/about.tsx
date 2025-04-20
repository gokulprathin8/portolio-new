"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Results-driven Full Stack Software Engineer with 4+ years of hands‑on experience designing and delivering scalable, cloud‑native applications. Proficient in Python, React/Next.js, Tailwind CSS and container orchestration on AWS and GCP. Proven expertise in architecting robust system designs, automating end‑to‑end CI/CD pipelines and driving performance improvements through agile practices. Passionate about leveraging emerging technologies to solve complex challenges and deliver high‑impact user experiences. 🚀
      </p>
    </motion.section>
  );
}
