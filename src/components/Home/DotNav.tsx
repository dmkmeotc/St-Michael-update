// components/DotNav.tsx
import Link from "next/link";

const links = [
  { href: "/section1", label: "1" },
  { href: "/section2", label: "2" },
  { href: "/section3", label: "3" },
  { href: "/section4", label: "4" },
];

export default function DotNav() {
  return (
    <div className="absolute right-4 top-2/3  -translate-y-1/2 flex flex-col items-center space-y-3 z-50">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="w-3 h-3 bg-gray-400 hover:bg-black rounded-full transition duration-300"
          aria-label={`Go to ${link.label}`}
        />
      ))}
    </div>
  );
}
