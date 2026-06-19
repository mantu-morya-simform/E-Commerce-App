import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

/**
 * catches runtime errors in child components
 * and shows a fallback ui instead of crashing the app
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  /**
   * updates state when an error occurs
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  /**
   * logs error details
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  // renders fallback ui on error
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 text-slate-900">
          <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <h1 className="mb-3 text-2xl font-semibold">
              Something went wrong.
            </h1>
            <p className="mb-4 text-slate-600">
              An unexpected error occurred while loading the app. Please refresh
              the page or try again later.
            </p>
            <pre className="overflow-x-auto rounded-xl bg-slate-100 p-3 text-sm text-slate-700">
              {this.state.error?.message}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
