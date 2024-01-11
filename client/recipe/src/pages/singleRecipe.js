import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Divider, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const SingleRecipe = () => {
    const fixedHeight = 600;
    return (
        <div>
            <Card sx={{ maxWidth: 1200, marginBottom: "1rem", bgcolor: "#f7f7f7", boxShadow: "0 4px 8px rgba(0, 0, 0.5, 0.5)" }}>

                <CardMedia
                    component="img"
                    // height= {fixedHeight}
                    style={{ height: fixedHeight, width: "100%" }}
                    image="images/momo.jpeg"
                    alt="Paella dish"
                />
                <CardContent>
                    <CardHeader sx={{ textAlign: "center" }}
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //         R
                        //     </Avatar>
                        // }
                        title="Jhol Momo"
                        subheader="Cooking Time: 1 hours"
                    />
        
                    <div>
                        <Typography variant="body2" color="text.secondary">
                            Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine that is also popular in neighbouring Bhutan and India. Momos are usually served with a sauce known as achar influenced by the spices and herbs used within many South Asian cuisines.
                        </Typography>
                    </div>

                    <Grid container spacing={2} >
                        <Grid item xs={4}>
                            <Typography variant='h5'>Ingredient:</Typography>
                            <Typography paragraph>
                                4 cups all-purpose flour
                                <Divider />
                                4 cups all-purpose flour
                                <Divider />
                                4 cups all-purpose flour
                                <Divider />
                                4 cups all-purpose flour
                            </Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography variant='h5'>Instructions:</Typography>
                            <Typography paragraph>
                                Mix together the flour and 1 1/2 cups room temperature water in a bowl. Knead the dough well until it is medium-firm and flexible. Cover and let rest for 1 hour.
                                <Divider />
                                Mix together the flour and 1 1/2 cups room temperature water in a bowl. Knead the dough well until it is medium-firm and flexible. Cover and let rest for 1 hour.
                                <Divider />
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
