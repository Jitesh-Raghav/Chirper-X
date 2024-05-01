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
import ProfileModal from './ProfileModal';
import { useSelector } from 'react-redux';


const Profile = () => {

  const [openProfileModal, setOpenProfileModal]= useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    
    const {auth}= useSelector(store=>store)

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
                    <h1 className="pt-5 text-xl font-bold opacity-90 ml-5 leading-tight">{auth?.user?.fullName}</h1>
                    <p className='text-gray-500 text-sm  flex items-start ml-5 mb-1'>6,112 posts</p>
                </div>

            </section>

            <section>
                <img className="w-[100%] h-[15rem] object-cover object-top" src={auth?.user?.backgroundImage} alt="" />
            </section>

            <section>
                <div className='flex justify-between items-start h-[5rem] ml-5'>

                    <div className=' -mt-[5rem] '>
                        <Avatar alt="Jitesh Raghav" src={auth?.user?.image}
                            sx={{ width: "10rem", height: "10rem", border: "4px solid black" }} />
                    </div>
                    <div className='mt-5 mr-5'>
                        {true ?
                            <Button onClick={handleOpenProfileModal} sx={{ borderRadius: "20px", bgcolor: "black", paddingX:"20px", textTransform:"none", color: "white", border: "1px solid white", }}>Edit profile</Button> :
                            <Button onClick={handleFollowUser} variant="contained" sx={{ borderRadius: "20px" }}>{true ? "Follow" : "Unfollow"}</Button>}
                    </div>
                </div>

                <div className='ml-4'>
                    <div className='flex items-center mt-4'>
                        <h1 className="font-bold text-lg">{auth?.user?.fullName}</h1>
                        {true && <VerifiedIcon fontSize='small' className="text-[#2196f3] ml-1" />}
                    </div>
                    <h1 className='text-gray-500 flex items-start'>@{auth?.user?.fullName.split(" ").join("_").toLowerCase()}</h1>
                </div>

                <div className='my-3 ml-4 flex items-start'>
                    <p>{auth?.user?.bio}</p>
                </div>

                <div className='flex items-center space-x-3 ml-2'>
                    <p className='text-gray-500 flex items-center '><BusinessCenterOutlinedIcon sx={{ color: grey[500], margin: "2px" }} /> Education</p>
                    <p className='text-gray-500 flex items-center '><RoomOutlinedIcon sx={{ color: grey[500] }} />{auth?.user?.location}</p>
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
       
           <section>
              <ProfileModal open={openProfileModal} handleClose={handleClose}/>
           </section>

        </div>
    )
}

export default Profile
