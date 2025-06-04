import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="border-2 border-red-500 padding-container flex flex-col gap-20 max-container py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"></div>

      <div className="relative flex flex-col flex-1 z-20 xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[30px] w-10 lg:w-[50px] "
        ></Image>
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
      </div>
    </section>
  );
};

export default Hero;
