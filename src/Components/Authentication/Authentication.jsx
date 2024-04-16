import React from 'react'
import { Button, Grid } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';

const Authentication = () => {
  return (
    <div className='bg-black text-white'>
       <Grid className="overflow-y-hidden" container>
          <Grid className="hidden lg:block" item lg={7}>

         <div className="relative inline-block">
         <img src="https://static.vecteezy.com/system/resources/previews/002/392/802/non_2x/seamless-patterns-with-colorful-waves-in-blue-shades-for-print-and-web-vector.jpg" alt="" className="w-full" />
          <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute top-[0%] left-[7%] w-[80%] h-[80%]">
          <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
         </svg>
        </div>

            
          </Grid>

          <Grid className='px-10' item lg={5} xs={12}>
            <h1 className='font-bold text-7xl mt-16'>Happening Now</h1>
            <h1 className='font-bold text-3xl pt-16 pb-10 flex items-start'>Join today.</h1>
          
            <div className='w-[60%]'>
               <div className='w-full'>
                 <GoogleLogin width={330}/>
                 <p className='py-5 text-center'>OR</p>
                 <Button fullWidth variant="contained" size="large" sx={{borderRadius:"29px", py:"7px", textTransform:"none"}}>Create account</Button>
                 <p className='text-xs mt-1 text-justify text-gray-500 text leading-tight'>By signing up, you agree to the <span className='text-blue-400 hover:underline cursor-pointer'>Terms of Service</span> and <span className='text-blue-400 hover:underline cursor-pointer'>Privacy Policy</span>, including <span className='text-blue-400 hover:underline cursor-pointer'>Cookie Use</span>.</p>
               </div>

               <div>
                <h1 className='mt-10 mb-4 flex items-start'>Already Have Account?</h1>
                <Button fullWidth variant="outlined" size="large" sx={{borderRadius:"29px", py:"7px", textTransform:"none"}}>Sign In</Button>
               </div>
            </div>
          
          
          </Grid>


       </Grid>
    </div>
  )
}

export default Authentication;
  