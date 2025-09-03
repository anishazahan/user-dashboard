import { motion } from "framer-motion";
import { Users } from "lucide-react";

export const UsersEmptyState = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-12 md:py-16"
  >
    <Users className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground mx-auto mb-4" />
    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
      No users found
    </h3>
    <p className="text-muted-foreground text-sm md:text-base">
      Try adjusting your search terms
    </p>
  </motion.div>
);
