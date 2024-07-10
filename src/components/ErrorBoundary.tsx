import React, { useState, useEffect, ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

interface Props {
  children: ReactNode;
}

const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
      console.error("Uncaught error:", error, errorInfo);
      setHasError(true);
    };

    const handleReset = () => {
      setHasError(false);
      window.location.reload();
    };

    const globalErrorHandler = (event: ErrorEvent) => {
      handleError(event.error, {
        componentStack: 'Global error handler',
      });
    };

    window.addEventListener('error', globalErrorHandler);

    return () => {
      window.removeEventListener('error', globalErrorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <Container sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Something went wrong.
        </Typography>
        <Typography variant="body1" gutterBottom>
          An unexpected error has occurred. Please try again later.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setHasError(false)}>
          Reload Page
        </Button>
      </Container>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
