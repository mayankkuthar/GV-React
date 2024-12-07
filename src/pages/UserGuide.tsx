import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const UserGuide: React.FC = () => {
  return (
    <>
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="User Guide" />

      <div className="TopHeading 
      text-black dark:text-white">
        <h2>Welcome to the User Guide</h2>
        <h1>Gram Vikas <span className='HeadingPoint'>X</span> Emulus Consulting</h1>
      </div>
      <div className="Summary">
      <p>Here we can have a video/text based user instructions to run the project.​</p>
      </div>
      </div>
    </>
  );
};

export default UserGuide;
