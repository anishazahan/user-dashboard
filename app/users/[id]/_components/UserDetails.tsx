"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building,
  Users,
  Briefcase,
  Hash,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Post, User } from "@/types/user.type";
import Navbar from "@/components/Navbar";

const UserDetails = (user: User) => {
  return (
    <div className="min-h-screen bg-background">
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
              <Button variant="ghost" size="sm" asChild>
                <Link href="/users">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Users
                </Link>
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div>
                <h1 className="text-lg font-semibold text-foreground">
                  {user?.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  @{user?.username}
                </p>
              </div>
            </div>
            <Badge variant="secondary">User ID: {user.id}</Badge>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Card */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-balance">
                  {user.name}
                </CardTitle>
                <p className="text-muted-foreground">@{user.username}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <a
                      href={`mailto:${user.email}`}
                      className="text-sm text-foreground hover:text-primary transition-colors truncate"
                    >
                      {user.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <a
                      href={`tel:${user.phone}`}
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {user.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-primary transition-colors truncate flex items-center"
                    >
                      {user.website}
                      <ExternalLink className="w-3 h-3 ml-1 flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Address Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Address Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Street Address
                    </h4>
                    <p className="text-muted-foreground">
                      {user.address.suite}, {user.address.street}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      City & Postal
                    </h4>
                    <p className="text-muted-foreground">
                      {user.address.city}, {user.address.zipcode}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Coordinates
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span>Company Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      {user.company.name}
                    </h4>
                    <p className="text-muted-foreground italic">
                      "{user.company.catchPhrase}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Business Focus
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {user.company.bs}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button asChild size="lg">
            <Link href="/users">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Users
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default UserDetails;
