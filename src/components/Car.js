import React from 'react'
import cars from '../cars.json'
import {useParams} from "react-router";
import {makeStyles} from "@material-ui/core";
import {Container, Paper, Chip} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(20),
            width: theme.spacing(75),
            height: theme.spacing(40),
        },
    },
}));
const Car = (props) => {
    const paperContainer = useStyles();
    let carid = useParams()
    console.log(carid.id)
    let result = cars.find(car => car.id === parseInt(carid.id))
    console.log(result)
    return (
        <Container className={paperContainer.root}>
            <Paper elevation={2}>
                <Container m={45}>
                    <h1>{result.Name}</h1>
                    <Chip size="medium" label={`id: ${result.id}`} />
                    <Chip size="medium" label={`id: ${result.Name}`} />
                    <Chip size="medium" label={`id: ${result.Miles_per_Gallon}`} />
                    <Chip size="medium" label={`id: ${result.Cylinders}`} />
                    <Chip size="medium" label={`id: ${result.Displacement}`} />
                    <Chip size="medium" label={`id: ${result.Horsepower}`} />
                    <Chip size="medium" label={`id: ${result.Weight_in_lbs}`} />
                    <Chip size="medium" label={`id: ${result.Acceleration}`} />
                    <Chip size="medium" label={`id: ${result.Year}`} />
                    <Chip size="medium" label={`id: ${result.Origin}`} />
                </Container>
            </Paper>
        </Container>
    )
}

export default Car