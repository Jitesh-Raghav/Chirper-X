import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import TweetCard from "../HomeSection/TweetCard";
import Trending from "../RightPart/Trending";
import Profile from "../Profile/Profile";
import { Route, Routes } from 'react-router-dom';
import TweetDetails from "../TweetDetails/TweetDetails";
import { Divider } from '@mui/material';

const HomePage = () => {
  return (
    <Grid
      container
      className="px-5 lg:px-36 justify-between bg-black text-white"
    >
      {/* Navigation */}
      <Grid
        item
        xs={2} // Show on small screens too
        lg={2}
        className="w-full h-screen sticky top-0"
        sx={{ display: { xs: 'none', lg: 'block' } }} // Adjust display for small screens
      >
        <p className="text-center">
          <Navigation />
        </p>
      </Grid>


      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: 'none', lg: 'block' }, bgcolor: 'grey.900' }} // Only visible on large screens
      />

      {/* Main Content Area */}
      <Grid
        item
        xs={12} // Show full width on small screens
        lg={6}
        className="w-full relative"
      >
        <Routes>
          <Route path="/home" element={<HomeSection />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/tweet/:id" element={<TweetDetails />} />
        </Routes>
      </Grid>


      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: 'none', lg: 'block' }, bgcolor: 'grey.900' }} // Only visible on large screens
      />


      {/* Trending Section */}
      <Grid
        item
        xs={12} // Show on small screens, adjust visibility later
        lg={3}
        className="w-full relative"
        sx={{ display: { xs: 'none', lg: 'block' } }} // Hide on small screens
      >
        <Trending />
      </Grid>
    </Grid>
  );
};

export default HomePage;
