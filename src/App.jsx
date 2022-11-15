import React from "react";
import ReactGA from "react-ga";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portifolio from "./components/portifolio/Portifolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

ReactGA.initialize('G-EMBWT14QDV');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
