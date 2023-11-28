import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

                    <Typography variant="body2" color="text.secondary">
                        description
                    </Typography>
                    <Box sx={{ display: "flex" }} >
                        <CardContent>
                            <Typography variant='h5'>Ingredient:</Typography>
                            <Typography paragraph>
                                4 cups all-purpose flour
                                4 cups all-purpose flour
                                4 cups all-purpose flour
                                4 cups all-purpose flour
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography variant='h5'>Instructions:</Typography>
                            <Typography paragraph>
                                Mix together the flour and 1 1/2 cups room temperature water in a bowl. Knead the dough well until it is medium-firm and flexible. Cover and let rest for 1 hour.
                            </Typography>
                        </CardContent>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
