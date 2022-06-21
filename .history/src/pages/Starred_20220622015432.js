import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

function Starred() {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (starred && starred.length > 0) {
      //MANAGE CONCURRENT PROMISES
      const promises = starred.map(showId => apiGet('/shows/$(showId)'));
      Promise.all(promises).then(results => {
        console.log('results', results);
      });
    } else {
      setIsLoading(false);
    }
  }, [starred]);
  return <MainPageLayout>this is starred</MainPageLayout>;
}

export default Starred;
