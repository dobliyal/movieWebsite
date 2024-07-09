import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: { username: string; password: string }) => {
    await register(data.username, data.password);
    navigate('/login');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, backgroundColor: 'black', p: 4, borderRadius: 1, boxShadow: 3 }}>
      <Typography variant="h4" align="center" sx={{ color: 'white', mb: 3 }}>
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'gray' },
                  '&.Mui-focused fieldset': { borderColor: 'gray' },
                },
                mb: 2
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'gray' },
                  '&.Mui-focused fieldset': { borderColor: 'gray' },
                },
                mb: 3,
                mt: 2
              }}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            backgroundColor: 'gray',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgray',
              color: 'black',
            },
            mt: 3
          }}
          type="submit"
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterPage;
