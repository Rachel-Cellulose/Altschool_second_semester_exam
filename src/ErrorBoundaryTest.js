import React from "react";
import MovieError from "./MovieError";
import TestErrorBoundary from "./TestErrorBoundary";

const ErrorBoundaryTest = () => {
  return [
    <div className="errorboundarytest">
      <TestErrorBoundary>
        <MovieError movieGenre="kdrama" />
      </TestErrorBoundary>
    </div>,
  ];
};

export default ErrorBoundaryTest;
