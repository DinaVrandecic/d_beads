import { useState } from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

interface DropdownProps {
  link: string;
}

const Dropdown: React.FC<DropdownProps> = ({ link }) => {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const items: Record<string, `/${string}`> = {
    all: "/all",
    ring: "/rings",
    bracelet: "/bracelets",
    necklace: "/necklaces",
    charm: "/charms",
    chain: "/chains",
  };

  const baseClass =
    "uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue hover:bg-dark_blue hover:text-peach1 hover:cursor-pointer";

  return (
    <div className="relative inline-block">
      <a
        className={cn(baseClass, {
          "bg-dark_blue text-peach1": link === pathName,
        })}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        SHOP
      </a>
      {showDropdown && (
        <div
          className="absolute z-10 bg-nf_blue mt-[8.5px] py-1 w-40 shadow-lg hover:cursor-pointer"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {Object.entries(items).map(([name, path]) => (
            <li key={name}>
              <Link
                href={"/shop/" + name}
                className={cn(
                  {
                    "text-dark_blue px-3 py-2 block hover:bg-dark_blue  hover:text-peach1":
                      " ",
                  },
                  {
                    "px-3 py-2 block bg-dark_blue text-peach1 ":
                      `/shop/${name}` === pathName,
                  }
                )}
                key={path}
              >
                {name === "all"
                  ? // Render if params.category is "all"
                    name[0].toUpperCase() + name.slice(1) + " products"
                  : // Render if params.category is not "all"
                    name[0].toUpperCase() + name.slice(1) + "s"}
              </Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
