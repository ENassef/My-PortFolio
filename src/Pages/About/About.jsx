import React from "react";
import cvFile from "../../assets/EslamNassef_CV.pdf";
import { Helmet } from "react-helmet";
export default function About() {

	const Frontend = ['html5' , 'css3' , 'JavaScript' , 'BootStrap' , 'JQuery' , "React" , 'Next.JS' , 'TailWind' , 'typeScript']
	const Tools = ['git' , 'github']
    return (
        <>
        			<Helmet>
				<title>About</title>
			</Helmet>
            <div className="p-12 text-white space-y-6"  data-aos-easing="linear" data-aos="fade-up" data-aos-duration='400'>
                <div className="space-y-3">
                    {/* header */}
                    <h1 className="text-4xl font-medium italic text-teal-300 ">
                        About Me{" "}
                    </h1>
                    <p>
                        <span className="text-teal-300 text-xl">I</span> am a
                        driven Front-End Developer whose passion for programming
                        sparked in childhood and has grown into a dedicated
                        career pursuit. After earning a degree from the Faculty
                        of Law at Ain Shams University, I followed my calling by
                        completing a professional course at Route Academy,
                        securing a certification in front-end development.
                    </p>
                    <p>
                        <span className="text-teal-300 text-xl">W</span>ith
                        expertise in HTML, CSS, JavaScript, and modern
                        frameworks like React, I specialize in crafting
                        responsive, user-friendly web interfaces. My ability to
                        thrive under pressure, honed through diverse
                        experiences, fuels my commitment to delivering
                        high-quality results. Currently, I am eager to join
                        innovative projects as a Front-End Developer, where I
                        can contribute my technical skills, creativity, and
                        lifelong enthusiasm for building impactful web
                        applications.
                    </p>
                </div>

                {/* download cv button */}
                <div className="pt-6">
                    <a
                        href={cvFile}
                        download="MyCV.pdf"
                        className="bg-teal-400 hover:bg-teal-300 p-3 px-6 rounded-3xl transition-colors"
                    >
                        Download My CV
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 gap-8">

		            <div className="p-6 bg-[#2D3136] space-y-3">
						<h2 className="text-teal-400 font-medium text-lg">Frontend Development</h2>
						<ul className="list-disc marker:text-teal-400 marker:text-lg  list-inside">
							{Frontend.map((tec)=>{
								return <li className=" hover:translate-x-3 transition-all text-lg hover:text-teal-300 duration-300">
									{tec}
								</li>
							})}
						</ul>
					</div>

                    <div className="p-6 bg-[#2D3136] space-y-3">
						<h2 className="text-teal-400 font-medium text-lg">Tools & Technologies</h2>
						<ul className="list-disc marker:text-teal-400 marker:text-lg  list-inside">
							{Tools.map((Tool)=>{
								return <li className=" hover:translate-x-3 transition-all text-lg hover:text-teal-300 duration-300">
									{Tool}
								</li>
							})}
						</ul>
					</div>
                </div>
            </div>
        </>
    );
}
