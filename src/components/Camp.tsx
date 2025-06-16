import Image from "next/image";
import React from "react";
import { PEOPLE_URL } from "../../constants";

type CampSiteProps = {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  peopleJoined?: string;
};

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-r-4xl 2xl:rounded-4xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            ></Image>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 ">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              ></Image>
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:mx-auto 2xl:max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          // backgroundImage="bg-[url('/img-1')]"
          backgroundImage="bg-[url('/img-1.png')]"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasurun"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-[url('/img-2.png')]"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-4xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost and not knowing the way?</strong>
          </h2>
          <p className="regular-14 xl:regular-16 text-white mt-5">
            Starting the anxiety of the climbers when visiting a new climbing
            location, the posssibility of getting lost is very high, thats why
            we are here for those of you who want to start an adventure.
          </p>
          <Image
            src="/quote.svg"
            alt="Camp-2"
            width={186}
            height={219}
            className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px]"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Camp;
