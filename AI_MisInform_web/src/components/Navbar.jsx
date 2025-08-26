import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Awareness", href: "/Awareness" },
  { name: "Prevention", href: "/Prevention" },
  { name: "Detection", href: "/Detection" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="nav-bg text-white p-4 fade-in">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold text-glow">Spot AI</div>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-button-class-sm${
                location.pathname === item.href ? "-selected" : ""
              } nav-hover-accent`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="accent-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 animate-grow">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-button-class-sm${
                location.pathname === item.href ? "-selected" : ""
              } nav-hover-accent`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
