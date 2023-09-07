
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  useEffect(() => {
    console.log("profile_page->useEffect");
  }, []);

    return <h1>ProfilePage</h1>;
  };
  
  export default ProfilePage;