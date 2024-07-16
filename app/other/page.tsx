import Link from "next/link";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const pages = {
    contact: "/contact",
    faq: "/faq",
    terms: "/terms",
  };

  export default function Other() {
  
    return (
      <div>
          <nav>
            <h3 className="flex items-center justify-center">OTHER</h3>
            <ul className="flex gap-8 items-center justify-center p-4">
              {Object.entries(pages).map(([name, path]) => (
                <li key={name}>
                  <Link href={`other/${path}`}>{name}</Link>
                </li>
              ))}
            </ul>
            
          </nav>
          {/* {children} */}
      </div>
    );
  }


