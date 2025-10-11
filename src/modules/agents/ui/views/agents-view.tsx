"use client";

import { useTRPC } from "@/app/trpc/client";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useSuspenseQuery } from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Agents..."
      description="This may take a few seconds"
    />
  );
};

export const AgentsViewError = () => {
  return <ErrorState title="Error!" description="Something went wrong" />;
};
