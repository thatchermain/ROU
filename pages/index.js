import Head from "next/head";
import Header from "../components/Header/Header";
import Image from "next/image";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Projects from "../components/Projects/Projects";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ROU - Work Smart</title>
        <meta
          name="description"
          content="Work Smart with Endless Possibilities"
        />
        <meta name="keywords" content="Work Smart" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700;800&family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
        ></link>
      </Head>
      <Header />
      <Intro />
      <About />
      <Service />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
