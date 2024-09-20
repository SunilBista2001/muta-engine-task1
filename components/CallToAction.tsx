export default function CallToAction({ title, description, buttonLabel }: any) {
  return (
    <section className="py-16  text-white">
      <div className="max-w-7xl mx-auto rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-left md:w-[50%]">
          {title}
          <p className="text-gray-300 mt-4 text-base md:text-md">
            {description}
          </p>
        </div>

        <div className="md:w-1/4 text-center md:text-right">
          <button className="px-8 py-3 shadow-sm bg-teal-500 text-white rounded-lg hover:bg-teal-400 transition duration-300">
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
