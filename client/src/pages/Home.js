import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USER);
  // const profiles = data?. || [];

return (
  <main id='anime' className="flex-column">
    <div className="flex-row justify-center">
      <div>
        <div className="housertitle">Houser</div>
      </div>
    </div>
  </main>
);
};

export default Home;
