import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const ErrorUI = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            User Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            {"The requested user could not be found."}
          </p>
          <Button asChild>
            <Link href="/users">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Users
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorUI;
