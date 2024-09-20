import Image from "next/image";

const FeatureSection = ({
  mode = "left",
  imageSrc,
  title,
  description,
  buttonLabel,
  description2,
  colorTitle,
}: any) => {
  const isLeftMode = mode === "left";

  return (
    <section className="flex flex-col gap-y-8 md:flex-row items-center justify-between py-12">
      {isLeftMode && (
        <div className="md:w-1/2">
          <Image
            src={imageSrc}
            alt={title}
            className="rounded-lg"
            width={450}
            height={450}
            objectFit="contain"
          />
        </div>
      )}

      <div className="md:w-1/2 text-left space-y-4 md:space-y-6 lg:space-y-10">
        {colorTitle ? (
          <>{colorTitle}</>
        ) : (
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
        )}
        <p className="text-md">
          {description}

          <br />
          <br />
          {description2}
        </p>
        {buttonLabel && (
          <button className="border border-teal-400 px-6 py-3 rounded text-lg hover:bg-teal-400">
            {buttonLabel}
          </button>
        )}
      </div>

      {!isLeftMode && (
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={imageSrc}
            alt={title}
            className="rounded-lg"
            width={450}
            height={450}
            objectFit="contain"
          />
        </div>
      )}
    </section>
  );
};

export default FeatureSection;
