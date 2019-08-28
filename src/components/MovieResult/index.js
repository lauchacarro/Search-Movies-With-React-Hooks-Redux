import React from "react";
import { Typography, Card, Grid, Button } from '@material-ui/core'
import style from "./style";
import { withRouter } from 'react-router-dom'


const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
    const classes = style()

    const handleSeeMovieClick = () => {
        history.push('/movie/' + imdbID)
    }

    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.titlesGrid}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color='primary' variant='contained' onClick={handleSeeMovieClick} >Ver más</Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default withRouter(MovieResult);