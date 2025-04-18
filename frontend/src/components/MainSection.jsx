import { useState } from "react";

const climatePolicies = [
  {
    title: "India's National Action Plan on Climate Change",
    description:
      "The NAPCC outlines the climate change actions that India plans to take, aiming to achieve sustainable development while addressing climate risks.",
  },
  {
    title: "State Action Plans on Climate Change (SAPCC)",
    description:
      "Each state in India has developed a State Action Plan for Climate Change, which outlines local policies and strategies to mitigate and adapt to climate change.",
  },
  {
    title: "Renewable Energy Push",
    description:
      "India is focusing on enhancing its renewable energy capacity, with plans to install 175 GW of renewable energy capacity by 2022.",
  },
  {
    title: "Electric Vehicle Policy",
    description:
      "India is promoting electric vehicles to reduce air pollution and decrease dependence on fossil fuels, aiming to make EVs 30% of total vehicle sales by 2030.",
  },
  {
    title: "Adaptation to Climate Change",
    description:
      "Policies are being developed to help vulnerable populations adapt to the impacts of climate change, including droughts, floods, and rising sea levels.",
  },
];

export default function MainSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevArticle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? climatePolicies.length - 1 : prevIndex - 1
    );
  };

  const nextArticle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === climatePolicies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container px-4 py-10 mx-auto lg:flex lg:items-start lg:gap-8">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mb-6 lg:mb-0">
        <div className="w-full h-[400px] bg-gray-800 border border-gray-700 shadow-xl rounded-lg p-6 flex flex-row items-center justify-between">
          <button
            onClick={prevArticle}
            className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
          >
            ◀
          </button>

          <div className="text-center flex-1 px-4">
            <h2 className="text-xl font-bold text-white">{climatePolicies[currentIndex].title}</h2>
            <p className="text-gray-300 mt-2">{climatePolicies[currentIndex].description}</p>
          </div>

          <button
            onClick={nextArticle}
            className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-gray-800 rounded-lg p-6 shadow-lg h-[400px] overflow-y-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Climate Change Policies in India
        </h2>

        <div className="space-y-6">
          {climatePolicies.map((policy, index) => (
            <div key={index} className="bg-gray-700 shadow-sm rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white">{policy.title}</h3>
              <p className="text-gray-300 mt-2">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
