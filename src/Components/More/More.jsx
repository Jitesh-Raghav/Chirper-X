import React from 'react';
import { Divider } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';

const MoreSection = () => {
  return (
    <div className=" p-6 rounded-lg mt-4">
      <h2 className="font-bold text-2xl text-white mb-4">More Options</h2>
      
      {/* Explore Section */}
      <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
        <ExploreIcon className="text-blue-500" />
        <span className="ml-2 text-white">Explore</span>
      </div>

      {/* Notifications Section */}
      <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
        <NotificationsIcon className="text-yellow-500" />
        <span className="ml-2 text-white">Notifications</span>
      </div>

      {/* Bookmarks Section */}
      <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
        <BookmarkIcon className="text-green-500" />
        <span className="ml-2 text-white">Bookmarks</span>
      </div>

      <Divider className="border-gray-700 my-4" />

      {/* Help Section */}
      <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
        <HelpOutlineIcon className="text-red-500" />
        <span className="ml-2 text-white">Help Center</span>
      </div>

      {/* Settings Section */}
      <div className="flex items-center cursor-pointer hover:bg-gray-800 p-2 rounded">
        <SettingsIcon className="text-purple-500" />
        <span className="ml-2 text-white">Settings</span>
      </div>
    </div>
  );
};

export default MoreSection;
