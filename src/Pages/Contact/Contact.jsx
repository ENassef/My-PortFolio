import React, { useContext } from "react";
import { SiteData } from "../../Context/SiteData.Context";
import { Helmet } from "react-helmet";

export default function Contact() {
    const { myInfo } = useContext(SiteData);

    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="flex font-sec text-[13px]">
                {/* Numbers */}
                <div className="w-[30px] text-sm border-r text-end pr-2 text-gray-500 border-teal-800">
                    <ul className="space-y-[10px]">
                        {Array(14)
                            .fill()
                            .map((_, Num) => (
                                <li className="" key={Num}>
                                    {Num}
                                </li>
                            ))}
                    </ul>
                </div>

                {/* Info */}
                <div className="flex-1 text-[#6A9955] pl-2 flex flex-col">
                    <div className="space-y-[3px]">
                        <p>/**</p>
                        <div className="pl-3 space-y-[12px] pt-[10px]">
                            <p>* Contact Information:</p>
                            <p className="space-x-2">
                                <span className="space-x-1">
                                    <span>*</span>
                                    <span>
                                        <i className="fa-solid fa-phone"></i>
                                    </span>
                                </span>

                                <span>phone : {myInfo.Phone}</span>
                            </p>
                            <p className="space-x-2">
                                <span className="space-x-1">
                                    <span>*</span>
                                    <span>
                                        <i className="fa-solid fa-phone"></i>
                                    </span>
                                </span>

                                <span>Whatsapp : {myInfo.Phone}</span>
                            </p>

                            {myInfo.links.map((link) => {
                                return (
                                    <p className="space-x-2" key={link.name}>
                                        <span className="space-x-1">
                                            <span>*</span>
                                            <span>
                                                <i
                                                    className={`fa-brands fa-${link.name.toLowerCase()}`}
                                                ></i>
                                            </span>
                                        </span>

                                        <span>
                                            {link.name} : {link.url}
                                        </span>
                                    </p>
                                );
                            })}
                        </div>
                        <p>*/</p>
                    </div>
                </div>
            </div>
        </>
    );
}
