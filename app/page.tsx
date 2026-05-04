import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Categories />
      <Products />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
