import Image from "next/image";
import React from "react";

const WhyChooseUsEduChacha = () => {
  const contentArray = [
    {
      title: "Tailored Guidance You Can Trust",
      description:
"At Edu Chacha, we focus on your child's unique needs, not school preferences. Our unbiased recommendations are designed to match the best educational environment for your child, ensuring a thoughtful and genuine selection process.",
      icon: "/check.svg",
    },
    {
      title: "Personalized Expert Support",
      description:
        "Our team of seasoned advisors offers step-by-step guidance, providing tailored counseling to help you make confident, well-informed decisions about your child's education and future.",
      icon: "/check.svg",
    },
    {
      title: "Skill-Based Evaluations",
      description:
        "With our customized mock tests and assessments, we identify your child's strengths and areas for growth, enabling a more precise school placement that aligns with their abilities and aspirations.",
      icon: "/check.svg",
    },
    {
      title: "In-Depth School Profiles",
      description:
        "Edu Chacha delivers comprehensive insights into schools, covering academics, extracurricular activities, and facilities, empowering you to make the best choice for your child's development.",
      icon: "/check.svg",
    },
    {
      title: "Honest and Transparent Service",
      description:
        "We prioritize trust by maintaining a clear and straightforward approach. Charging parents instead of schools ensures our advice remains impartial, reliable, and focused solely on your child's interests.",
      icon: "/check.svg",
    },
    {
      title: "Comprehensive Support from Start to Finish",
      description:
        "From your first consultation to admission follow-ups, Edu Chacha provides complete assistance at every stage of the school selection process, making your journey smooth, stress-free, and rewarding.",
      icon: "/check.svg",
    },
  ];

  return (
    <div className="pb-10 md:py-16 ">
      <h1 className="text-[#323232] text-[20px] md:text-[36px] font-bold text-center ">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center pt-12">
        <div>
          <Image
            src="/edu stick.gif"
            alt="whychooseus"
            width={1000}
            height={1000}
            className="w-[550px] h-[350px] mx-auto"
          />
        </div>

        <div>
          {contentArray.map((item, index) => (
            <div key={index} className="flex gap-4 mb-6 px-8 md:px-10">
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
