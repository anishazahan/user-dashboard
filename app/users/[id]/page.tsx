"use client";

import { useState, useEffect } from "react";

import { useParams, useRouter } from "next/navigation";
import { Post, User } from "@/types/user.type";
import UserDetails from "./_components/UserDetails";
import ErrorUI from "./_components/ErrorUI";
import DetailsSkeleton from "./_components/DetailsSkeleton";

export default function UserDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = params.id as string;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user details and posts in parallel
        const [userResponse, postsResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`),
        ]);

        if (!userResponse.ok) {
          throw new Error("User not found");
        }

        const userData = await userResponse.json();
        const postsData = await postsResponse.json();

        setUser(userData);
        setPosts(postsData.slice(0, 3)); // Show only first 3 posts
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch user data"
        );
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  if (loading) {
    return <DetailsSkeleton />;
  }

  if (error || !user) {
    return <ErrorUI />;
  }

  return (
    <>
      <UserDetails {...user} />
    </>
  );
}
