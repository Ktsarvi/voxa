"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const HomeView = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // This will only run on the client side
    setIsClient(true);
  }, []);

  const handleNavigateToAgents = () => {
    router.push("/agents");
  };

  if (!isClient) {
    // Return a simple loading state or null during server-side rendering
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="h-12 w-12 border-4 border-t-primary rounded-full animate-spin mb-4"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Voxa</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
        Your personal AI assistant platform. Get started by exploring agents and
        creating your own custom AI solutions.
      </p>
      <Button
        onClick={handleNavigateToAgents}
        size="lg"
        className="text-lg px-8 py-6"
      >
        Explore Agents
      </Button>
    </div>
  );
};
