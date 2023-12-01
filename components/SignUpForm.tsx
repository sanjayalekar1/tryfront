
import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';


const SignUpFrom = () =>{
    
  const{register,formState:{errors}, handleSubmit,getValues} = useForm();

  const [isUserExist, setIsUserExist] = useState(true);
  
  const onSubmit = async (data:any) => {
    
    try {
      const response =  await fetch('http://127.0.0.1:8000/api/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log('Signup Successful');
        const token = responseData.token;
      } else { 
        setIsUserExist(false);
        console.error('SignupFailed');
        return ;
        
      }

    } catch(error) {
      console.error('An Error Occured',error);
    }
  }

    return(
      <section className="h-screen">
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-/12">
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
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                   
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign up
                  </Typography>
                  <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit = {handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="given-name"
                          name="name"
                          required
                          fullWidth
                          id="name"
                          label="Name"
                          autoFocus
                          {...register("name",{required:true})}
                        />
                        {errors.name?.type ==="required" && <p className = 'text-red-600' >Name is Required.</p> }
                      </Grid>
                    
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          {...register("email",{required:true , pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
                        />
                        {errors.email?.type ==="required" && <p className = 'text-red-600' >Email is Required</p> }
                        {errors.email?.type ==="pattern" && <p className = 'text-red-600' >Invalid Email</p> }
                        {!isUserExist && <p className = 'text-red-600'>Email is already Exist !</p> }
                      </Grid>
                    
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          {...register("password",{required:true, minLength:6})}
                        />
                      
                      {errors.password?.type ==="required" && <p className = 'text-red-600' >Password is Required.</p> }
                      {errors.password?.type ==="minLength" && <p className = 'text-red-600' >Password should be minimum 6 characters</p> }
                      </Grid>
            
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                          id="confirmPassword"
                          autoComplete="new-password"
                          {...register("confirmPassword",{required:true,
                            validate: (value:any) =>{
                                const {password} = getValues(); 
                                return password === value || "Password Should match!";
                            }
                          })}
                        />
                        {errors.confirmPassword?.type ==="required" && <p className = 'text-red-600' >ConfirmPassword is Required.</p> }
                        {errors.confirmPassword?.type ==="validate" && <p className = 'text-red-600' >Confirm password do not match.</p> }
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox 
                            value="yes" 
                            color="primary" 
                            name="termsCheck"
                            id="termsCheck" 
                              />}
                          label="I want to receive inspiration, marketing promotions and updates via email."
                          {...register("termsCheck",{required:true})}
                        />
                        {errors.termsCheck?.type ==="required" && <p className = 'text-red-600' >Please mark terms checkbox</p> }
                      </Grid>
                    </Grid>
                    <Button
                    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="/auth" variant="body2">
                          Already have an account? Sign in
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
export default SignUpFrom;