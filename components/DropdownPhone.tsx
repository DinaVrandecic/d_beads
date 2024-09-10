import { useState } from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

interface DropdownProps {
  link: string;
  toggleMenu: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ link, toggleMenu }) => {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const items: Record<string, `/${string}`> = {
    all: "/all",
    charm: "/charms",
    chain: "/chains",
    ring: "/rings",
    bracelet: "/bracelets",
    necklace: "/necklaces",
  };

  const baseClass =
    "uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue hover:bg-dark_blue hover:text-peach1 hover:cursor-pointer";

  return (
    <div className=" inline-block">
      <a
        className={cn(baseClass, {
          "bg-dark_blue text-peach1": link === pathName,
        })}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        SHOP
      </a>
      {showDropdown && (
        <ul className="flex flex-col justify-center items-start  my-[20px] ">
          {Object.entries(items).map(([name, path]) => (
            <li key={name}>
              <Link
                href={"/shop/" + name}
                onClick={toggleMenu}
                className={cn(
                  {
                    "text-brown1 px-3 py-2 block ml-[20px] hover:bg-dark_blue":
                      " ",
                  },
                  {
                    "bg-dark_blue text-peach1 ": `/shop/${name}` === pathName,
                  }
                )}
              >
                {name === "all"
                  ? // Render if params.category is "all"
                    name[0].toUpperCase() + name.slice(1) + " products"
                  : // Render if params.category is not "all"
                    name[0].toUpperCase() + name.slice(1) + "s"}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
