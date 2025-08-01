import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Theme from "./Pages/Theme/Theme";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import SiteDataContextProvider from "./Context/SiteData.Context";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "projects", element: <Projects /> },
            { path: "contact", element: <Contact /> },
            { path: "about", element: <About /> },
            { path: "theme", element: <Theme /> },
        ],
    },
]);

function App() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <SiteDataContextProvider>
                <RouterProvider router={router} />
                <Analytics />
            </SiteDataContextProvider>
        </>
    );
}

export default App;
