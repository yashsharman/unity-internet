import { Box } from "@mui/material";
import FeedCard from "@/component/FeedCard";

function Feed({ searchResult }) {
  console.log(searchResult)
  return (
    <Box p={4} display={"flex"} flexDirection={"row"} gap={2} flexWrap={"wrap"} justifyContent={"center"}>
      
      {searchResult &&
        searchResult.map((result) => <FeedCard key={result.objectID} result={result} />)}
      <FeedCard />
    </Box>
  );
}

export default Feed;
