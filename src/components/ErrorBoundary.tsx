import React, { Component, ReactNode } from 'react';
import { Typography, Container, Button } from '@mui/material';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Something went wrong.
          </Typography>
          <Typography variant="body1" gutterBottom>
            An unexpected error has occurred. Please try again later.
          </Typography>
          <Button variant="contained" color="primary" onClick={this.handleReload}>
            Reload Page
          </Button>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
