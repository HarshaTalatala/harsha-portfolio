import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application error captured:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Something went wrong.</h1>
            <p className="text-gray-400 mb-6">
              The page failed to load correctly. Please refresh and try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-3 rounded-lg bg-orange-500 text-black font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300"
            >
              Reload Page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
