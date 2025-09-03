import { motion } from "framer-motion";

export const UsersResultsInfo = ({
  startIndex,
  endIndex,
  total,
}: {
  startIndex: number;
  endIndex: number;
  total: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="text-center mt-4 md:mt-6"
  >
    <p className="text-xs md:text-sm text-muted-foreground">
      Showing {startIndex + 1} to {Math.min(endIndex, total)} of {total} users
    </p>
  </motion.div>
);
