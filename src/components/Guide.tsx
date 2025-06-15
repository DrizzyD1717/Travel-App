import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flex justify-center items-center flex-col ">
      <div className=" px-6 lg:px-20 2xl:px-0 mx-auto max-w-[1440px] w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50}></Image>
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-500">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide you to easy path
          </h2>
          <p className="regular-16 text-gray-400 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support ofline maps when there is no
            internet connection in the field. Invite your friend, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto max-w-[1440px] relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-4xl"
        ></Image>

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          ></Image>
          <div className="flex items-center justify-between flex-col ">
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between w-full">
                <p className="egular-16 text-gray-300">Destination</p>
                <p className="bold-16 text-green-500">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="egular-16 text-gray-300">Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
