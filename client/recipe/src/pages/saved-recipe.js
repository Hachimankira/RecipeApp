import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
  }),
}));


export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
    <div>
      <ul>
        {savedRecipes.map((recipe) => (
          // <li key={recipe._id}>
          //   <div>
          //     <h2>{recipe.name}</h2>
          //   </div>
          //   <p>{recipe.description}</p>
          //   <img src={recipe.imageUrl} alt={recipe.name} />
          //   <p>Cooking Time: {recipe.cookingTime} minutes</p>
          // </li>
          <Card sx={{ maxWidth: 500, marginBottom: "1rem", bgcolor: "#f7f7f7", boxShadow: "0 4px 8px rgba(0, 0, 0.5, 0.5)" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title={recipe.name}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="200"
              image={recipe.imageUrl}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {recipe.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cooking Time(min): {recipe.cookingTime}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Instructions:</Typography>
                <Typography paragraph>
                  {recipe.instruction}
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                  medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                  occasionally until lightly browned, 6 to 8 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </ul>
    </div>
  );
};