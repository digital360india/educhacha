import Image from "next/image";
import React from "react";

const HeroEduChacha = () => {
  return (
    <div className="h-auto">
      <div className="relative w-full">
        <div className="relative w-full">
          {/* Desktop banner */}
          <Image
            src="/bannerbg2.png"
            width={1440}
            height={700}
            alt="banner"
            priority
            className="w-full h-auto object-contain hidden xl:block"
          />

          <Image
            src="/mobileeduchacha.png"
            width={800}
            height={600}
            alt="banner"
            priority
            className="w-full h-[45vw] min-h-[580px] object-cover object-top xl:hidden"
          />
        </div>

        <div className="hidden xl:block">
          <div
            className="
            absolute
            bottom-[10%]
            right-[5%]
            border-[14px] border-[#093655]
            rotate-3
            shadow-[8px_8px_0px_rgba(9,54,85,0.4)]
          "
          >
            <Image
              src="/bannereduchacha.gif"
              width={400}
              height={460}
              alt="chacha"
              className="
              w-[clamp(300px,22vw,460px)]
              h-auto
              block
            "
            />
          </div>

          <div
            className="
            absolute
            bottom-[4%]
            right-[clamp(220px,calc(6%+clamp(200px,14vw,380px)+24px),600px)]
          "
          >
            <Image
              src="/books.svg"
              width={170}
              height={205}
              alt="books"
              className="w-[clamp(100px,9vw,170px)] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEduChacha;
