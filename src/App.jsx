import { useEffect } from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutInfo from "./pages/AboutInfo/AboutInfo";
import Apostolate from "./pages/Apostolate/Apostolate";
import ApostolatesInfo from "./pages/ApostolatesInfo/ApostolatesInfo";
import BlogInfo from "./pages/BlogInfo/BlogInfo";
import ContactInfo from "./pages/ContactInfo/ContactInfo";
import Founder from "./pages/Founder/Founder";
import Post from "./pages/Post/Post";
import Donate from "./pages/Donate/Donate";
import VocationInfo from "./pages/VocationInfo/VocationInfo";
import FormationInfo from "./pages/FormationInfo/FormationInfo";
import Gallery from "./components/PhotoGallery/PhotoGallery";
import Error from "./pages/Error/Error";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {

   useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutInfo />,
      },
      {
        path: "/about/founder",
        element: <Founder />,
      },
      {
        path: "/vocation",
        element: <VocationInfo />,
      },
      {
        path: "/formation",
        element: <FormationInfo />,
      },
      {
        path: "/apostolates",
        element: <ApostolatesInfo />,
      },
      {
        path: "/apostolate/:apostolateId",
        element: <Apostolate />,
      },
      {
        path: "/blog",
        element: <BlogInfo />,
      },
      {
        path: "/blog/:blogId",
        element: <Post />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <ContactInfo />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;