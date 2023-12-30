"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { useContext, useEffect, useState } from "react";

const serviceData = [
  {
    id: 1,
    name: "UI/UX Design",
    img: "assets/img/service/1.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 2,
    name: "User Research",
    img: "assets/img/service/2.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 3,
    name: "UI Animation",
    img: "assets/img/service/3.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 4,
    name: "Product Design",
    img: "assets/img/service/4.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    oridoUtilits.serviceHashtag();
  }, []);
  const [current, setCurrent] = useState(1);
  const { modalToggle, setServiceModal } = useContext(context);
  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="service"
    >
      <div className="orido_tm_service w-full h-auto clear-both float-left px-0 py-[120px] bg-[#fafafb]">
        <div className="container">
          <div className="orido_tm_main_title w-full float-left">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                Services
                <br />I Provide
              </span>
            </h3>
          </div>
          <div className="service_list w-full h-auto clear-both float-left mt-[100px] relative">
            <ul className="relative z-[2]">
              {serviceData.map((service) => (
                <li
                  className={`${
                    current == service.id ? "current" : ""
                  } relative`}
                >
                  <div className="list_inner w-full flex items-center justify-between relative pt-[27px] pb-[26px] pl-[25px] pr-[35px]">
                    <div className="left w-[40%] flex">
                      <span className="number inline-block text-[#6244C5] text-[24px] font-dm transition-all duration-300">
                        0{service.id}
                      </span>
                      <h3 className="title text-[30px] font-medium pl-[30px] transition-all duration-300">
                        {service.name}
                      </h3>
                    </div>
                    <div className="right w-[60%] flex items-center justify-between">
                      <div className="text pr-[150px]">
                        <p className="transition-all duration-300">
                          {service.description[0].substring(0, 105)}...
                        </p>
                      </div>
                      <div className="arrow leading-[1]">
                        <img
                          className="svg w-[25px] h-[25px] transition-all duration-300"
                          src="assets/img/svg/top-arrow.svg"
                          alt
                        />
                      </div>
                    </div>
                    <a
                      className="orido_tm_full_link absolute inset-0 z-[5]"
                      href="#"
                      onClick={(e) => {
                        setCurrent(service.id);
                        e.preventDefault();
                        modalToggle(true);
                        setServiceModal(service);
                      }}
                    />
                    {/* Modalbox Info Start */}
                    <img
                      className="popup_service_image"
                      src="assets/img/service/1.jpg"
                      alt
                    />
                    {/* /Modalbox Info End */}
                  </div>
                </li>
              ))}
            </ul>
            <span className="ccc" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
