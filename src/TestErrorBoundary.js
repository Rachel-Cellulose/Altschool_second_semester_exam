import React, { Component } from "react";

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

    return <h1>Test Error Boundary</h1>;
  }
}

export default TestErrorBoundary;
