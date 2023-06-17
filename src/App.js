import React, { Suspense, useEffect, lazy } from "react";

// react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// animation
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Loader from "./components/Loader";
import Main from "./layout/Main";

// utils
import LanguageRoute from "./utils/LanguageRoute";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const About = lazy(() => import("./pages/About"));
  const Contact = lazy(() => import("./pages/Contact"));
  const Services = lazy(() => import("./pages/Services"));
  const Products = lazy(() => import("./pages/Products"));
  const Product = lazy(() => import("./pages/Product"));
  const News = lazy(() => import("./pages/News"));
  const SingleNews = lazy(() => import("./pages/SingleNews"));
  const SingleService = lazy(() => import("./pages/SingleService"));
  const NotFound = lazy(() => import("./pages/NotFound"));

  useEffect(() => {
    AOS.init();
  }, []);

  const routes = [
    {
      path: "/",
      element: Home,
    },
    {
      path: "/about",
      element: About,
    },
    {
      path: "/contact",
      element: Contact,
    },
    {
      path: "/services",
      element: Services,
    },
    {
      path: "/services/:slug",
      element: SingleService,
    },
    {
      path: "/products",
      element: Products,
    },
    {
      path: "/news",
      element: News,
    },
    {
      path: "/news/:slug",
      element: SingleNews,
    },
    {
      path: "/products/:slug",
      element: Product,
    },
  ];

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Main>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`${route.path}`}
                element={<Navigate to={`/en${route.path}`} replace />}
              />
            ))}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`/:lang${route.path}`}
                element={
                  <LanguageRoute route={route}>
                    <route.element />
                  </LanguageRoute>
                }
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </Suspense>
    </Router>
  );
}

export default App;
