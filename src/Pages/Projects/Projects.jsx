import React from "react";
import freshCart from "../../assets/Projects/e-commerce.png";
import Bakery from "../../assets/Projects/Bakery.png";
import PortFolio from "../../assets/Projects/PortFolio.png";
import Daniels from "../../assets/Projects/Daniels.png";
import { source } from "framer-motion/client";
import Card from "../../Components/Card/Card";
import { CornerRightDown } from "lucide-react";
import { Helmet } from "react-helmet";
export default function Projects() {
    const projects = [
        {
            name: "Fresh Cart",
            imgSrc: freshCart,
            desc: "a multi-category online store, offering a wide range of products from fashion and footwear to electronics and groceries, aimed at a diverse customer base with an emphasis on easy navigation and app integration.",
            source: "https://github.com/ENassef/E-Commerce",
            demo: "https://e-commerce-beryl-beta.vercel.app/",
            techs: [
                "React",
                "Tailwind CSS",
                "Formik",
                "Yup",
                "Lucide ",
                "AOS ",
                "Sonner",
            ],
        },
        {
            name: "VSCode Themed Portfolio",
            imgSrc: PortFolio,
            desc: "My personal portfolio with the Visual Studio Code IDE theme.",
            source: "https://github.com/ENassef/E-Commerce",
            demo: "https://enassef.github.io/Daniels/",
            techs: [
                "React",
                "Tailwind CSS",
                "Formik",
                "Yup",
                "Lucide ",
                "AOS ",
                "Sonner",
            ],
        },
    ];

    const assignments = [
        {
            name: "Bakery",
            imgSrc: Bakery,
            desc: "It features a multi-section layout with a navigation menu, placeholder images, and a footer with social links, serving as a foundation for a professional bakery business site that can be fully customized with real content and styling.",
            source: "https://github.com/ENassef/Bakery",
            demo: "https://enassef.github.io/Bakery/",
            techs: ["html 5 ", "javaScript", "Css 3"],
        },
        {
            name: "Daniels",
            imgSrc: Daniels,
            desc: "It features a multi-section layout with a navigation menu, placeholder images, and a footer with social links, serving as a foundation for a professional bakery business site that can be fully customized with real content and styling.",
            source: "https://github.com/ENassef/Daniels",
            demo: "https://enassef.github.io/Bakery/",
            techs: ["html 5 ", "javaScript", "Css 3"],
        },
    ];

    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <div
                className="px-10 py-10 space-y-5"
                data-aos-easing="linear"
                data-aos="fade-up"
                data-aos-duration="400"
            >
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => {
                        return <Card project={project} key={project.name} />;
                    })}
                </div>
                <div className="">
                    <h2 className="text-teal-400 mb-6 text-2xl italic flex items-center">
                        Route assignment
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {assignments.map((assignment) => {
                            return (
                                <Card
                                    project={assignment}
                                    key={assignment.name}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
