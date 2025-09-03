"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <div>
              <Skeleton className="h-5 w-32 mb-1" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
          <Skeleton className="h-6 w-28 rounded-full" />
        </div>
      </div>

      {/* Main Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card Skeleton */}
          <Card className="lg:col-span-1 sticky top-24">
            <CardHeader className="text-center pb-4">
              <Skeleton className="w-20 h-20 rounded-full mx-auto mb-4" />
              <Skeleton className="h-6 w-32 mx-auto mb-2" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-36" />
            </CardContent>
          </Card>

          {/* Details Section Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address Info */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-5 w-40" />
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-36" />
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-5 w-44" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-20 rounded-md" />
              </CardContent>
            </Card>

            {/* Posts */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-5 w-40" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="space-y-2 border border-border rounded-lg p-4"
                  >
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex justify-center mt-8">
          <Skeleton className="h-10 w-40 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
