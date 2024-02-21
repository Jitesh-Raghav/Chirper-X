import React from 'react'
import { NavigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigation = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("logout");
    handleClose()
  }

  return (
    <div className="h-screen sticky top-0">

      <div className="py-5">
        <svg height="30" width="30" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui 
         r-lrvibr r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 
         2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 
         2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
      </div>


      <div className="space-y-6">
        {NavigationMenu.map((item) =>
          <div
            className="cursor-pointer flex space-x-3" onClick={() => item.title === "Profile" ? navigate('/profile/{5}') : navigate(item.path)}>
            {item.icon}
            <p className="text-xl cursor-pointer">{item.title}</p>
          </div>)}
      </div>

      <div className="py-10">
        <Button sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#2196f3" }} variant='contained'>  {/*Styled with MUI */}
          Tweet
        </Button>

        {/* Using Tailwind */}
        {/* <button className="w-full rounded-full py-3 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
             Tweet
            </button> */}
      </div>

      <div className="flex items-center">

        <div className="flex items-center space-x-3">
          <Avatar alt="username" src="https://avatars.githubusercontent.com/u/93904444?v=4" />

          <div>
            <span className="">Jitesh Raghav</span>
            <span className="block opacity-70">@okayJitesh</span>
          </div>

         
          <Button         
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}  //this code from 68 to 88 copied from mui menu
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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>

        </div>

      </div>


    </div>
  )
}

export default Navigation;
