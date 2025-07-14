import { Link } from '@tanstack/react-router'
import { Component, type ErrorInfo, type ReactNode } from 'react'

class ErrorBoundary extends Component<{ children: React.ReactNode }> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    //Can send the error to the server for logging
    console.error('ErrorBoundary caught a error:', error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page. <Link to="/">Click Here</Link> to go back to the Home
            page.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
