"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Users,
  ChevronLeft,
  ChevronRight,
  UserIcon,
  Mail,
  Phone,
  Building,
  Filter,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThreeDCard } from "@/components/three-d-card";
import { FloatingElements } from "@/components/floating-elements";
import { SkeletonLoader } from "@/components/skeleton-loader";
import { MobileNav } from "@/components/mobile-nav";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);

  // Fetch users from JSONPlaceholder API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingElements />

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <motion.div
                  className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
                  whileHover={{
                    rotateY: 180,
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <h1 className="text-xl font-bold text-foreground">
                  Dashboard Pro
                </h1>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Badge variant="secondary" className="hidden sm:flex">
                  {filteredUsers.length} Users Found
                </Badge>
              </motion.div>
              {/* <MobileNav /> */}
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-4 md:py-8 relative z-10">
        {/* Page Title and Search */}
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-12 py-2 w-full transition-all duration-300 focus:shadow-lg text-sm md:text-base"
            />
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              animate={{ rotate: searchTerm ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Filter className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence>
          {loading && <SkeletonLoader count={6} />}
        </AnimatePresence>

        {/* Users Grid */}
        <AnimatePresence>
          {!loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8"
            >
              {currentUsers.map((user, index) => (
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
                  <ThreeDCard className="h-full">
                    <Link href={`/users/${user.id}`}>
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
                            transition={{ duration: 0.2 }}
                          >
                            <Mail className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-muted-foreground truncate">
                              {user.email}
                            </span>
                          </motion.div>
                          <motion.div
                            className="flex items-center space-x-2 text-xs md:text-sm"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Phone className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-muted-foreground truncate">
                              {user.phone}
                            </span>
                          </motion.div>
                          <motion.div
                            className="flex items-center space-x-2 text-xs md:text-sm"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Building className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-muted-foreground truncate">
                              {user.company.name}
                            </span>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </Link>
                  </ThreeDCard>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {!loading && filteredUsers.length === 0 && (
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
        )}

        {/* Pagination */}
        {!loading && filteredUsers.length > 0 && totalPages > 1 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2"
          >
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-xs md:text-sm"
              >
                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Previous</span>
              </Button>

              <div className="flex space-x-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let page = i + 1;
                  if (totalPages > 5) {
                    if (currentPage > 3) {
                      page = currentPage - 2 + i;
                    }
                    if (currentPage > totalPages - 2) {
                      page = totalPages - 4 + i;
                    }
                  }
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className="w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm"
                    >
                      {page}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-xs md:text-sm"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Results Info */}
        {!loading && filteredUsers.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-4 md:mt-6"
          >
            <p className="text-xs md:text-sm text-muted-foreground">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, filteredUsers.length)} of{" "}
              {filteredUsers.length} users
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
