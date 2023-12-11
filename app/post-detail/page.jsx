"use client";

import CommentCard from "@/component/CommentCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function PostDetail() {
  const [currentPost, setCurrentPost] = useState();

  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postID");
    const res = await fetch(`http://hn.algolia.com/api/v1/items/${postId}`);
    const data = await res.json();
    console.log(data);
    setCurrentPost(data);
  };
  return (
    <>
      {currentPost && (
        <Box p={4} display={"flex"} flexDirection={"column"} gap={2}>
          <Typography variant="h4">{currentPost.title}</Typography>
          <Typography variant="body2">Points: {currentPost.points}</Typography>
          {currentPost.children.map((child)=><CommentCard commentData = {child}/>)}
        </Box>
      )}
    </>
  );
}

export default PostDetail;
