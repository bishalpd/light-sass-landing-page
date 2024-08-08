import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center bg-black py-3 text-white items-center">
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Sass Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
};
