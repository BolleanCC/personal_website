"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  // For external links (like PDFs), use regular anchor tag
  if (link.isExternal) {
    return (
      <a
        className="relative px-2 py-1 transition-all duration-300 text-gray-600 hover:text-black cursor-pointer"
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.title}
      </a>
    );
  }

  // For internal navigation, use Next.js Link
  return (
    <Link
      className={`relative px-2 py-1 transition-all duration-300
    ${
      pathName === link.url
        ? "text-black font-semibold"
        : "text-gray-600 hover:text-black"
    }
  `}
      href={link.url}
    >
      {link.title}

      {/* Active underline */}
      {pathName === link.url && (
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black rounded-full"></span>
      )}
    </Link>
  );
};

export default NavLink;
