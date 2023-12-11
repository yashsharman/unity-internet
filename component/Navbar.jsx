import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Link from "next/link";

function Navbar() {
  return (
    <Box
      width={"100vw"}
      height={"max-content"}
      bgcolor={"black"}
      py={1}
      px={4}
      color={"White"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}  
      alignItems={"center"}
    >
      <Link href={'/'}>
      <Typography variant="h4" textAlign={"center"}>Hacker News</Typography>
      </Link>
    </Box>
  );
}

export default Navbar;
