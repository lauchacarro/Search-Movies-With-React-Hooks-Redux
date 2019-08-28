import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import style from './style'
import {MovieIcon} from '../../icons'
export default ({history}) => {

    const [searchText, setSearchText] = useState('');

    const classes = style()

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleCleanTextClick = (e) => {
        setSearchText('')
    }

    const handleSearchTextClick = (e) => {
        history.push('/results?movieName='+searchText)
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid >
                        <Typography className={classes.title}>Bienvenido</Typography>
                    </Grid>
                    <Grid >
                        <MovieIcon className={classes.movieIcon}/>
                    </Grid>
                </Grid>
                <TextField value={searchText} placeholder="buscar..." onChange={handleSearchTextChange} className={classes.textFieldSearch} />
                <Grid className={classes.buttonContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick} >Limpiar</Button>
                    <Button variant="contained" color="primary" size="large" onClick={handleSearchTextClick} className={classes.searchButton}>Buscar</Button>
                </Grid>
            </Card>
        </Container>)
}