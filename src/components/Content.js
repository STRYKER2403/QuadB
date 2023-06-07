import React, { useEffect, useState } from 'react'

import ContentCard from './ContentCard';

const Content = () => {
  const [Mdata, setMData] = useState([]);

  const fetchdata = async () => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    let data = await fetch(url);
    let parsedData = await data.json();
    setMData(parsedData);

  }

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='dark container-fluid min-vh-100'>
      <div className='d-flex align-content-stretch flex-wrap'>
        {Mdata.map((element) => {
          return <ContentCard data={element} />
        })}


      </div>
    </div>
  )
}

export default Content
