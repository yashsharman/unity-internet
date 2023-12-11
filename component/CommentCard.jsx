import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";


export default function CommentCard({commentData}) {
    const {text, author,created_at} = commentData
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author[0].toUpperCase()}
          </Avatar>
        }
        title={author.charAt(0).toUpperCase() + author.slice(1)}
        subheader={created_at.slice(0,10)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
