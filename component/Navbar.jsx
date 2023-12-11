import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

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
      justifyContent={"space-between"}  
      alignItems={"center"}
    >
      <Typography variant="h6">Hacker News</Typography>
    </Box>
  );
}

export default Navbar;
