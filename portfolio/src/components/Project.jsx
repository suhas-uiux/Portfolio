import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import projectOne from "../assets/images/project-1.png";
import projectTwo from "../assets/images/project-2.png";
import projectThree from "../assets/images/project-3.png";
import projectFour from "../assets/images/project-4.png";
import projectSix from "../assets/images/project-6.png";
import projectSeven from "../assets/images/project-7.png";

import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: projectTwo,
      name: "Netflix Clone",
      github_link: "https://github.com/aryyan0701/Netflix_Clone",
    },
    {
      img: projectOne,
      name: "Type Verse (Check your typing speed)",
      github_link: "https://github.com/aryyan0701/type_verse",
      live_link: "https://aryyan0701.github.io/type_verse/",
    },
    {
      img: projectThree,
      name: "Currency Converter",
      github_link: "https://github.com/aryyan0701/Currency_converter",
    },
    {
      img: projectFour,
      name: "Quizzify",
      github_link: "https://github.com/aryyan0701/Quizzify",
      live_link: "https://quizzad.netlify.app/",
    },
    {
      img: projectSix,
      name: "Bloggify",
      github_link: "https://github.com/aryyan0701/Bloggify",
      live_link: "https://aryyan0701.github.io/Bloggify/",
    },
    {
      img: projectSeven,
      name: "Sandbox Clone",
      github_link: "https://github.com/aryyan0701/sandbox_clone",
      live_link: "https://aryyan0701.github.io/sandbox_clone/",
    },
  ];

  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-5 bg-slate-700 rounded-xl">
                  <img src={project.img} alt={project.name} className="rounded-lg" />
                  <h3 className="text-xl my-4">{project.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
