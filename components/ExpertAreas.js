"use client";
import { oridoUtilits } from "@/utility";
import { useEffect, useState } from "react";

const skills = [
  { id: 1, name: "React", value: 90, icon: "assets/img/svg/react.svg" },
  { id: 2, name: "Jest", value: 80, icon: "assets/img/svg/jest.svg" },
  { id: 3, name: "NodeJS", value: 85, icon: "assets/img/svg/nodejs.svg" },
  { id: 4, name: "TypeScript", value: 95, icon: "assets/img/svg/typescript.svg" },
  { id: 5, name: "Redux", value: 90, icon: "assets/img/svg/redux.svg" },
  { id: 6, name: "PostgreSQL", value: 75, icon: "assets/img/svg/postgresql.svg" },
];

const experiences = [
  {
    id: 1,
    company: "IDE Asia",
    designation: "Frontend Developer",
    time: "2021 - Present",
  },
  {
    id: 2,
    company: "Teknologi Bangsa Indonesia",
    designation: "Frontend Developer",
    time: "2022",
  },
  {
    id: 3,
    company: "Gonegani",
    designation: "Website Specialist",
    time: "2018 - 2021",
  },
  {
    id: 4,
    company: "Nusantech",
    designation: "Frontend Developer",
    time: "2017",
  },
];

const educations = [
  {
    id: 1,
    institution: "Language School",
    certificate: "Wall Street English",
    time: "2023 - Present",
  },
  {
    id: 2,
    institution: "Coding Bootcamp",
    certificate: "Hacktiv8",
    time: "2021",
  },
  {
    id: 3,
    institution: "Vocational Highschool",
    certificate: "Bina Insan Mulia",
    time: "2014 - 2017",
  },
];

const tabMenu = [
  { id: 1, name: "Skills" },
  { id: 2, name: "Experience" },
  { id: 3, name: "Education" },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");
  useEffect(() => {
    oridoUtilits.filter_hashtag();
  }, [activeTab]);
  return (
    <div className="orido_tm_section w-full h-auto clear-both float-left">
      <div className="orido_tm_informations w-full h-auto clear-both float-left mb-[125px]">
        <div className="container">
          <div className="informations_inner w-full h-auto flex">
            <div className="left w-1/2 pr-[100px]">
              <div className="orido_tm_main_title w-full float-left">
                <h3 className="tracking-[-2px] text-[56px] font-bold">
                  <span className="relative">
                    My expert
                    <br />
                    areas
                  </span>
                </h3>
              </div>
              <div className="text w-full float-left mt-[30px] mb-[40px]">
                <p className="mb-[35px]">
                  list of my skills, professional experience, and educational background.
                  With a robust set of skills honed through hands-on experience and a solid academic foundation,
                  I bring a unique blend of expertise to the table.
                </p>
                <p>
                  From academic achievements to real-world accomplishments,
                  this is what makes me a well-rounded professional.
                </p>
              </div>
              <div className="orido_tm_boxed_button">
                <a href="assets/img/cv/Resume M Rizqi Zulfian.pdf" download>
                  My Resume{" "}
                  <img className="svg" src="assets/img/svg/paper.svg" alt />
                </a>
              </div>
            </div>
            <div className="right w-1/2 top-[33px] relative">
              <div className="filter w-full float-left relative">
                <ul>
                  {tabMenu.map((tab) => (
                    <li className="mr-[70px] inline-block" key={tab.id}>
                      <a
                        className={`${activeContentTab(
                          tab.id
                        )} text-main-color font-dm font-bold inline-block relative`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab.id);
                        }}
                      >
                        <span className="relative inline-block">
                          {tab.name}
                        </span>{" "}
                        <img
                          className="svg w-[24px] h-[24px] relative ml-[6px]"
                          src="assets/img/svg/top-arrow.svg"
                          alt
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <span className="ccc" />
              </div>
              <div className="content w-full float-left">
                <div
                  id="tab_1"
                  className={`wrapper ${activeContentTab(
                    1
                  )} w-full h-auto clear-both float-left`}
                >
                  <div className="skillbox w-full float-left mt-[110px]">
                    <ul className="ml-[-20px]">
                      {skills.map((skill) => (
                        <li
                          key={skill.id}
                          className="mb-[45px] w-1/3 float-left pl-[20px]"
                        >
                          <div className="list_inner w-full h-auto clear-both float-left relative">
                            <span className="icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]">
                              <span className="in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]">
                                <img
                                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]"
                                  src={skill.icon}
                                  alt
                                />
                              </span>
                            </span>
                            <p className="name font-dm text-black">
                              {skill.name}{" "}
                              {/* <span className="font-bold">
                                ({skill.value}%)
                              </span> */}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  id="tab_2"
                  className={`wrapper ${activeContentTab(
                    2
                  )} w-full h-auto clear-both float-left`}
                >
                  <div className="timelinebox w-full float-left mt-[100px]">
                    <ul className="ml-[-20px]">
                      {experiences.map((experience) => (
                        <li
                          key={experience.id}
                          className="mb-[37px] w-1/2 float-left pl-[20px]"
                        >
                          <div className="list_inner w-full h-auto clear-both float-left relative">
                            <div className="time w-full float-left mb-[25px]">
                              <span className="year text-[#6244C5] block mb-[2px]">
                                {experience.time}
                              </span>
                              <span className="company">
                                {experience.company}
                              </span>
                            </div>
                            <div className="job w-full float-left">
                              <h3 className="text-[21px]">
                                <span className="inline-block relative">
                                  {experience.designation}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  id="tab_3"
                  className={`wrapper ${activeContentTab(
                    3
                  )} w-full h-auto clear-both float-left`}
                >
                  <div className="timelinebox w-full float-left mt-[100px]">
                    <ul className="ml-[-20px]">
                      {educations.map((education) => (
                        <li
                          key={education.id}
                          className="mb-[37px] w-1/2 float-left pl-[20px]"
                        >
                          <div className="list_inner w-full h-auto clear-both float-left relative">
                            <div className="time w-full float-left mb-[25px]">
                              <span className="year text-[#6244C5] block mb-[2px]">
                                {education.time}
                              </span>
                              <span className="company">
                                {education.institution}
                              </span>
                            </div>
                            <div className="job w-full float-left">
                              <h3 className="text-[21px]">
                                <span className="inline-block relative">
                                  {education.certificate}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertAreas;
