import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { teal } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Link from "next/link";


export default function FeedCard({ result }) {
  return (
    <>
      {result && (
        <Card sx={{ width: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                {result.author[0].toUpperCase()}
              </Avatar>
            }
            title={
              result.author.charAt(0).toUpperCase() + result.author.slice(1)
            }
            subheader={result.created_at.slice(0, 10)}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {result.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/post-detail?postID=${result.objectID}`}>
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
      )}
    </>
  );
}
