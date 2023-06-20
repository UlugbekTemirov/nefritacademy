import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./layout/Main";
import LanguageRouter from "./utils/LanguageRouter";

// pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Courses = lazy(() => import("./pages/Courses"));
const Blog = lazy(() => import("./pages/Blog"));

function App() {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/courses",
      component: Courses,
    },
    {
      path: "/blog",
      component: Blog,
    },
  ];

  return (
    <Router>
      <Suspense fallback={"Loading"}>
        <Main>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`${route.path}`}
                element={<Navigate to={`/uz${route.path}`} replace />}
              />
            ))}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`/:lang${route.path}`}
                element={
                  <LanguageRouter route={route}>
                    <route.component />
                  </LanguageRouter>
                }
              />
            ))}
          </Routes>
        </Main>
      </Suspense>
    </Router>
  );
}

export default App;
