import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

interface UsersHeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const UsersHeader = ({ searchTerm, setSearchTerm }: UsersHeaderProps) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mb-6 md:mb-8"
  >
    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
      User Management
    </h1>
    <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
      Manage and search through user profiles
    </p>

    <motion.div
      className="relative max-w-full md:max-w-md"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-12 py-2 w-full transition-all duration-300 focus:shadow-lg text-sm md:text-base"
      />
      <motion.div
        className="absolute right-3 top-1/2 -translate-y-1/2"
        animate={{ rotate: searchTerm ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Filter className="w-4 h-4 text-muted-foreground" />
      </motion.div>
    </motion.div>
  </motion.div>
);

export default UsersHeader;
