import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

function Show() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        setTimeout(() => {}, 2000);
        setShow(results);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setError(false);
      });
  }, [id]);

  console.log('show', show);
  if (isLoading) {
    return <div>Data Is Being Loaded.</div>;
  }
  if (error) {
    return <div>Error Occured:(error)</div>;
  }
  return <div>this is show page</div>;
}

export default Show;
