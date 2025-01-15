
export async function generateMetadata() {
  return {
    title: "Terms and Condition",
    description:
      "Welcome to EduChacha - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const TermsAndCondition = () => {
  return (
    <>
      
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Terms And Condition</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/term.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Welcome to Edu Chacha&apos;s Terms and Conditions
          </p>
          <p>
            We&apos;re thrilled to welcome you to Edu Chacha, where educational
            guidance meets simplicity and trust. These terms outline how you can
            use our platform responsibly and effectively.
          </p>
          {/* Please read these terms carefully. */}
          <p>
            <p className="pb-4">
              <p className="text-[20px]  font-bold mb-1">
                A Platform for Positive Exploration
              </p>
              Edu Chacha is designed to assist students and families in making
              informed decisions about education. We encourage respectful and
              constructive use of our resources to maintain a supportive
              environment for all users.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Constantly Evolving for You
              </p>
              To stay relevant in a fast-changing education landscape, we
              regularly update our tools and features. Our goal is to ensure
              that Edu Chacha remains your reliable source for all things
              education.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Your Account, Your Responsibility
              </p>
              When you create an account with Edu Chacha, you take the first
              step toward personalized guidance. Please keep your account
              details secure and up-to-date to enjoy uninterrupted access to our
              platform
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Trustworthy and Accurate Information
              </p>
              At Edu Chacha, accuracy is our top priority. Our team works hard
              to ensure that all information about schools, admissions, and
              programs is current and reliable. However, we recommend verifying
              specific details directly with institutions for complete
              assurance.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                We Value Your Voice
              </p>
              Your feedback is the compass that guides our growth. Share your
              thoughts and suggestions with us to help improve your experience
              on Edu Chacha.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Your Privacy, Our Promise
              </p>
              We respect and protect your privacy. Any data you share is used
              only to enhance your experience on our platform. Please refer to
              our privacy policy for more details.
            </p>{" "}
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Fostering Constructive Engagement
              </p>
              Edu Chacha thrives on collaboration and positive interactions. We
              request all users to engage respectfully with our content and
              community.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Service Reliability
              </p>
              While we aim to provide uninterrupted access to our services,
              occasional technical issues may occur. Rest assured, our team is
              always ready to resolve any disruptions promptly.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Adapting to Change
              </p>
              As our platform evolves, we may update these terms to reflect new
              features or improvements. Significant updates will be communicated
              clearly to ensure you&apos;re always informed.
            </p>
          </p>
          <p className="pb-4">
            <p className="text-[24px] font-semibold">Here to Support You</p>
            If you have any questions, concerns, or feedback, we&apos;re just a
            message away:
            <br />
            <p>Email: educhachaindia@gmail.com</p>
            <p>
              Contact Number: 01353530324, 9557695360
              <p className="pt-4">
                Thank you for choosing Edu Chacha. Together, let&apos;s make
                your educational journey a smooth and rewarding experience.
              </p>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
