"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Parul Rawat",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.53.37_PM.jpg",
    description:
      "Edu Chacha made my boarding school search so easy! The platform had all the information I needed, and the detailed listings helped me find a school that perfectly matched my interests and goals. I am so excited about my new journey, and I owe it all to Edu Chacha!",
  },
  {
    name: "Priyangini",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_4.01.42_PM.jpg",
    description:
      "As a parent, choosing the right boarding school for my child felt overwhelming. Edu Chacha's user-friendly platform and transparent details helped us narrow down our choices effortlessly. The consultation support was incredibly reassuring, happier with our final decision!",
  },
  {
    name: "Priya Danu",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.59.49_PM.jpg",
    description:
      "Thanks to Edu Chacha, I found a boarding school with amazing extracurricular activities and great academics. The platform is super easy to use, and it gave me all the info I needed to feel confident about my choice. I'm so happy with my school now!",
  },
  {
    name: "Shivam Panwar",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.54.31_PM.jpg",
    description:
      "Edu Chacha is a lifesaver for busy parents! The platform's comprehensive resources and unbiased insights made the process of selecting a boarding school stress-free. We’re thrilled with the school we found for our child, and Edu Chacha played a big role in making it happen.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 cursor-pointer hidden md:block"
    >
      <Image
        src="/leftbutton.svg"
        alt="left arrow"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 cursor-pointer hidden md:block"
    >
      <Image
        src="/rightbutton.svg"
        alt="right arrow"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-background-color p-1 ">
      <div className="px-8 pt-8  md:px-14 md:pt-14">

      <h2 className="text-[#FFFFFF] text-[14px] md:text-[20px]">Get Inspired by stories</h2>
      <h2 className="text-[#FFFFFF] text-[24px] md:text-[46px]">
        Experience of Clients with Us...
      </h2>
      </div>
      <div className="md:pt-8">
        <Carousel
          responsive={responsive} 
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="h-[400px] md:h-[460px] flex justify-center items-center"
            >
              <div
                className="bg-white w-[370px] h-[300px] md:h-[380px] mx-6 p-8 md:mx-14 rounded-lg relative "
                style={{
                  boxShadow: "0px 2px 10px 0px #00000040",
                }}
              >
                <div className="absolute -top-14 -left-8">
                  <Image
                    src="/doublecomma.svg"
                    width={1000}
                    height={1000}
                    alt="testimonial quote"
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <p className="text-[12px] md:text-[1rem] text-[#323232] text-justify mt-[25px] md:mt-[35px]">
                  {testimonial.description}
                </p>
                <div className="flex items-center justify-between pt-6">
                  <p className="text-[#000000] text-[20px] font-semibold">
                    {testimonial.name}
                  </p>
                  <Image
                    src={testimonial.image}
                    width={1000}
                    height={1000}
                    alt={testimonial.name}
                    className="md:w-[70px] md:h-[70px] w-[60px] h-[60px] rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
