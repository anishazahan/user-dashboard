import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
                animate={{
                  rotateY: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                    "0 0 0 10px rgba(34, 197, 94, 0.1)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  rotateY: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <h1 className="text-xl font-bold text-foreground cursor-pointer">
                Dashboard Pro
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              href="/users"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Users
            </Link>

            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </nav>

          {/* Mobile Navigation
            <MobileNav /> */}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
