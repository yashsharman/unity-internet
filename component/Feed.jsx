import { Box } from "@mui/material";
import FeedCard from "@/component/FeedCard";

function Feed({ searchResult }) {
  console.log(searchResult);
  return (
    <Box
      p={4}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      gap={2}
      flexWrap={"wrap"}
    >
      {searchResult
        ? searchResult.map((result) => (
            <FeedCard key={result.objectID} result={result} />
          ))
        : null}
    </Box>
  );
}

export default Feed;
