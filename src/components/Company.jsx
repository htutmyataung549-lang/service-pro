import React from "react";
import { Circle, Shield, Star, Zap } from "lucide-react";
const Company = () => {
  return (
    <section id="company">
      <div className="relative scroll-m-6 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:py-16 md:py-12 lg:px-20 ">
        <div className="text-center mb-6 md:mb-8" data-aos="fade-down">
          <h2 className="text-3xl sm:4xl md:5xl">
            Why Our <span className="text-black font-bold">Company</span>
            <span className="text-green-500 ml-2 text-3xl">?</span>
          </h2>
          <div className="flex gap-3 mt-4 justify-center">
            <Circle className="text-pink-500 w-5 h-5" />
            <Circle className="text-yellow-500 w-5 h-5" />
            <Circle className="text-green-500 w-5 h-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center text-white">
          <div className="relative w-full flex justify-center order-2 lg:order-1">
            <div
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-[480px] md:h-[480px] lg:h-[500px] overflow-hodden bg-gray-50 shadow-lg md:shadow-xl absolute top-0 z-0 rounded-[30%_10%_20%_70%/60%_30%_70%_30%]"
              data-aos="fade-right"
              data-aos-delay="100"
            ></div>
            <div className="relative z-10 p-4 sm:p-6 w-full max-w-md">
              <div
                className="flex items-start gap-4 sm:gap-6 p-4 transition-all bg-transparent"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex shrink-0 w-10 h-10 sm:w-12 sm:h-12 items-center justify-center">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    Excellence Guaranteed.
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique illo ducimus dolorum libero in fuga.
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 sm:gap-6 p-4 transition-all bg-transparent"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex shrink-0 w-10 h-10 sm:w-12 sm:h-12 items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    Trust & Reliability.
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique illo ducimus dolorum libero in fuga.
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 sm:gap-6 p-4 transition-all bg-transparent"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex shrink-0 w-10 h-10 sm:w-12 sm:h-12 items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    Innovation Driven.
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique illo ducimus dolorum libero in fuga.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div
              className="bg-gradient-to-br from-yellow-600 to-pink-600 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="max-w-md mx-auto text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 " />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  90% Customer Satisfaction
                </h3>
                <p className="text-base mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas, sunt.
                </p>
                <div className="flex justify-center mt-2 gap-3 sm:gap-4">
                  <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="text-2xl sm:text-3xl font-bold">500+</div>
                    <div className="text-xs sm:text-sm">
                      Projects Completed.
                    </div>
                  </div>
                  <div className="flex justify-center gap-3 sm:gap-4">
                    <div
                      className="text-center"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="text-2xl sm:text-3xl font-bold">10+</div>
                      <div className="text-xs sm:text-sm">
                        Years Experience.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-3 sm:gap-4">
                    <div
                      className="text-center"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="text-2xl sm:text-3xl font-bold">99+</div>
                      <div className="text-xs sm:text-sm">Success Rate.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden md:block absolute -top-8 -right-6 w-20 h-20 sm:w24 sm:h-24 md:w-28 rounded-full border-4 border-yellow-500 opacity-50"
                data-aos="zoom-in"
                data-aos-delay="600"
              ></div>
              <div
                className="hidden md:block absolute -bottom-6 -left-14 w-20 h-20 sm:w24 sm:h-24 md:w-28 rounded-full border-4 border-pink-500 opacity-50"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
