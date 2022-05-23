import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useParams} from 'react-router-dom';


const SinglePost = () => {
  const {postId} = useParams();
  console.log(postId)

  const [singlePost, setSinglePost] =useState({});
  const [postImg, setPostImg] = useState({});
  useEffect(()=>{
    // JSON PLACE HOLDER SINGLE POST API
    const url= `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(post => setSinglePost(post))

    // RANDOM USER API
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(postImg => setPostImg(postImg.results[0]));
  },[])

console.log(singlePost)

      
  let postTime = new Date();
    const postMonth = postTime.getMonth() + 1;
    const postDate = postTime.getDate();
    const postYear = postTime.getFullYear();
  postTime =`${postDate}-${postMonth}-${postYear}`; 
  
  

    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={singlePost.title}
        subheader={postTime}
      />
      <CardMedia
        component="img"
        height="194"
        image={postImg.picture?.large}
        alt={singlePost.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {singlePost.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    );
};

export default SinglePost;