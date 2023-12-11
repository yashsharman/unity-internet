import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function FeedCard({ result }) {
  return (
    <>
      {result && (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body1" color="text.secondary">
              {result.title}
              {/* Comments: {result.num_comments} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author: {result.author}
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
