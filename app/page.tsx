"use client";

import { motion } from "framer-motion";
import {
  Users,
  Search,
  BarChart3,
  Settings,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FloatingElements } from "@/components/floating-elements";
import { ThreeDCard } from "@/components/three-d-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { ParticleBackground } from "@/components/particle-background";
import { MobileNav } from "@/components/mobile-nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />

      {/* Navigation Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
                animate={{
                  rotateY: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                    "0 0 0 10px rgba(34, 197, 94, 0.1)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  rotateY: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <h1 className="text-xl font-bold text-foreground cursor-pointer">
                Dashboard Pro
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-6">
              <Link
                href="/users"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Users
              </Link>

              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </nav>

            {/* Mobile Navigation
            <MobileNav /> */}
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
            >
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance leading-tight"
          >
            Modern User Management
            <motion.span
              className="text-primary block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{
                background: "linear-gradient(90deg, #15803d, #84cc16, #15803d)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dashboard
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 text-pretty px-4"
          >
            Efficiently manage users with advanced search, pagination, and
            detailed profiles. Built with modern technologies and smooth
            animations.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 shadow-lg w-full sm:w-auto"
              >
                <Link href="/users">
                  <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  View Users
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {[
            {
              label: "Active Users",
              value: 10,
              icon: Users,
              color: "text-primary",
            },
            {
              label: "Search Queries",
              value: 1250,
              icon: Search,
              color: "text-accent",
            },
            {
              label: "Data Points",
              value: 50000,
              icon: BarChart3,
              color: "text-chart-3",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            >
              <ThreeDCard>
                <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 h-full">
                  <CardContent className="pt-4 md:pt-6">
                    <stat.icon
                      className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mx-auto mb-3 md:mb-4`}
                    />
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">
                      <AnimatedCounter value={stat.value} />
                      {stat.value >= 1000 && "+"}
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Key Features
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-4">
            Everything you need for modern user management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              icon: Users,
              title: "User Management",
              description:
                "Comprehensive user profiles with detailed information and easy navigation",
              delay: 1.5,
              gradient: "from-primary/10 to-primary/5",
            },
            {
              icon: Zap,
              title: "Advanced Search",
              description:
                "Real-time search by name or email with instant results and filtering",
              delay: 1.6,
              gradient: "from-accent/10 to-accent/5",
            },
            {
              icon: Shield,
              title: "Smart Pagination",
              description:
                "Efficient data loading with customizable page sizes and smooth transitions",
              delay: 1.7,
              gradient: "from-chart-3/10 to-chart-3/5",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: feature.delay }}
            >
              <ThreeDCard className="h-full">
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-500 border-border/50 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm`}
                >
                  <CardHeader className="pb-3">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 md:mb-4"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-lg md:text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="container mx-auto px-4 py-8 md:py-16 relative z-10"
      >
        {/* <ThreeDCard> */}
        <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-primary/20 backdrop-blur-sm">
          <CardContent className="text-center py-8 md:py-12 px-4">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="mb-4 md:mb-6"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-4 md:mb-6 text-base md:text-lg">
              Explore the user management system and see all features in action
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 shadow-lg"
              >
                <Link href="/users">
                  <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Explore Dashboard
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
        {/* </ThreeDCard> */}
      </motion.section>
    </div>
  );
}
