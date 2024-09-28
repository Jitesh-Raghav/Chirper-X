import React from 'react'
import { NavigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "./bird.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Auth/Action';



const Navigation = () => {

  const {auth}= useSelector(store=>store)
  console.log(auth)
  const navigate = useNavigate();

  const dispatch= useDispatch()

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
    dispatch(logout())
  }

  return (
   

  
    <div className="h-screen sticky top-0">

      <div className="py-5 lg:w-16 sm:w-8">
        <img src={logo}/>
      </div>


      <div className="space-y-3">
        {NavigationMenu.map((item) =>
          <div
            className="cursor-pointer flex space-x-3 hover:bg-gray-300 hover:bg-opacity-10 hover:rounded-full py-1 px-2 text-lg" onClick={() => item?.title === "Profile" ? navigate(`/profile/${auth?.user?.id}`) : navigate(item?.path)}>
            {item?.icon}
            <p className="text-xl cursor-pointer hidden lg:block">{item?.title}</p>
          </div>)}
      </div>

      <div className="py-10">
        <Button sx={{ width: "98%", borderRadius: "29px", py: "15px", bgcolor: "#2196f3",display: { xs: 'none', md: 'flex' } }} variant='contained'>  {/*Styled with MUI */}
          Tweet
        </Button>

        {/* Using Tailwind */}
        {/* <button className="w-full rounded-full py-3 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
             Tweet
            </button> */}
      </div>

      <div className="flex items-center">

        <div className="flex items-center space-x-3">
          <Avatar alt="username" src={auth?.user?.image} />

          <div className=''>
            <p className='hidden lg:block'>{auth.user?.fullName}</p>
            <span className="opacity-70 hidden lg:block">@{auth.user?.fullName?.split(" ").join("_").toLowerCase()}</span>
          </div>
 
         
          <Button    
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}  //this code from 68 to 88 copied from mui menu
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              display: { xs: 'none', md: 'flex' } // This line hides the button on extra-small screens and shows it on medium and larger screens.
            }}
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
