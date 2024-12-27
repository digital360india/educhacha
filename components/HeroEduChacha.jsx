import Image from "next/image";
import React from "react";
import herobanner from "@/public/herobanner.svg";

const HeroEduChacha = () => {
  return (
    <>
      {/* <div
        className="relative w-full h-[100vh] md:h-[105vh] bg-cover bg-center pt-8"
        style={{ backgroundImage: `url(${herobanner.src})` }}
      >
        <div className="md:grid md:grid-cols-2 items-center h-full px-8 md:px-16">
          <div className=" flex justify-center">
            <div className="absolute bottom-12 border-[8px] md:border-[16px] border-[#093655] rotate-3 shadow-intense">
              <Image
                src="/bannereduchacha.gif"
                width={400}
                height={460}
                alt="chacha"
                className="w-[200px] h-[280px] lg:w-[400px] lg:h-[460px]"
              />
            </div>

            <div className="absolute -bottom-0 md:-bottom-4 left-12 md:left-32">
              <Image
                src="/books.svg"
                width={183}
                height={219}
                alt="books"
                className="w-[120px] h-[150px] md:w-[183px] md:h-[219px]"
              />
            </div>
          </div>

          <div className="md:flex md:flex-col md:justify-center md:items-end md:text-right mt-[60%] sm:mt-[0%]">
            <h2 className="text-[#023250] text-[24px] md:text-[40px] Merriweather">
              Find the <strong>Perfect School</strong> for Every
              <strong>Child</strong>
            </h2>
            <h2 className="text-[#073650] text-[32px] md:text-[55px] Abril">
              eduChacha
            </h2>
          </div>
        </div>
      </div> */}
      <div>
        <div className="mt-[86px]">
          <Image
            src="/bannerbg2.svg"
            width={1000}
            height={1000}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-end mr-12">
          <div className="absolute bottom-[22%]  border-[8px] md:border-[16px] border-[#093655] rotate-3 shadow-intense">
            <Image
              src="/bannereduchacha.gif"
              width={400}
              height={460}
              alt="chacha"
              className="w-[200px] h-[280px] lg:w-[400px] lg:h-[460px]"
            />
          </div>

          <div className="absolute -bottom-0 md:bottom-28 right-12 md:right-96">
            <Image
              src="/books.svg"
              width={183}
              height={219}
              alt="books"
              className="w-[120px] h-[150px] md:w-[183px] md:h-[219px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroEduChacha;
