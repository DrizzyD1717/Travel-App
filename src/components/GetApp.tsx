import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flex items-center justify-center w-full flex-col pb-[100px] ">
      <div className="relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-950 bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px]">
        <div className="z-20 flex w-full flex-1 flex-col justify-center items-start gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on IOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="border-white bg-white px-8 py-3 text-green-500"
              full
            ></Button>

            <Button
              type="button"
              title="Playstore"
              icon="/android.svg"
              variant="border-gray-400 bg-green-950 px-8 py-5"
              full
            ></Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
