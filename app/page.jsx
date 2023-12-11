"use client";
import { Box } from "@mui/material";
import Input from "@mui/material/Input";
import Feed from "@/component/Feed";
import { useState } from "react";

export default function Home() {
  let timeoutId;
  const [searchResult, setSearchResult] = useState(undefined);

  //Fetching data from the API
  const fetchSearchQuery = async (query) => {
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      const data = await res.json();
      setSearchResult(data.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //Using debouncing to not send multiple hits on the API
  const handleSearchQuery = (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (e.target.value !== "") {
        fetchSearchQuery(e.target.value);
      }
    }, 1000);
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
            sx={{ width: "60%", fontSize: { md: "2rem" }}}
            onChange={(e) => handleSearchQuery(e)}
            size="medium"
          />
        </Box>
      </Box>
      {searchResult ? <Feed searchResult={searchResult} /> : null}
    </>
  );
}
