"use client";
import React from "react";
import Image from "next/image";

const AboutusEduChacha = () => {
  return (
    <>
     

      <div className="bg-background-button">
        <h1
          className="text-[#FFFFFF] text-[50px] md:text-[200px] text-center pt-40 md:pt-0 md:mt-20"
          style={{ fontFamily: "League Gothic" }}
        >
          About Us
        </h1>

        
        <div className="flex justify-center items-center mb-20">
          <div className="bg-white rounded-full p-10">

          <Image
            src="/educhachalogo.png"
            alt="about"
            width={1000}
            height={1000}
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px]  "
            />
            </div>
        </div>

        <h2 className="text-center text-white text-[30px] mb-5">
          Let&apos;s Begin !!
        </h2>
        <div className="flex justify-center items-center pb-10">
          <Image
            src="/downarrowedu.svg"
            width={1000}
            height={1000}
            alt="down"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => {
              document.getElementById("scroll-target").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>

      <div
        id="scroll-target"
        className="sm:mt-12 text-[#323232] md:px-[100px]  pb-12 md:pb-0"
      >
        <div className="bg-[#F8F8F8] px-7 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left hidden md:block">
              WHO WE ARE
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify mt-4 ">
              Edu Chacha is a leading online platform designed to connect families with the best boarding schools in India. Our site is a reliable resource, providing detailed information and insights about each institution, making the school selection process simpler and more informed for parents and students.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center space-y-2 md:space-y-4 order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
              WHO WE ARE
              </p>
              <img
                src="/educhachalogo.png"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-5 md:gap-0">
              <img
                src="./edu chacha_stick 1 (1).svg"
                className="w-[100px] h-[110px] md:h-[160px] md:w-[150px]"
                alt="Passion logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold md:hidden">
              OUR COMMITMENT TO EDUCATION              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
              OUR COMMITMENT TO EDUCATION              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              At Edu Chacha, we are dedicated to promoting quality education and believe in the life-changing impact of boarding schools. Our team works tirelessly to ensure our platform represents the diversity and excellence of boarding institutions in India, catering to a wide range of needs and preferences.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center  md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center pb-4 md:text-left hidden md:block">
              TRUST AND CLARITY IN OUR APPROACH              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              We prioritize trust and clarity in all our interactions. Edu Chacha ensures that families have access to accurate, up-to-date details about every boarding school. Our platform is designed to provide an unbiased view, helping you choose the right school that aligns with your goals.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
              TRUST AND CLARITY IN OUR APPROACH              </p>
              <img
                src="./ourmission.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                OUR AIM
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                OUR AIM
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              Edu Chacha&apos;s aim is to simplify the process of finding the perfect boarding school. We strive to be the go-to resource for boarding school education in India, offering a user-friendly platform that saves time and effort for families. Schools can also showcase their unique features to a nationwide audience.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left pb-4 hidden md:block">
                BRINGING SCHOOLS AND FAMILIES TOGETHER
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              Edu Chacha connects India&apos;s top boarding schools with families looking for the best educational opportunities for their children. Our platform helps schools reach a wider audience while offering parents and students a carefully curated selection of institutions that meet high standards.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                BRINGING SCHOOLS AND FAMILIES TOGETHER
              </p>
              <img
                src="/passion.png"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Join us logo"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                GUIDANCE AND SUPPORT
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                GUIDANCE AND SUPPORT
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              We provide consultation services to guide families in choosing the right boarding school. Our team is always ready to answer questions and offer support, ensuring families make informed decisions that suit their needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusEduChacha;
