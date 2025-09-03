import { motion } from "framer-motion";
import { User } from "@/types/user.type";
import { UserCard } from "./UserCard";

export const UsersGrid = ({ users }: { users: User[] }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8"
  >
    {users.map((user, index) => (
      <UserCard key={user.id} user={user} index={index} />
    ))}
  </motion.div>
);
