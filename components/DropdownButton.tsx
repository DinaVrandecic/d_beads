
import { useState } from 'react';
import Link from "next/link";
import {cn} from "../lib/utils";
import { usePathname } from 'next/navigation'


interface DropdownProps {
  link: string;
}

const Dropdown: React.FC<DropdownProps> = ({ link }) => {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const items: Record<string, `/${string}`> = {
    all: "/all",
    earring: "/earrings",
    ring: "/rings",
    bracelet: "/bracelets",
    necklace: "/necklaces",

  }; 

  const baseClass =
    'uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue hover:bg-dark_blue hover:text-peach1 hover:cursor-pointer';

  return (
    <div className="relative inline-block">
      <a
                  className={cn(baseClass, {
                    "bg-dark_blue text-peach1":
                      link === pathName,
                  })}
        onClick={() => setShowDropdown(!showDropdown)}
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
          {Object.entries(items).map(([name, path]) =>  (
            <Link 
            href={"/shop/"+ name}
            className={`text-dark_blue px-3 py-2 block hover:bg-dark_blue  hover:text-peach1` //add inside of classes
            }
            key={path}
>
          {name === "all" ? (
            // Render if params.category is "all"
            name[0].toUpperCase() + name.slice(1) + " products"
          ) : (
            // Render if params.category is not "all"
            name[0].toUpperCase() + name.slice(1) + "s"
          )} 
            </Link>

          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;


//***************************add this when contentful is done************************************
// ${path === pathName ? 'bg-dark_blue text-peach1' : ''
// }


// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

// function classNames(...classes: (string | undefined | null | false)[]) {
//     return classes.filter(Boolean).join(' ');
//   }
  

// export default function Example() {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//           Options
//           <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Account settings
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Support
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   License
//                 </a>
//               )}
//             </Menu.Item>
//             <form method="POST" action="#">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     type="submit"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block w-full px-4 py-2 text-left text-sm'
//                     )}
//                   >
//                     Sign out
//                   </button>
//                 )}
//               </Menu.Item>
//             </form>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// }