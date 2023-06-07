import React, { useEffect, useState } from 'react'
import { Grid } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import Divider from "@material-ui/core/Divider";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const ContentDesc = () => {
  const navigate = useNavigate();
  let { movieId } = useParams();
  const [Mdata, setMData] = useState([]);
  const [image, setimage] = useState();
  const [rating, setrating] = useState();
  const [netname, setnetname] = useState();
  const [Msummary, setsummary] = useState();
  const [genres, setgenres] = useState();
  const [time, settime] = useState();
  const [days, setdays] = useState();
  const [cname, setcname] = useState();

  const handleClick = () => {
    navigate(`/${movieId}/book`);
  }

  const fetchdata = async () => {
    // console.log(movieId)

    const url = movieId === "null" ? "https://api.tvmaze.com/lookup/shows?thetvdb=269888" : `https://api.tvmaze.com/lookup/shows?imdb=${movieId}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.genres[0])
    setMData(parsedData);
    setimage(parsedData.image.original)
    setrating(parsedData.rating.average)
    // let nname = parsedData.network
    setnetname(parsedData.network ? parsedData.network.name : "OTT")
    let summary = parsedData.summary;
    summary = summary.replace('<p>', '')
    summary = summary.replace('</p>', '')
    setsummary(summary)
    setgenres(parsedData.genres[0])
    settime(parsedData.schedule.time ? parsedData.schedule.time : "20:00")
    setdays(parsedData.schedule.days[0] ? parsedData.schedule.days[0] : "Monday")
    setcname(parsedData.network ? parsedData.network.country.name : parsedData.webChannel.country.name)
  }

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='dark container-fluid min-vh-100  '>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10}>
          <Grid container>
            <Grid item xs={12} sm={4} className='mt-4'>
              <img
                src={image}
                alt={Mdata.name}
                height="600"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} sm={8} className='detailsSection mt-4'>
              <div className='titleContainer'>
                <div className='title text-white'>{Mdata.name}</div>
                <div className='ratingsRoot'>
                  <StarIcon fontSize="large" htmlColor="#e4bb24" />
                  <div>
                    <div className='ratingsContainer'>
                      {rating ? rating : 10}
                      <i >/10</i>
                    </div>


                  </div>
                </div>
              </div>

              <div className='text-white subInfo'>
                <div>{Mdata.premiered}</div>
                <div>{netname}</div>
                <div>{Mdata.ended ? Mdata.ended : "Ongoing"}</div>
                <div>{Mdata.averageRuntime} min</div>
              </div>

              <div className='text-white plot'>{Msummary}</div>

              <Divider light={false} />

              <Grid container className='text-white metaData'>
                <Grid item xs={3} md={2} className='metaLabel'>
                  Genre :
                </Grid>
                <Grid item xs={9} md={10} className='metaValue'>
                  {genres}

                </Grid>
              </Grid>
              <Grid container className='text-white metaData'>
                <Grid item xs={3} md={2} className='metaLabel'>
                  Language :
                </Grid>
                <Grid item xs={9} md={10} className='metaValue'>
                  {Mdata.language}

                </Grid>
              </Grid>
              <Grid container className='text-white metaData'>
                <Grid item xs={3} md={2} className='metaLabel'>
                  Time :
                </Grid>
                <Grid item xs={9} md={10} className='metaValue'>
                  {time}
                </Grid>
              </Grid>
              <Grid container className='text-white metaData'>
                <Grid item xs={3} md={2} className='metaLabel'>
                  Days :
                </Grid>
                <Grid item xs={9} md={10} className='metaValue'>
                  {days}
                </Grid>
              </Grid>

              <Grid container className='text-white metaData'>
                <Grid item xs={3} md={2} className='metaLabel'>
                  Country :
                </Grid>
                <Grid item xs={9} md={10} className='metaValue'>
                  {cname}
                </Grid>
              </Grid>
              <button className="btn btn-outline-light mt-4" type="submit" onClick={handleClick}>Book Tickets</button>
            </Grid>

          </Grid>
        </Grid>
      </Grid>


    </div>
  )
}

export default ContentDesc
