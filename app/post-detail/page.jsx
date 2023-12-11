"use client";

import CommentCard from "@/component/CommentCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function PostDetail() {
  const [currentPost, setCurrentPost] = useState();

  useEffect(() => {
    fetchPostData();
  }, []);

  // Fetchs post data if there is postID porvided in the URL
  const fetchPostData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postID");
    console.log(postId)

    if(postId){
      const res = await fetch(`http://hn.algolia.com/api/v1/items/${postId}`);
      const data = await res.json();
      setCurrentPost(data);
    }else{
      alert("No Post ID provided")
    }
  };

  return (
    <>
      {currentPost ?(
        <Box p={4} display={"flex"} flexDirection={"column"} gap={2} width={{xs:"98%", md:"70%"}} m={"auto"}>
          <Typography variant="h4">{currentPost.title}</Typography>
          <Typography variant="body2">Points: {currentPost.points}</Typography>
          {currentPost.children.map((child)=><CommentCard commentData = {child}/>)}
        </Box>
      ):(<Typography variant="h3" textAlign={"center"} p={4} margin={"auto"}>Loading...</Typography>)}
    </>
  );
}

export default PostDetail;
