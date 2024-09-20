import FeatureSection from "@/components/FeatureSection";
import SecurityBadgePng from "@/app/_assets/security-badge.png";
import SecurityBadgePng2 from "@/app/_assets/security-badge-2.png";
import {
  aboutFeatures,
  aboutSecondaryFeatures,
  whyChooseMuteItems,
} from "@/libs/contants";
import CallToAction from "@/components/CallToAction";
import LaptopPng from "@/app/_assets/laptop.png";
import Image from "next/image";
import Image1Png from "@/app/_assets/img-1.png";

const PrimarySection = () => {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-5xl font-bold leading-relaxed text-center py-4">
        Who We Are
      </h1>
      <FeatureSection
        mode="left"
        imageSrc={SecurityBadgePng}
        description="MutaEngine is a team of passionate cybersecurity experts, software engineers, and innovators united by a common vision: to create a world where software developers can innovate without fear of their work being compromised. Our founders, driven by decades of combined experience in cybersecurity, software development, and artificial intelligence, recognized the growing threats in the digital landscape and set out to build a company that could offer robust, future-proof security solutions. We are deeply committed to staying ahead of these threats, constantly evolving our approach to ensure that our clients' software remains secure against the most sophisticated attacks."
      />
      <FeatureSection
        mode="right"
        imageSrc={SecurityBadgePng}
        description="At MutaEngine, we believe that every developer, from startups to global enterprises, deserves the freedom to innovate without the risk of piracy or unauthorized modifications. Our team's diverse expertise allows us to develop cutting-edge technologies, like our Polymorphic Code Engine, which continuously adapts to defend against evolving threats. By partnering closely with our clients, we tailor our solutions to meet their unique security needs, providing peace of mind so they can focus on what they do best—creating transformative software."
      />
    </section>
  );
};

const SecondarySection = () => {
  return (
    <section className="py-12 space-y-8 md:space-y-12 lg:space-y-16">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-relaxed  py-4">
          What We Do ?
        </h1>
        <p>
          We provide advanced software protection with our Polymorphic Code
          Engine, ensuring your applications stay secure from piracy, reverse
          engineering, and unauthorized modifications.
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-y-8 items-center justify-evenly">
        {aboutSecondaryFeatures?.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col md:w-1/3 w-full p-8 md:p-12 items-center border border-teal-400 rounded-lg text-center gap-y-4 md:gap-y-8 lg:gap-y-10 min-h-[30rem]"
          >
            <p className="text-base text-white">{feature.description}</p>
            <Image
              src={Image1Png}
              alt="MutaEngine"
              width={500}
              height={280}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const ValuesSection = () => {
  return (
    <section className="py-12 text-white">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between">
        <div className=" mb-12 md:w-[40%] text-start">
          <h2 className="text-4xl font-bold">Our Values</h2>
          <p className="mt-4 text-lg">
            We are driven by innovation, integrity, excellence, and a
            customer-centric approach to deliver unparalleled software security
            solutions.
          </p>
          <button className="mt-6 px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-400">
            Get Started
          </button>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 space-y-8">
          {aboutFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className=" bg-teal-100 w-8 h-8 rounded-full p-4 flex justify-center items-center"></div>

              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="py-12">
      <FeatureSection
        title="Our Story"
        mode="left"
        imageSrc={SecurityBadgePng2}
        description="MutaEngine was born out of a simple realization: traditional methods of software protection were no longer sufficient in an age where hackers are constantly finding new ways to bypass security measures. Our founders set out to create a solution that could adapt and evolve in real-time, providing a level of protection that static methods simply couldn’t match."
        buttonLabel="Learn More"
        description2="What started as a small project has grown into a leading solution trusted by developers and companies around the world. Today, MutaEngine continues to innovate, constantly improving our technology to meet the challenges of tomorrow."
      />
    </section>
  );
};

const WhyChooseMuta = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold leading-relaxed text-center mt-8 mb-12">
        Why Choose MutaEngine?
      </h1>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center lg:gap-12 md:gap-8 gap-6">
        {whyChooseMuteItems?.map((item, idx) => (
          <div
            key={idx}
            className=" flex flex-col gap-y-4 items-center p-4 border rounded-lg border-teal-400 min-h-[26rem]"
          >
            <div className="">
              <Image
                src={LaptopPng}
                alt="why-section"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col text-center space-y-2">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default function AboutPage() {
  return (
    <div className="">
      <PrimarySection />
      {/* What we do not complete */}
      <SecondarySection />
      <ValuesSection />
      <WhyChooseMuta />
      <StorySection />
      <CallToAction
        title={<h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>}
        description="Have questions or want to learn more about how MutaEngine can protect your software? We’d love to hear from you. [Provide contact information, social media links, and a contact form."
        buttonLabel="Contact Us"
      />
    </div>
  );
}
