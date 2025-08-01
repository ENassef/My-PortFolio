import React, { useContext, useEffect, useState } from "react";
import Arrow from "../../assets/arrow.svg";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import { SiteData } from "../../Context/SiteData.Context";

export default function Explorer() {
    let [isOpen, setIsOpen] = useState(true);
    const {listData} = useContext(SiteData)


    useEffect(() => {
        gsap.registerPlugin();
    });

    return (
        <div className="bg-side-main hidden lg:flex-1 lg:flex flex-col pl-4 space-y-4">
            <p className="text-white pt-4 italic">EXPLORER</p>

            <div className="space-y-2">
                <p
                    className="flex items-center text-white space-x-1 cursor-pointer select-none"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <span
                        className={`filter brightness-0 invert transition-all duration-300  ${
                            !isOpen ? "-rotate-90" : ""
                        }`}
                    >
                        <img src={Arrow} alt="" />
                    </span>
                    <span>PortFolio</span>
                </p>

                <ul
                    className={`text-white list-none transition-all pl-2 ${
                        !isOpen ? "hidden" : ""
                    }`}
                >
                    {listData.map((item) => {
                        return (
                            <Link to={item.path} key={item.name}>
                                <li className="flex items-center space-x-2">
                                    <img
                                        src={item.icon}
                                        alt="JavaSCript"
                                        className="w-4 h-4"
                                    />
                                    <span>{item.name}</span>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
