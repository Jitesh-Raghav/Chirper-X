import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import ReplyModal from './ReplyModal';

const TweetCard = () => {

    const [openReplyModal, setOpenReplyModal]= useState(false);
    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleDeleteTweet = () => {
      console.log("Tweet Deleted");
      handleClose()
    }

    const OpenReplySection=()=>{
      console.log("reply section")
    }

    const handleRetweet=()=>{
        console.log("handle retweet")
    }

    const handleLike=()=>{
        console.log("handle Likes")
    }

    return (
        <div>

            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>    
            <RepeatIcon/>
            <p>You Retweet</p>
        </div> */}

            <div className='flex space-x-5'>
                <Avatar onClick={() => navigate("/profile/${5}")} className="cursor-pointer" alt="username" src="https://avatars.githubusercontent.com/u/93904444?v=4" />

                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center cursor-pointer space-x-2">

                            <span className="font-semibold">Jitesh Raghav</span>
                            <VerifiedIcon fontSize='small' className="text-[#2196f3]" />
                            <span className="text-gray-600">@okayJitesh .    2m</span>

                        </div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Pin to Profile</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>

                            </Menu>
                        </div>

                    </div>

                    <div className="mt-2">
                       <div className="cursor-pointer w-full" onClick={()=>navigate("/tweet/${3}")}>
                         <p className='mb-2 p-0 flex items-start'>Life's gonna hit you hard, hit back harder!!👊<span className="text-[#2196f3]">#AOT #Anime</span></p>
                         <img className="border border-gray-400 p-2  rounded-sm w-[34rem]" src="https://wallpapers-clan.com/wp-content/uploads/2023/10/aot-fury-titan-desktop-wallpaper-preview.jpg" alt="" />
                       </div>
                    </div>

                    <div className="flex justify-between items-center py-4 flex-wrap">
                        <div className='flex items-center space-x-3 text-gray-500'>
                            <ChatBubbleOutlineRoundedIcon className='cursor-pointer' onClick={handleOpenReplyModal}/>
                            <p>18</p>
                        </div>

                        <div className={true? "text-green-500  space-x-3 flex items-center":"text-gray-500 space-x-3 flex items-center"}>
                            <RepeatIcon className='cursor-pointer' onClick={handleRetweet}/>
                            <p>7</p>
                        </div>

                        <div className={true? "text-pink-600  space-x-3 flex items-center":"text-gray-500 space-x-3 flex items-center"}>
                            {true?<FavoriteRoundedIcon className='cursor-pointer' onClick={handleLike}/>:
                                  <FavoriteBorderRoundedIcon className='cursor-pointer' onClick={handleLike}/>
                             }
                            <p>7</p>
                        </div>
                        
                        <div className='flex items-center space-x-3 text-gray-500'>
                            <BarChartOutlinedIcon className='cursor-pointer' onClick={OpenReplySection}/>
                            <p>418</p>
                        </div>

                        <div className='flex items-center space-x-3 text-gray-500'>
                            <BookmarkBorderIcon className='cursor-pointer' onClick={OpenReplySection}/>
                        </div>

                        <div className='flex items-center space-x-3 text-gray-500'>
                            <FileUploadOutlinedIcon className='cursor-pointer' onClick={OpenReplySection}/>
                        </div>


                    </div>

                </div>

            </div>

          <section>
            <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
          </section>

        </div>
    )
}

export default TweetCard
