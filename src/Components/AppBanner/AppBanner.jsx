import React from "react";
import { motion } from "motion/react";
import Banner from "../../assets/coffee-cover.jpg";
import AppStore from "../../assets/website/app_store.png";
import GooglePlay from "../../assets/website/play_store.png";

const BannerStyle = {
  height: "100%",
  width: "100%",
  backgroundImage: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const AppBanner = () => {
  return (
    <>
      <div className="container my-14 pb-20">
        <div
          style={BannerStyle}
          className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        >
          <div>
            <div className="space-y-6 max-w-xl p-10 mx-auto">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="text-2xl text-center sm:text-4xl font-semibold "
              >
                Download Our App
              </motion.h1>
              <motion.p
                className="text-center sm:px-20"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, corrupti repudiandae non voluptatem vel rem obcaecati
                saepe
              </motion.p>
              {/* images */}
              <div className="flex justify-center items-center gap-4">
                <a
                  href="#"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                >
                  <motion.img
                    initial={{
                      opacity: 0,
                      y: 100,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    src={AppStore}
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                >
                  <motion.img
                    initial={{
                      opacity: 0,
                      y: 100,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    src={GooglePlay}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
