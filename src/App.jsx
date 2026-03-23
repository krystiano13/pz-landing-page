import { useEffect } from "react";
import "./output.css";

import "aos/dist/aos.css";
import Aos from "aos";

// components
import { Hero } from "./components/Hero";
import { Divider } from "./components/Divider";
import { About } from "./components/About";
import { Elements } from "./components/Elements";
import { Tasks } from "./components/Tasks";
import { Techstack } from "./components/Techstack";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="page px-[2rem] md:px-[8rem] xl:px-[24rem] pt-[3rem] bg-gray-100 flex flex-col gap-12">
      <Hero />
      <About />
      <Elements />
      <Tasks />
      <Techstack />
    </div>
  );
}

export default App;
