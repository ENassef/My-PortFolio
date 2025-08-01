import React from "react";

export default function Card({ project }) {
    const { imgSrc, name, desc, techs, source, demo } = project;

    return (
        <>
            <div className="hover:-translate-y-2 transition-all duration-300 text-white border border-teal-700 rounded-2xl hover:shadow-[0_0_10px_#2dd4bf]">
                {/* Card Header */}
                <div>
                    <img
                        src={imgSrc}
                        alt={name}
                        className="w-full h-64 object-top object-cover rounded-t-2xl"
                    />
                </div>
                {/* Card Body */}
                <div className="bg-side-main p-6 space-y-3 rounded-b-2xl min-h-[300px] overflow-y-auto flex flex-col ">
                    <p>{name}</p>
                    <p className="text-balance leading-6 text-gray-400 line-clamp-4">
                        {desc}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pl-1 gap-2">
                        {techs.map((tech) => {
                            return (
                                <span className="py-1 border border-teal-300 rounded-2xl text-center h-fit text-sm">
                                    {tech}
                                </span>
                            );
                        })}
                    </div>
                    <div className="space-x-3 text-sm text-teal-400 ">
                        <a href={source} target="_blank">source</a>
                        <a href={demo} target="_blank">demo</a>
                    </div>
                </div>
            </div>
        </>
    );
}