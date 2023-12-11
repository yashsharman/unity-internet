"use client";
import { Box} from "@mui/material";
import Input from "@mui/material/Input";
import Feed from "@/component/Feed";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState();
  const [searchResult, SetSearchResult] = useState();
  const fetchSearchQuery = async () => {
    const res = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${searchQuery}`
    );
    const data = await res.json();
    SetSearchResult(data.hits);
  };
  let timeoutId;


  const handleSearchQuery = (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setSearchQuery(e.target.value);
      fetchSearchQuery()
    }, 2000);
  };
  return (
    <>
      <Box p={4} display={"flex"} flexDirection={"column"} gap={2}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Input
            placeholder="Search Hacker News Here..."
            sx={{ width: "60%" }}
            onChange={(e) => handleSearchQuery(e)}
            size="medium"
          />
        </Box>
      </Box>
      {searchResult ? <Feed searchResult={searchResult}/> : null }
    </>
  );
}
