import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';



const Home = () => {
  // const { loading, data } = useQuery(QUERY_USER);
  // const profiles = data?. || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="">
          <div className="housertitle">Houser</div>
        </div>
      </div>
    </main>
  );
};

export default Home;

