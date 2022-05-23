import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts/Posts';
import SinglePost from '../SinglePost/SinglePost';

const Home = () => {


    const [posts, setPosts] = useState([]);
    const [postImg, setPostImg] = useState({});

    useEffect(()=> {
            // JSON PLACE HOLDER API
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => setPosts(posts));

        
                // RANDOM USER API
                fetch("https://randomuser.me/api/")
                .then(res => res.json())
                .then(postImg => setPostImg(postImg.results[0]));
    }, []);

    return (
        <div>
            {
                posts.map(posts => <Posts posts= {posts} id= {posts.id} postImg={postImg}></Posts>)
            }
        </div>
    );
};

export default Home;