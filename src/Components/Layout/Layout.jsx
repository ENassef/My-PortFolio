import React, { useContext } from "react";
import Header from "../Header/Header";
import IconNav from "../IconNav/IconNav";
import { NavLink, Outlet } from "react-router-dom";
import Explorer from "../Explorer/Explorer";
import { SiteData } from "../../Context/SiteData.Context";

export default function Layout() {
    const { listData } = useContext(SiteData);

    return (
        <main className="min-h-screen flex flex-col overflow-hidden">
            <Header />
            <section className="flex-1 flex bg-[#24292E]">
                {/* Icons nav */}
                <IconNav />
                <Explorer />
                <section className="flex-7 w-full min-w-0">
                    <div className="bg-side-main">
                        <div className="overflow-x-auto">
                            <ul className="inline-flex space-x-2 pr-4 no-scrollbar">
                                {listData.map((item) => (
                                    <NavLink
                                        to={item.path}
                                        key={item.name}
                                        className={({ isActive }) =>
                                            isActive ? "activeList" : "text-gray-300"
                                        }
                                    >
                                        <li className="flex items-center space-x-2 px-6 py-2 text-white transition-all whitespace-nowrap">
                                            <img
                                                src={item.icon}
                                                alt={`${item.name} icon`}
                                                className="w-4 h-4"
                                            />
                                            <span>{item.name}</span>
                                        </li>
                                    </NavLink>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="overflow-y-auto" style={{ height: 'calc(100vh - 100px)' }}>
                        <Outlet />
                    </div>
                </section>
            </section>
        </main>
    );
}