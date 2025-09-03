"use client";

import { useState, useEffect, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { FloatingElements } from "@/components/FloatingElements";
import { SkeletonLoader } from "@/components/SkeletonLoader";
import { User } from "@/types/user.type";
import { UsersGrid } from "./UsersGrid";
import { UsersEmptyState } from "./UsersEmptyState";
import { UsersResultsInfo } from "./UsersResultsInfo";
import { UsersPagination } from "./UsersPagination";
import UsersHeader from "./UsersHeader";
import Navbar from "@/components/Navbar";

const UsersPage = () => {
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

  // Filter users
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingElements />

      <Navbar />

      <div className="container mx-auto px-4 py-4 md:py-8 relative z-10">
        {/* Header */}
        <UsersHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/*  Loading Skeleton */}
        <AnimatePresence>
          {loading && <SkeletonLoader count={6} />}
        </AnimatePresence>

        {/*  Users Grid */}
        <AnimatePresence>
          {!loading && currentUsers.length > 0 && (
            <UsersGrid users={currentUsers} />
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!loading && filteredUsers.length === 0 && <UsersEmptyState />}

        {/* Pagination */}
        {!loading && filteredUsers.length > 0 && totalPages > 1 && (
          <UsersPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* Results Info */}
        {!loading && filteredUsers.length > 0 && (
          <UsersResultsInfo
            startIndex={startIndex}
            endIndex={endIndex}
            total={filteredUsers.length}
          />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
