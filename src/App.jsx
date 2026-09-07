import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeatureStrip from "./components/FeatureStrip";
import AboutSection from "./components/AboutSection";
import CertificateShowcase from "./components/CertificateShowcase";
import CoursesSection from "./components/CoursesSection";
import CoursesPage from "./components/CoursesPage";
import CourseDetails from "./components/CourseDetails";
import ProductDetails from "./components/ProductDetails";
import OnlineExamsSection from "./components/OnlineExamsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialsSection from "./components/TestimonialsSection";
import AssessmentPartners from "./components/AssessmentPartners";
import Footer from "./components/Footer";
import ProductsPage from "./components/ProductsPage";
import GetToKnowUs from "./pages/GetToKnowUs";
import PartnerWithUs from "./pages/PartnerWithUs";
import Verification from "./pages/Verification";
import OurPresence from "./components/OurPresence";
import LoginPage from "./components/LoginPage";
import RegisterInstitute from "./pages/RegisterInstitute";



import "./index.css";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function HomePage() {
  return (
    <div className="site">

      <Navbar />

      <main>

        <HeroSlider />

        <FeatureStrip />

        <AboutSection />

        <CertificateShowcase />

        <CoursesSection />

        <OnlineExamsSection />

        <WhyChooseUs />

        <TestimonialsSection />

        <AssessmentPartners />

        <Footer />

      </main>

    </div>
  );
}


function App() {
  return (

    <BrowserRouter>
    <ScrollToTop />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<HomePage />}
        />
        {/* LOGIN PAGE */}

<Route
  path="/login"
  element={<LoginPage />}
/>
<Route
  path="/register"
  element={
    <div className="site">
      <Navbar />

      <main>
        <RegisterInstitute />
      </main>
    </div>
  }
/>



        {/* COURSES PAGE */}

        <Route
          path="/courses"
          element={
            <div className="site">

              <Navbar />

              <main>
                <CoursesPage />
              </main>

              <Footer />

            </div>
          }
        />

      {/* DCA COURSE DETAILS */}

<Route
  path="/courses/dca"
  element={
    <div className="site">

      <Navbar />

      <main>
        <CourseDetails />
      </main>

      <Footer />

    </div>
  }
/>
      <Route
  path="/courses/:courseId"
  element={
    <div className="site">

      <Navbar />

      <main>
        <CourseDetails />
      </main>

      <Footer />

    </div>
  }
/>
      {/* PRODUCTS PAGE */}

      <Route
        path="/products"
        element={
          <div className="site">

            <Navbar />

            <main>
              <ProductsPage />
            </main>

            <Footer />

          </div>
        }
      />
      {/* ABOUT US - GET TO KNOW US */}

<Route
  path="/about-us/get-to-know-us"
  element={
    <div className="site">

      <Navbar />

      <main>
        <GetToKnowUs />
      </main>

      <Footer />

    </div>
  }
/>
{/* ABOUT US - WORK WITH US */}

<Route
  path="/about-us/work-with-us"
  element={
    <div className="site">

      <Navbar />

      <main>
        <PartnerWithUs />
      </main>

      <Footer />

    </div>
  }
/>
{/* ABOUT US - OUR PRESENCE */}

<Route
  path="/about-us/our-presence"
  element={
    <div className="site">

      <Navbar />

      <main>
        <OurPresence />
      </main>

      <Footer />

    </div>
  }
/>

{/* VERIFICATION PAGE */}

<Route
  path="/verification"
  element={
    <div className="site">

      <Navbar />

      <main>
        <Verification />
      </main>

      <Footer />

    </div>
  }
/>
      {/* PRODUCT DETAILS */}

<Route
  path="/products/:productId"
  element={
    <div className="site">

      <Navbar />

      <main>
        <ProductDetails />
      </main>

      <Footer />

    </div>
  }
/>
      </Routes>

    </BrowserRouter>

  );
}


export default App;