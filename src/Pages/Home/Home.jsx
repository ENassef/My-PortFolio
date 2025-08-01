import React, { useContext } from "react";
import { SiteData } from "../../Context/SiteData.Context";
import { Link } from "react-router-dom";
import myImg from "../../assets/MyImage.jpg";
import { Helmet } from "react-helmet";

export default function Home() {
    const { myInfo } = useContext(SiteData);
    console.log(myInfo);

    return (
        <>
            <Helmet>
                <title>Eslam Nassef Portfolio</title>
            </Helmet>
            <section
                className="flex flex-col lg:flex-row items-center px-4 justify-around h-full font-main py-4 "
                data-aos-easing="linear"
                data-aos="fade-up"
                data-aos-duration="400"
            >
                {/* left Side */}
                <div className="flex flex-col space-y-16 h-2/3 order-2 lg:order-1 ">
                    {/* Name & Jop */}
                    <div className="text-center lg:text-start">
                        <h1 className="font-semibold italic text-6xl text-white tracking-wide mb-1">
                            {myInfo.name}
                        </h1>
                        <p className="text-teal-300 text-lg italic font-bold tracking-wider">
                            Front End Developer
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* info */}
                        <div className="text-gray-300 font-medium  border-[#1D4744] border-1 rounded-2xl p-4 px-6 space-y-4 bg-side-main">
                            <p className="space-x-2 cursor-pointer hover:translate-x-3 transition-all hover:text-teal-300 duration-300 ">
                                <span>
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                                <span>{myInfo.email}</span>
                            </p>

                            <p className="space-x-2 cursor-pointer hover:translate-x-3 transition-all hover:text-teal-300 duration-300 ">
                                <span>
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <span>{myInfo.Address}</span>
                            </p>
                            <p className="space-x-2 cursor-pointer hover:translate-x-3 transition-all hover:text-teal-300 duration-300 ">
                                <span>
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <span>{myInfo.Phone}</span>
                            </p>
                        </div>

                        {/* University & faculty */}
                        <div className="text-gray-300 font-medium  border-[#1D4744] border-1 rounded-2xl p-4 px-6 space-y-4 bg-side-main">
                            <p className="space-x-2 cursor-pointer hover:translate-x-3 transition-all hover:text-teal-300 duration-300 ">
                                <span>
                                    <i className="fa-solid fa-building-columns"></i>
                                </span>
                                <span>{myInfo.University}</span>
                            </p>

                            <p className="space-x-2 cursor-pointer hover:translate-x-3 transition-all hover:text-teal-300 duration-300 ">
                                <span>
                                    <i className="fa-solid fa-graduation-cap"></i>
                                </span>
                                <span>{myInfo.faculty}</span>
                            </p>
                        </div>

                        <div className="text-gray-300 font-medium  border-[#1D4744] border-1 rounded-2xl p-4 px-6 space-y-4 bg-side-main">
                            <ul className="space-y-2">
                                {myInfo.links.map((link) => {
                                    return (
                                        <li
                                            key={link.name}
                                            className="cursor-pointer hover:translate-x-3 transition-all hover:text-teal-300 duration-300"
                                        >
                                            <Link
                                                to={link.url}
                                                className="space-x-2  "
                                                target="_blank"
                                            >
                                                <i
                                                    className={`fa-brands fa-${link.name.toLowerCase()}`}
                                                ></i>
                                                <span>{link.name}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Image Side */}
                <div className="order-1 lg:order-2 mb-8 lg:mb-0">
                    <div className="">
                        <img
                            src={myImg}
                            alt=""
                            className="w-[325px] md:w-[425px] lg:w-[450px] h-[325px] md:h-[425px] lg:h-[450px] rounded-[50%] "
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
