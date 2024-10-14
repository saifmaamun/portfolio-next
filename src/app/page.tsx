"use client";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

// particles

import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import ParticlesBackground from "@/components/ParticlesBackground";
import AboutMe from "@/components/AboutMe";

// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

// particles

export default function Home() {
  // particles
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <>
        <Hero />
        <AboutMe />
        <Experiences />
        <Services />
        <Skills />
        <Works />
        <Contact />
        {/* <UniqueSection /> */}
        <ParticlesBackground />
      </>
    );
  }

  // particles
}
