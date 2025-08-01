import { createContext } from "react";
import code from "../assets/code.webp";
import css from "../assets/css.webp";
import html from "../assets/html.webp";
import js from "../assets/js.webp";
import typescript from "../assets/typescript.webp";

export const SiteData = createContext();

export default function SiteDataContextProvider({ children }) {
    const listData = [
        { name: "home.js", path: "/", icon: js },
        { name: "about.html", path: "/about", icon: html },
        { name: "projects.json", path: "/projects", icon: code },
        { name: "contact.ts", path: "/contact", icon: typescript }
        // { name: "theme.css", path: "/theme", icon: css },
    ];


    const myInfo = {
        name: "Eslam Nassef",
        Address: "Cairo , Egypt",
        Phone: "+201101399190",
        University: "Ain Shams University",
        email: "Eslam.Nassef.Official@hotmail.com",
        faculty: "Faculty of Law",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/ENassef",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/eslam-nassef-08828a32b/",
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/islam.nassef.35/",
            },
        ],
    };

    return (
        <SiteData.Provider value={{ listData, myInfo }}>
            {children}
        </SiteData.Provider>
    );
}
