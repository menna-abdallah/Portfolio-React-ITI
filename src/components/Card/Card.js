import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import project from '../../assets/project.png'

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={project}
        title="project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          project
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corporis nesciunt nostrum placeat vel nulla rerum animi libero
            sunt dolores, voluptates ex dolore praesentium alias dignissimos.
            Quidem beatae ut fugit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
