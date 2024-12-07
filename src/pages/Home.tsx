import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Home: React.FC = () => {
  return (
    <>
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Home" />
      <div className="TopHeading 
      text-black dark:text-white">
        <h2>Welcome to the Dashboard</h2>
        <h1>Gram Vikas <span className='HeadingPoint'>X</span> Emulus Consulting</h1>
      </div>
      <div className="Summary">
      <p>Here we can have a summary of the total runs/executions for the pipeline. Access details and remaining additional analysis/info we want to share​</p>
      </div>
    </div>
    </>
  );
};

export default Home;
