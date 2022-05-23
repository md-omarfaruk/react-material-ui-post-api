import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Posts = (props) => {
  const {title, id} = props.posts;
  const postBody = props.posts.body.slice(0, 80) + ".........";
  const postImg = props.postImg;

    return (
      <Grid margin="auto" padding>
        <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={postImg.picture?.large}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {postBody}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to= {"/posts/"+id}>Read more</Link>
          </Button>
        </CardActions>
      </Card>
      </Grid>
    );
};

export default Posts;