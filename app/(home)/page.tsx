import BubblePng from "@/app/_assets/Bubble.png";
import CodeSvg from "@/app/_assets/code.svg";
import { features, statsItems } from "@/libs/contants";
import SecurityBadgePng from "@/app/_assets/security-badge.png";
import SecurityBadge2Png from "@/app/_assets/security-badge-2.png";
import Image from "next/image";
import FeatureSection from "@/components/FeatureSection";
import CallToAction from "@/components/CallToAction";

const HeroSection = () => {
  return (
    <section className="flex md:flex-row flex-col justify-between gap-x-20 gap-y-10 items-center py-12 lg:py-24 ">
      <div className="text-start space-y-8 ">
        <h1 className="text-4xl md:text-6xl font-bold leading-relaxed">
          Revolutionizing Software Security with <br />
          <span className="text-teal-400">Dynamic Mutation</span>
        </h1>
        <p className="text-lg md:text-xl">
          Introducing the Polymorphic Code Engine - A New Era in <br />{" "}
          Protecting Your Software.
        </p>
        <div className="space-x-4 flex ">
          <button className="bg-teal-400 px-6 py-3 max-w-full rounded text-lg hover:bg-teal-500">
            Learn More
          </button>
          <button className="border border-teal-400 px-6 py-3 max-w-full rounded text-lg hover:bg-teal-400">
            Start Now
          </button>
        </div>
      </div>
      <Image
        src={BubblePng}
        alt="Bubble"
        width={400}
        height={400}
        className="object-contain"
        priority
      />
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-12 md:gap-24 lg:gap-32 text-center bg-transparent">
      {statsItems?.map((item, idx: number) => (
        <div key={idx} className="flex items-center justify-center space-x-2">
          <p className="text-4xl font-bold">{item.value}</p>
          <p className="text-xs font-semibold text-left text-teal-400 uppercase">
            {item.label.split(" ")[0]} <br />
            {item.label.split(" ")[1]} <br />
            {item.label.split(" ")[2]}
          </p>
        </div>
      ))}
    </section>
  );
};

const CodeSection = () => {
  return (
    <div className="flex justify-center items-center py-6 md:py-12 lg:py-14">
      <Image src={CodeSvg} alt="code" width={1800} height={1800} priority />
    </div>
  );
};

const SecureSection = () => {
  return (
    <section className="py-12 text-white">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between">
        <div className=" mb-12 md:w-[40%] text-start">
          <h2 className="text-4xl font-bold">
            You Innovate, <br /> We
            <span className="text-teal-400 ml-2">Secure.</span>
          </h2>
          <p className="mt-4 text-lg">
            With MutaEngine, you can focus on creating cutting-edge software
            while we ensure it stays protected from threats. Our advanced
            technology keeps your intellectual property safe, allowing you to
            concentrate on what you do best.
          </p>
          <button className="mt-6 px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-400">
            Get Started
          </button>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className=" bg-teal-100 w-8 h-8 rounded-full p-4 flex justify-center items-center">
                <feature.icon className="text-black w-8 h-8" />
              </div>

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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <CodeSection />

      {/* Featuring Services */}
      <FeatureSection
        mode="left"
        imageSrc={SecurityBadgePng}
        colorTitle={
          <h2 className="text-3xl md:text-5xl font-bold">
            What is the <span className="text-teal-400">Polymorphic Code</span>{" "}
            Engine?
          </h2>
        }
        description="Polymorphic code engine dynamically mutates the software’s source code in real-time, preventing reverse engineering and ensuring enhanced security."
        buttonLabel="Learn More"
      />
      <FeatureSection
        mode="right"
        imageSrc={SecurityBadge2Png}
        colorTitle={
          <h2 className="text-3xl md:text-5xl font-bold">
            How it <span className="text-teal-400">Works?</span>{" "}
          </h2>
        }
        description="By constantly changing the software code during access or execution, the  Polymorphic Code Engine creates a moving target, making it extremely  difficult for hackers to analyze or decompile."
        buttonLabel="Learn More"
      />

      <SecureSection />

      <CallToAction
        title={
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="text-teal-400">Secure</span> Your <br />
            Software?
          </h2>
        }
        description="Get started with MutaEngine today and protect your software with the most advanced security technology available."
        buttonLabel="Start Now"
      />
    </div>
  );
}
