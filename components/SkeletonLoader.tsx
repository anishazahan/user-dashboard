"use client"

import { motion } from "framer-motion"

interface SkeletonLoaderProps {
  count?: number
}

export function SkeletonLoader({ count = 6 }: SkeletonLoaderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-card rounded-lg border border-border p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-muted rounded-full animate-pulse" />
            <div className="w-16 h-6 bg-muted rounded animate-pulse" />
          </div>
          <div className="space-y-3">
            <div className="w-3/4 h-6 bg-muted rounded animate-pulse" />
            <div className="w-1/2 h-4 bg-muted rounded animate-pulse" />
            <div className="space-y-2">
              <div className="w-full h-4 bg-muted rounded animate-pulse" />
              <div className="w-5/6 h-4 bg-muted rounded animate-pulse" />
              <div className="w-4/5 h-4 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
