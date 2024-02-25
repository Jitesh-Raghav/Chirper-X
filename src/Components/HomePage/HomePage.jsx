import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import TweetCard from "../HomeSection/TweetCard";
import Trending from "../RightPart/Trending";

const HomePage=()=>{
    return(
       <Grid container xs={12} className="px-5 lg:px-36 justify-between bg-black text-white">

        <Grid item xs={0} lg={2.5} className="hidden lg:block w-full h-screen sticky top-0" >
            <p className="text-center"><Navigation/></p>
        </Grid>

        <Grid item xs={12} lg={6} className="hidden lg:block w-full relative" >
            <HomeSection/>
        </Grid>

        <Grid item xs={0} lg={3} className="hidden lg:block w-full relative" >
           <Trending/>
            
        </Grid>

       </Grid>
    );
};

export default HomePage;