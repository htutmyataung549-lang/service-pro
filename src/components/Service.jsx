import {
  ArrowRight,
  Brush,
  Camera,
  CheckCircle,
  Circle,
  Code,
} from "lucide-react";
import { useState } from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const Service = () => {
  const [activeService, setActiveService] = useState(1);
  const services = [
    {
      id: 1,
      icon: <Brush className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        " Visual Design",
        "UI Design",
      ],
      color: "bg-pink-400",
      butColor: "bg-pink-500 hover:bg-pink-600",
      iconColor: "text-pink-100",
      image: service1,
    },
    {
      id: 2,
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Web Development",
      description: "Building responsive and dynamic websites.",
      features: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Performance Optimization",
        "SEO Best Practices",
      ],
      color: "bg-yellow-400",
      butColor: "bg-yellow-500 hover:bg-yellow-600",
      iconColor: "text-pink100",
      image: service2,
    },
    {
      id: 3,
      icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Digital Marketing",
      description: "Promoting your brand effectively online.",
      features: ["Social Media Marketing", "Content Creation"],
      color: "bg-green-400",
      butColor: "bg-green-500 hover:bg-green-600",
      iconColor: "text-green-100",
      image: service3,
    },
  ];
  return (
    <section
      id="services"
      className="realtive overflow-hidden bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4 sm:py-16 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center jusitify-center text-center mb-6"
          data-aos="fade-down"
        >
          <div className="flex-1 max-w-2xl mx-auto space-y-6 mb-10 lg:mb-0">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
                Our {""} <span className="font-bold text-black">Services</span>{" "}
                <span className="text-green-500">.</span>{" "}
              </h2>
              <div className="flex items-center mt-4 gap-3">
                <Circle className="text-pink-500 w-5 h-5" />
                <Circle className="text-yellow-500 w-5 h-5" />
                <Circle className="text-green-500 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:md-12 justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {services.map((ser) => (
            <button
              key={ser.id}
              onClick={() => setActiveService(ser.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium flex items-center gap-2 transition-all text-sm sm:text-base ${
                activeService === ser.id
                  ? `${ser.color} text-white shadow-lg`
                  : "bg-white text-gray-700 shadow-md hover:shadow-lg "
              }`}
              data-aos="fade-up"
              data-aos-delay={ser.id * 100}
            >
              {ser.icon}
              {ser.title}
            </button>
          ))}
        </div>
        <div
          className="bg-white rounded-2xl md:rounded-3xl shadow:lg md:shadow-xl p-6 sm:p-8 mb-12 md:mb-16 border border-gray-100"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {services
            .filter((ser) => ser.id === activeService)
            .map((ser) => (
              <div
                key={ser.id}
                className="flex flex-col lg:flex-row gap-6 md:gap-10"
              >
                <div className="flex-1">
                  <div
                    className="flex items-center gap-3 sm:gap-4 sm:mb-6"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <div
                      className={`w-12 h-12 sm;h-16 rounded-lg sm:rounded-xl flex items-center justify-center ${ser.color} bg-opacity-10`}
                    >
                      <div className={ser.iconColor}>{ser.icon}</div>
                    </div>
                    <h3 className="font-bold text-2xl sm:text-3xl text-gray-800">
                      {ser.title}
                    </h3>
                  </div>
                  <p
                    className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed"
                    data-aos="fade-right"
                    data-aos-delay="360"
                  >
                    {ser.description}
                  </p>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    {ser.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2"
                        data-aos="fade-up"
                        data-aos-delay={500 + idx * 100}
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <button
                      className={`px-6 py-3 sm:px-8 ${ser.butColor} text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm sm:text-base`}
                    >
                      Get This Services
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                </div>
                <div
                  className="flex-1 mt-6 lg:mt-0"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <div className="w-full h-60 sm:h-72 md:h-80 overflow-hidden shadow:lg rounded-xl md:rounded-2xl">
                    <img
                      src={ser.image}
                      alt={ser.title}
                      className="object-cover w-full transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className="hidden md:block absolute border-2 border-pink-500 bottom-20 left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full opacity-50"
        data-aos="zoom-in"
        data-aos-delay="700"
      ></div>
      <div
        className="hidden md:block absolute border-2 border-green-500 top-40 right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full opacity-50"
        data-aos="zoom-in"
        data-aos-delay="700"
      ></div>
    </section>
  );
};

export default Service;
