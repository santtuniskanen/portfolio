import Head from "next/head";
import Main from "../components/Main.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Santtu Niskanen - Software Engineer</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
