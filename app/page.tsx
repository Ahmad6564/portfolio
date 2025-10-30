import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills-content"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Muhammad Ahmad | Computer Engineering Student & ML Engineer",
  description:
    "Portfolio of Muhammad Ahmad, a Computer Engineering Student specializing in Machine Learning, Deep Learning, AI, and Embedded Systems.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </div>
  )
}
