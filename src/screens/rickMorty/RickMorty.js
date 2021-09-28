import React, { Component } from "react";
import { Typography, Card, CardContent, Button } from "@material-ui/core";

export class RickMorty extends Component {

    constructor(props) {
        super(props);

        this.number = 0;

        this.state = {
            character: {
                name: '',
                image: '',
                gender: '',
                species: '',
                status: '',
            }
        }
    };

    fetchEpisode() {

        fetch("https://rickandmortyapi.com/api/character",
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(result => {

                const data = result.results;
                this.setState({
                    character: {
                        name: data[this.number].name,
                        image: data[this.number].image,
                        gender: data[this.number].gender,
                        species: data[this.number].species,
                        status: data[this.number].status
                    }
                })
            })

    }

    ChangeCharacterHandler() {
        this.number++;
        if (this.number < 20) {
            this.fetchEpisode();
        } else {
            this.number = 0;
            this.fetchEpisode();
        }
    }

    componentDidMount() {
        this.fetchEpisode();
    }

    render() {

        return (
            <Card>
                <CardContent>
                    <img src={this.state.character.image}
                        title={this.state.character.name} />
                    <Typography gutterBottom variant="h4" component="h1">{this.state.character.name}</Typography>
                    <p>Gender: {this.state.character.gender}</p>
                    <p>Species: {this.state.character.species}</p>
                    <p>Status: {this.state.character.status}</p>
                    <Button variant="contained" color="secondary" onClick={this.ChangeCharacterHandler.bind(this)}>Next</Button>
                </CardContent>
            </Card>
        )
    }
}
