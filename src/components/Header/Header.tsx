"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BasicMenu } from "../materialUI/BasicMenu";
import { Navbar } from "./Navbar/Navbar";

export const Header = () => {
  const [windowSize, setWindowSize] = useState(0); 

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowSize);

    updateWindowSize();

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []); 

  const windowBigger = windowSize > 768;
  const windowSmaller = windowSize <= 768;

  return (
    <div className="flex flex-row md:px-8 px-4 border items-center md:justify-between justify-center">
      <Image
        src="/logo.svg"
        alt="Logo Escritório de Advocacia Morais & Ribeiro"
        width={192}
        height={64} 
      />
      {windowBigger && <Navbar />}
      {windowSmaller && <BasicMenu className="w-9 object-cover text-white" />}
    </div>
  );
};
