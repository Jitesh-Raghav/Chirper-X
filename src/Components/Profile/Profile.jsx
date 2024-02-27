import React, { useState } from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { grey } from '@mui/material/colors';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from "../HomeSection/TweetCard"


const Profile = () => {

    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

 

    const handleOpenProfileModel = () => {
        console.log("handle open profile model");
    }

    const handleFollowUser = () => {
        console.log("folow user");
    }

     //MUI TAB COMPONENT
      const [value, setValue] = useState("1");  
      const handleChange = (event, newValue) => {
      setValue(newValue);

      if(newValue===4){
        console.log("likes tweet")
      }
      if(newValue===1){
        console.log("users tweet")
      }
    };

 

    return (
        <div>
            <section className={"z-50 flex items-center sticky top-0 opacity-85 bg-black"}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />

                <div >
                    <h1 className="pt-5 text-xl font-bold opacity-90 ml-5 leading-tight">Jitesh Raghav</h1>
                    <p className='text-gray-500 text-sm  flex items-start ml-5 mb-1'>6,112 posts</p>
                </div>

            </section>

            <section>
                <img className="w-[100%] h-[15rem] object-cover object-top" src="https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2021/01/06173002/BreakingBad1.jpg" alt="" />
            </section>

            <section>
                <div className='flex justify-between items-start h-[5rem] ml-5'>

                    <div className=' -mt-[4.5rem] '>
                        <Avatar alt="Jitesh Raghav" src="https://avatars.githubusercontent.com/u/93904444?v=4"
                            sx={{ width: "10rem", height: "10rem", border: "4px solid black" }} />
                    </div>
                    <div className='mt-5 mr-5'>
                        {true ?
                            <Button onClick={handleOpenProfileModel} sx={{ borderRadius: "20px", bgcolor: "black", color: "white", border: "1px solid white", }}>Edit profile</Button> :
                            <Button onClick={handleFollowUser} variant="contained" sx={{ borderRadius: "20px" }}>{true ? "Follow" : "Unfollow"}</Button>}
                    </div>
                </div>

                <div>
                    <div className='flex items-center ml-4 mt-4'>
                        <h1 className="font-bold text-lg">Jitesh Raghav</h1>
                        {true && <VerifiedIcon fontSize='small' className="text-[#2196f3]" />}
                    </div>
                    <h1 className='text-gray-500 -ml-[500px]'>@OkayJitesh</h1>
                </div>

                <div className='my-3 ml-4 flex items-start'>
                    <p>Toto, I've a feeling we're not in Kansas anymore.</p>
                </div>

                <div className='flex items-center space-x-3 ml-2'>
                    <p className='text-gray-500 flex items-center '><BusinessCenterOutlinedIcon sx={{ color: grey[500], margin: "2px" }} /> Education</p>
                    <p className='text-gray-500 flex items-center '><RoomOutlinedIcon sx={{ color: grey[500] }} /> Gurgaon</p>
                    <p className='flex items-center m-2 text-blue-500 hover:underline cursor-pointer' ><AttachFileOutlinedIcon sx={{ color: grey[500] }} /> <Link to="https://rickroll.it/rickroll.mp4" target="_blank" rel="noopener noreferrer">bit.ly/2YgVeGM</Link></p>
                    <p className='text-gray-500 flex items-center '><CalendarMonthOutlinedIcon sx={{ color: grey[500], margin: "2px" }} /> Joined August 2009</p>
                </div>

                <div className='flex items-center space-x-5 ml-3 my-3'>
                    <div className='flex items-center space-x-1'>
                        <p className='font-semibold'>49</p>
                        <p className='text-gray-500'>Following</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <p className='font-semibold'>183.9K</p>
                        <p className='text-gray-500'>Followers</p>
                    </div>
                </div>
            </section>
         
         {/* MUI TAB COMPONENT */}
            <section className='py-3'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ width: '100%', justifyContent: 'space-evenly' }}>
            <Tab label="Tweets" value="1" style={{ color: 'white', minWidth:"20%", textTransform :"none" }} />
            <Tab label="Replies" value="2" style={{ color: 'white', minWidth:"20%", textTransform :"none" }} />
            <Tab label="Media" value="3" style={{  color: 'white', minWidth:"20%", textTransform :"none" }}/>
            <Tab label="Highlights" value="4" style={{  color: 'white', minWidth:"20%", textTransform :"none" }}/>
            <Tab label="Likes" value="5" style={{  color: 'white', minWidth:"20%", textTransform :"none" }} />
          </TabList>
        </Box>
        <TabPanel value="1"><TweetCard/> <TweetCard/>
        
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
      </TabContext>
    </Box>
            </section>
       

        </div>
    )
}

export default Profile
