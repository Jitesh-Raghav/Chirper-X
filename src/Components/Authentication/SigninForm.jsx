import { Password } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import {Grid} from '@mui/material'
import { useDispatch } from 'react-redux'
import {loginUser} from '../../Store/Auth/Action'

const valiidationSchema= Yup.object().shape({
    email:Yup.string().email("Invalid email").required("Email is required"),
    password:Yup.string().required("Password is required")
})

const SigninForm = () => {
    
    const dispatch= useDispatch(); 

    const formik= useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        valiidationSchema,
        onSubmit:(values)=>{
            dispatch(loginUser(values))
            console.log("form value ", values)
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <h1 className='text-justify text-3xl pb-10'>Sign in to X</h1>
        
        <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                fullWidth
                label='Email'
                name='email'
                variant='outlined'
                size='large'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />
               </Grid>

            <Grid item xs={12}>
                <TextField
                fullWidth
                label='Password'
                name='password'
                variant='outlined'
                size='large'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                />
               </Grid>
               <Grid className="mt-20" item xs={12}>
                 <Button type="submit" fullWidth variant="contained" size="large" sx={{borderRadius:"29px",py:"15px", bgcolor:"blue[400 ]", textTransform:"none"}}>Login</Button>
               </Grid>
        </Grid>
    </form>
  )
}

export default SigninForm
