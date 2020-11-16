import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ErroInfo', errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h1>Ocurrio un error</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
