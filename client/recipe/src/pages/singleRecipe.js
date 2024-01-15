import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Divider, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const SingleRecipe = ({ match }) => {
    const fixedHeight = 600;
    const [recipe, setRecipe] = useState({});
    const [recipeId, setRecipeId] = useState('65a4bb2dbe334309fdf79864');
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/recipes/${id}`);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [id]);
    return (
        <div>
            <Card sx={{ maxWidth: 1200, marginBottom: "1rem", bgcolor: "#f7f7f7", boxShadow: "0 4px 8px rgba(0, 0, 0.5, 0.5)" }}>
                <CardMedia
                    component="img"
                    // height= {fixedHeight}
                    style={{ height: fixedHeight, width: "100%" }}
                    image={recipe.imageUrl}
                    alt="Paella dish"
                />
                <CardContent>
                    <CardHeader sx={{ textAlign: "center" }}
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //         R
                        //     </Avatar>
                        // }
                        title={recipe.name}
                        subheader={`Cooking Time: ${recipe.cookingTime}`}
                    />

                    <div>
                        <Typography variant="body2" color="text.secondary">
                            {recipe.description}
                        </Typography>
                    </div>

                    <Grid container spacing={2} >
                        <Grid item xs={4}>
                            <Typography variant='h5'>Ingredient:</Typography>
                            <Typography paragraph>
                                {recipe.ingredients}                                <Divider />
                            </Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography variant='h5'>Instructions:</Typography>
                            <Typography paragraph>
                                {recipe.instructions}
                                <Divider />
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
