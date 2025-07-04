import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 mx-auto max-w-[1440px] py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="absolute right-0 top-0 h-screen w-screen bg-cover bg-center md:-right-28 xl:-top-60 bg-[url('/pattern-bg.png')]"></div>

      <div className="relative flex flex-col flex-1 z-20 xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[30px] w-10 lg:w-[50px] "
        ></Image>
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-500 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  width={24}
                  key={index}
                  height={24}
                  alt="star"
                ></Image>
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              {" "}
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
          ></Button>
          <Button
            type="button"
            title="How we work"
            icon="/play.svg"
            variant="btn_white_text"
          ></Button>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-950 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-400">Location</p>
              <Image
                src="/close.svg"
                width={24}
                height={24}
                alt="close"
              ></Image>
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-400">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-400">Elevation</p>
              <p className="bold-20 text-white">2.040 Km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
