'use client';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {setCookie} from 'cookies-next';
import type { NextRequest } from 'next/server';
import { useDispatch, useSelector } from 'react-redux';
import { login,selectLoggedIn, selectUser } from '../redux/authSlice';
import { jwtDecode } from 'jwt-decode';



const AuthPage = () =>{
    
  const router = useRouter();
  
  const {register,formState:{errors},handleSubmit}= useForm();
  const dispatch = useDispatch();
  const [isUserExist, setIsUserExist] = useState(true);
 
  
  const onSubmit = async (data:any,request: NextRequest) => {

    const response = await fetch('http://127.0.0.1:8000/api/login',{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    });

    const loginData = await response.json();
    if (response.ok) {
      const authToken = loginData.token;
      const user = jwtDecode(authToken);
      //console.log(user.sub);
      if(authToken) {
        dispatch(login({name: 'sanjay'}));
        setCookie('auth-token',authToken);
        localStorage.setItem('user-id',user.sub);
        setIsUserExist(true);
        router.push('/dashboard');
      }
      console.log('Login Failed');
      router.push('/auth');
    } else {
      localStorage.clear();
      console.error('Login Failed');
      setIsUserExist(false);
      router.push('/auth');
    }

  }

    return(
      <section className="h-screen">
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-6/12">
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: -10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                 
                  <Typography component="h1" variant="h5">
                   Login
                  </Typography>
                  {!isUserExist && <p className = 'text-red-600' >Wrong Email/Password !</p> }
                  <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit = {handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                         
                          {...register("email",{required:true , pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
                        />
                        {errors.email?.type ==="required" && <p className = 'text-red-600' >Email is Required</p> }
                        {errors.email?.type ==="pattern" && <p className = 'text-red-600' >Invalid Email</p> }
                      </Grid>
                    
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                         
                          {...register("password",{required:true, minLength:6})}
                        />
                      
                      {errors.password?.type ==="required" && <p className = 'text-red-600' >Password is Required.</p> }
                      {errors.password?.type ==="minLength" && <p className = 'text-red-600' >Password should be minimum 6 characters</p> }
                      </Grid>

                    </Grid>
                    <Button
                    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                    Login
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2">
                          Forget Password?
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
              </div>
              <div
                className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image" />
              </div>
          </div>
        </div>
      </section>
    );
}
export default AuthPage;