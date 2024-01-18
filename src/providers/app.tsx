import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/elements";

const ErrorFallback = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-centr items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :(</h2>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>{children}</Router>
      </ErrorBoundary>
    </React.Suspense>
  );
};
