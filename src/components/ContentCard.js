import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CalendarToday from "@material-ui/icons/CalendarToday";
import { useNavigate } from "react-router-dom";


const ContentCard = ({ data }) => {
  const navigate = useNavigate();


  const handleSelect = () => {
    navigate(`/${data.show.externals.imdb}`);
  }

  return (
    <div className='rounded-lg'>
      <Card sx={{ maxWidth: 345 }} className='my-4 ms-5'>
        {/* on click here  */}
        <CardActionArea className='cardArea cursor-pointer' onClick={handleSelect}>
          <CardMedia
            component="img"
            height="400"
            image={data.show.image.original}
            title={data.show.name}
            className='poster'
            alt="MImage"
          />
          <CardContent className='overText'>
            <h2>{data.show.name}</h2>
          </CardContent>
        </CardActionArea>
        <CardActions className="yearSection text-light bg-dark d-flex bd-highlight">
          <Typography gutterBottom component="i" className='me-auto bd-highlight'>
            <CalendarToday fontSize="small" />
            &nbsp;
            {data.show.premiered}
          </Typography>

          <Typography gutterBottom component="i" className=' bd-highlight pe-2'>{data.show.rating.average ? data.show.rating.average : 10}</Typography>
        </CardActions>
      </Card>
    </div>
  )
}

export default ContentCard
