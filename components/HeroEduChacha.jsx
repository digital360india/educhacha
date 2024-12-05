import Image from "next/image";
import React from "react";
import herobanner from "@/public/herobanner.svg";

const HeroEduChacha = () => {
  return (
    <>
      <div className="pt-8">
        <div
          className="w-full h-[100vh] md:h-[105vh] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${herobanner.src})` }}
        >
          <div className="flex items-center">
            <div className="mt-[50%] md:mt-[18%] mx-6 md:mx-24 text-center md:text-left">
              <h2
                className="text-[#023250] text-[24px] md:text-[40px]"
                style={{ fontFamily: "Merriweather" }}
              >
                Find the <strong>Perfect School</strong> for Every
                <strong> Child</strong>
              </h2>
              <h2
                className="font-bold text-[#073650] text-[32px] md:text-[55px]"
                style={{ fontFamily: "Abril Fatface" }}
              >
                eduChacha
              </h2>
            </div>
          </div>
          <div>
            <div className="absolute bottom-10 right-14 md:-bottom-6 md:right-20 border-[8px] md:border-[16px] border-[#093655] rotate-3 shadow-intense">
              <Image
                src="/bannereduchacha.gif"
                width={1000}
                height={1000}
                alt="chacha"
                className="w-[200px] h-[280px] lg:w-[400px] lg:h-[460px]"
              />
            </div>
            <div className="absolute -bottom-2 md:-bottom-20 right-60 md:right-[410px]">
              <Image
                src="/books.svg"
                width={1000}
                height={1000}
                alt="books"
                className="w-[120px] h-[150px] md:w-[183px] md:h-[219px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroEduChacha;
