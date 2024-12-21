import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Privacy Policies",
    description:
      "Welcome to EduChacha - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Privacy Policy</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/privacy.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Welcome to Edu Chacha&apos;s Privacy Policy
          </p>
          <p>
            Your privacy is our priority at Edu Chacha. This policy outlines how
            we collect, use, and protect your information while ensuring
            complete transparency.
          </p>
          <p>
            {" "}
            <p className="text-[24px] font-semibold">What We Collect and Why</p>
            To provide you with a seamless and personalized experience, we may
            collect basic personal information such as your name, email, and
            preferences. This information helps us guide you toward the right
            educational opportunities and keep you updated about important
            developments.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Understanding User Behavior
            </p>
            We use technology to analyze browsing activity and preferences.
            These insights help us refine our platform, improve user experience,
            and develop features that align with your needs.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Protecting Your Information
            </p>
            Edu Chacha employs advanced security measures to safeguard your data
            against unauthorized access or misuse. While no system is entirely
            foolproof, we are committed to minimizing risks and ensuring
            responsible data handling.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Responsible Information Sharing
            </p>
            We may share limited data with trusted partners or service providers
            to enhance your experience. This is done strictly within defined
            parameters and with your consent where necessary.
          </p>
          <p>
            <p className="text-[24px] font-semibold">Transparent Updates</p>
            As our platform grows, our privacy practices may evolve. We&apos;ll
            ensure that any significant updates to this policy are communicated
            clearly, so you always know how your information is handled.
          </p>

          <p>
            <p className="text-[24px] font-semibold">
              Need Help? Reach Out Anytime
            </p>
            If you have questions or concerns about your privacy, we&apos;re
            here to assist you:
            <br />
            <p>Email: info@goedu.in</p>
            <p>Contact Number:01353530324, 9557695360</p>
            <p>
              Thank you for trusting Edu Chacha. We&apos;re committed to
              protecting your privacy as you explore educational opportunities
              with us.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
