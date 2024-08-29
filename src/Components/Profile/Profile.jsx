import React, { useEffect, useState } from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from 'react-redux';
import { findUserById, followUser } from '../../Store/Auth/Action';
import { findTweetsByLikeContainsUser, getUsersTweet } from '../../Store/Tweet/Action';


const Profile = () => {

  const [openProfileModal, setOpenProfileModal]= useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    
    const {auth, tweet}= useSelector(store=>store)

    const dispatch = useDispatch();
    const {id}= useParams()

    const handleFollowUser = () => {
        dispatch(followUser(id))
        console.log("follow user");
    }

    const [isHovered, setIsHovered] = useState(false);

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

 
    useEffect(()=>{
      dispatch(findUserById(id))
      dispatch(getUsersTweet(id))
      dispatch(findTweetsByLikeContainsUser(id))
    },[id]);

    return (
        <div className='min-h-screen'>
            <section className={"z-50 flex items-center sticky top-0 opacity-85 bg-black"}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />

                <div >
                    <h1 className="pt-5 text-xl font-bold opacity-90 ml-5 leading-tight">{auth?.findUser?.fullName}</h1>
                    <p className='text-gray-500 text-sm  flex items-start ml-5 mb-1'>{Math.floor(Math.random() * 20)} posts</p>
                </div>

            </section>

            <section>
                <img className="w-[100%] h-[15rem] object-cover object-top" src={auth?.findUser?.backgroundImage} alt="" />
            </section>

            <section>
                <div className='flex justify-between items-start h-[5rem] ml-5'>

                    <div className=' -mt-[5rem] '>
                        <Avatar alt="Jitesh Raghav" src={auth?.findUser?.image}
                            sx={{ width: "10rem", height: "10rem", border: "4px solid black" }} />
                    </div>
                    <div className='mt-5 mr-5'>
                        {auth?.findUser?.req_user ?
                            <Button onClick={handleOpenProfileModal} sx={{ borderRadius: "20px", bgcolor: "black", paddingX:"20px", textTransform:"none", color: "white", border: "1px solid white", }}>Edit profile</Button> :
                            // <Button onClick={handleFollowUser} variant="contained" sx={{ borderRadius: "20px" }}>{auth?.findUser?.followed ? "Following" : "Follow"}</Button>
                            <Button
                            onClick={handleFollowUser}
                            variant={auth?.findUser?.followed ? "outlined" : "contained"}
                            color={auth?.findUser?.followed ? "primary" : "inherit"}
                            sx={{
                              borderRadius: "20px", textTransform:"none", fontSize:"1rem", fontWeight:520,
                              backgroundColor: auth?.findUser?.followed ? "transparent" : "primary.main",
                              color: auth?.findUser?.followed ? "primary.main" : "white",
                              "&:hover": {
                                backgroundColor: auth?.findUser?.followed ? "transparent" : "primary.dark",
                                color: auth?.findUser?.followed ? "error.main" : "white",
                              },
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                               {auth?.findUser?.followed ? (isHovered ? "Unfollow" : "Following") : "Follow"}
                          </Button>
                           //this is done cuz i want the follow button to be solid and follwing to be hallow, and when we hover on following, it should turn to unfollow
                          }
                    </div>
                </div>

                <div className='ml-4'>
                    <div className='flex items-center mt-4'>
                        <h1 className="font-bold text-lg">{auth?.findUser?.fullName}</h1>
                        {true && <VerifiedIcon fontSize='small' className="text-[#2196f3] ml-1" />}
                    </div>
                    <h1 className='text-gray-500 flex items-start'>@{auth?.findUser?.fullName?.split(" ").join("_").toLowerCase()}</h1>
                </div>

                <div className='my-3 ml-4 flex items-start'>
                    <p>{auth?.findUser?.bio}</p>
                </div>

                <div className='flex flex-wrap items-center space-x-3 ml-2'>
                    <p className='text-gray-500 flex items-center '><BusinessCenterOutlinedIcon sx={{ color: grey[500], margin: "2px" }} /> Education</p>
                    <p className='text-gray-500 flex items-center '><RoomOutlinedIcon sx={{ color: grey[500] }} />{auth?.user?.location}</p>
                    <p className='flex items-center m-2 text-blue-500 hover:underline cursor-pointer' ><AttachFileOutlinedIcon sx={{ color: grey[500] }} /> <Link to="https://rickroll.it/rickroll.mp4" target="_blank" rel="noopener noreferrer">bit.ly/2YgVeGM</Link></p>
                    <p className='text-gray-500 items-center hidden lg:block'><CalendarMonthOutlinedIcon sx={{ color: grey[500], margin: "2px" }} /> Joined August 2009</p>
                </div>

                <div className='flex items-center space-x-5 ml-3 my-3'>
                    <div className='flex items-center space-x-1'>
                        <p className='font-semibold'>{auth?.findUser?.following?.length}</p>
                        <p className='text-gray-500'>Following</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <p className='font-semibold'>{auth?.findUser?.followers?.length}</p>
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


        <TabPanel value="1">
         {tweet?.tweets?.map((item)=>(<TweetCard item={item}/>))}
        </TabPanel>

        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>

        <TabPanel value="5">
        {tweet?.tweets?.user?.followers?.map((item)=>(
             <p className="text-white">{item.fullName}</p>
            ))}
        </TabPanel>
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
