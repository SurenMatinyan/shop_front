import  React from 'react';
import {CardActions,Card} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {CardMedia,Button,Typography,} from '@material-ui/core';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{maxWidth: 250, marginLeft: 20, marginTop: 20}}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.pinimg.com/564x/e9/18/e1/e918e10b7324aba2cdcbdb625c7a3a2a.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
