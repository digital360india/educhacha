import Image from "next/image";
import React from "react";

const WhyChooseUsEduChacha = () => {
  // Array containing content for the "Why Choose Us" section
  const contentArray = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis nec mi dignissim pharetra placerat faucibus cursus.",
      icon: "/check.svg",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Erat est massa ultricies porttitor vivamus consequat sit facilisis ultricies.",
      icon: "/check.svg",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Placerat faucibus cursus erat est massa ultricies porttitor vivamus facilisis.",
      icon: "/check.svg",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Felis nec mi dignissim pharetra placerat cursus erat massa ultricies porttitor.",
      icon: "/check.svg",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Vivamus consequat sit facilisis felis nec mi dignissim pharetra placerat.",
      icon: "/check.svg",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Ultricies porttitor vivamus consequat sit facilisis cursus erat est massa.",
      icon: "/check.svg",
    },
  ];

  return (
    <div className="py-20">
      <h1 className="text-[#323232] text-[36px] font-bold text-center ">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-12">
        <div>
          <Image
            src="/edu stick.gif"
            alt="whychooseus"
            width={1000}
            height={1000}
            className="w-[480px] h-[300px] mx-auto"
          />
        </div>

        <div>
          {contentArray.map((item, index) => (
            <div key={index} className="flex gap-4 mb-6">
              <Image
                src={item.icon}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-[20px] h-[23px]"
              />
              <div>
                <h2 className="text-[#323232] text-lg font-semibold">
                  {item.title}
                </h2>
                <p className="text-[#898989] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsEduChacha;
