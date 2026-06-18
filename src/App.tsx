import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={
          <Suspense fallback={<PageLoader />}><About /></Suspense>
        } />
        <Route path="services" element={
          <Suspense fallback={<PageLoader />}><Services /></Suspense>
        } />
        <Route path="portfolio" element={
          <Suspense fallback={<PageLoader />}><Portfolio /></Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<PageLoader />}><Contact /></Suspense>
        } />
      </Route>
    </Routes>
  );
}
