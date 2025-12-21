import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import STRINGS from "constants/string.js";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 md:px-20 pt-40 pb-20
                 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div
        className="
          pointer-events-none
          bg-white/90
          border-2 border-purple-800
          rounded-2xl
          shadow-lg
          overflow-hidden
          p-4
          max-w-[900px]
        "
      >
        <Document file={pdf}>
          <Page
            pageNumber={1}
            scale={width < 700 ? (width > 475 ? 0.8 : 0.55) : 1.05}
          />
        </Document>
      </div>

      <a href={pdf} target="_blank" download="Zahraa_Resume" className="mt-8">
        <button
          type="button"
          className="
            flex items-center justify-center gap-2
            w-56 h-12
            bg-purple-800 text-gray-100
            font-semibold text-lg
            rounded-xl shadow-md
            border border-purple-800
            transition-all duration-300
            hover:bg-gray-100 hover:text-purple-800
          "
        >
          <BsDownload className="text-2xl" /> {STRINGS.downloadCV}
        </button>
      </a>
    </div>
  );
};

export default Resume;
