import React, { Component } from "react";
import { Link } from "react-router-dom";

class TestErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Triggering an error
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error("This is a simulated error.");
    }

    return (
      <h1>
        This is my Test Error Boundary page!!!!!
        <Link to="/" style={{ textDecoration: "none" }}>
          Back to Home
        </Link>
      </h1>
    );
    
  }
}

export default TestErrorBoundary;
