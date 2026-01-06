import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navbar, Footer, MoveToTop, Loader } from "components";
import { Home, About, Resume, Projects } from "./pages/index.js";
import { Helmet } from "react-helmet";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Zahraa Qawariq</title>
        <meta
          name="description"
          content="Portfolio of Zahraa Qawariq, Frontend Developer."
        />
      </Helmet>

      {loading ? (
        <Loader duration={1900} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <MoveToTop />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Resume" element={<Resume />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
