import { motion } from "framer-motion";
import { Mail, Phone, Building, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "@/types/user.type";

export const UserCard = ({ user, index }: { user: User; index: number }) => (
  <motion.div
    key={user.id}
    initial={{ y: 30, opacity: 0, rotateX: -15 }}
    animate={{ y: 0, opacity: 1, rotateX: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
    }}
    whileHover={{ y: -5 }}
  >
    <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <motion.div
            className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
            }}
            transition={{ duration: 0.5 }}
          >
            <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </motion.div>
          <Badge variant="outline" className="text-xs">
            ID: {user.id}
          </Badge>
        </div>
        <CardTitle className="text-base md:text-lg text-balance leading-tight">
          {user.name}
        </CardTitle>
        <p className="text-xs md:text-sm text-muted-foreground">
          @{user.username}
        </p>
      </CardHeader>

      <CardContent className="space-y-2 md:space-y-3">
        <motion.div
          className="flex items-center space-x-2 text-xs md:text-sm"
          whileHover={{ x: 5 }}
        >
          <Mail className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-muted-foreground truncate">{user.email}</span>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2 text-xs md:text-sm"
          whileHover={{ x: 5 }}
        >
          <Phone className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-muted-foreground truncate">{user.phone}</span>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2 text-xs md:text-sm"
          whileHover={{ x: 5 }}
        >
          <Building className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-muted-foreground truncate">
            {user.company.name}
          </span>
        </motion.div>

        <Button
          asChild
          size="lg"
          className="px-6 mt-3 md:px-8 shadow-lg w-full sm:w-auto text-sm"
        >
          <Link href={`/users/${user.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);
