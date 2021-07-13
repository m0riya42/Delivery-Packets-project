import React from 'react'
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Avatar } from '@material-ui/core';




const useStyles = makeStyles({
    cardRoot: {
        maxWidth: 345,
        "border-radius": "30px"
    },
    cardMedia: {
        height: 275,
    },
    cardFooter: {
        "justify-content": "center"
    },
    cardAvatar: {
        height: '150px', width: '150px', " margin-left": "28%", "margin-top": "6%"
    }
});
const UserCard = ({ user }) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.cardRoot} >
                {/* className={classes.root} */}
                <CardActionArea>
                    <Avatar src="assets/images/coolAvatar.jpg" className={classes.cardAvatar} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            {user.fullName}
                        </Typography>
                        <Divider variant="middle" />
                        <Typography variant="body2" color="textSecondary" component="p" align="center">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardFooter} >
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>


    )

}


export default UserCard