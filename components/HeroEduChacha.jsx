import Image from "next/image";
import React from "react";

const HeroEduChacha = () => {
  return (
    <>
      
      <div>
        <div className="mt-[84px]">
          <Image
            src="/bannerbg2.png"
            width={1000}
            height={1000}
            alt="banner"
            className="w-full h-full object-cover hidden xl:block"
          />
          <Image
            src="/mobileeduchacha.png"
            width={1000}
            height={1000}
            alt="banner"
            className="w-full h-[65vh] md:object-cover  xl:hidden "
          />
        </div>

        <div className="flex justify-end mr-12 ">
          <div className="absolute bottom-[21%] hidden xl:block  border-[8px] md:border-[14px] border-[#093655] rotate-3 shadow-intense">
            <Image
              src="/bannereduchacha.gif"
              width={400}
              height={460}
              alt="chacha"
              className="w-[200px] h-[280px] lg:w-[380px] lg:h-[430px]  "
            />
          </div>

          <div className="absolute -bottom-0 md:bottom-[15%] right-12 md:right-96 hidden xl:block">
            <Image
              src="/books.svg"
              width={1000}
              height={1000}
              alt="books"
              className="w-[120px] h-[150px] md:w-[170px] md:h-[205px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroEduChacha;
