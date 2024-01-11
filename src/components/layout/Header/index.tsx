"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const totalScrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = Math.round((scrollTop / totalScrollHeight) * 100);
    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-20 h-[53px] w-full px-2 ${
        scrollPercentage > 10 ? "bg-background/30" : "bg-background"
      }`}
    >
      <nav className="flex h-full w-full items-center justify-between px-2">
        <Image
          src={"/hbo-max-logo.svg"}
          alt="HBOMax logo"
          width={160}
          height={27}
        />
        <div className="flex items-center gap-x-2">
          <Link href="#">
            <button className="text-2xs font-bold text-foreground">
              ENTRAR
            </button>
          </Link>
          <Link href="#">
            <button className="btn-tertiary px-3.5 py-2.5 text-2xs">
              ASSINE AGORA
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
