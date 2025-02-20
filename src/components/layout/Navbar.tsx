import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeIn, SlideIn } from "@/components/ui/animations";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <FadeIn>
          <Link to="/" className="text-xl font-bold hover:text-primary transition-colors no-underline">
            Portfolio
          </Link>
        </FadeIn>
        
        <SlideIn>
          <div className="flex gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm nav-link no-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SlideIn>
      </div>
    </motion.nav>
  );
};

export default Navbar;