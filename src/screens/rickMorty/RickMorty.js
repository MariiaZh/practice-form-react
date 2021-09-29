import React, { Component } from "react";
import { Typography, Card, CardContent, Button } from "@material-ui/core";
import FetchRequest from "../../helpers/validation/api/FetchRequest";

export class RickMorty extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            isLoaded: false,
            data: [],
        };
    }

    fetchEpisode() {

        FetchRequest("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(result => {
                result.results;
                this.setState({
                    data: result.results,
                    isLoaded: true
                });
            })
    }

    changeCharacterHandler = () => {
        if (this.state.number <= 18) {
            this.setState({
                number: this.state.number + 1,
            })
        } else {
            this.setState({
                number: 0,
            })
        }
    }

    componentDidMount() {
        this.fetchEpisode();
    }

    render() {
        if (!this.state.isLoaded) {
            return <p>Loading...</p>
        }
        return (
            <Card>
                <CardContent>
                    <img src={this.state.data[this.state.number].image}
                        title={this.state.data[this.state.number].name} />
                    <Typography gutterBottom variant="h4" component="h1">{this.state.data[this.state.number].name}</Typography>
                    <p>Gender: {this.state.data[this.state.number].gender}</p>
                    <p>Species: {this.state.data[this.state.number].species}</p>
                    <p>Status: {this.state.data[this.state.number].status}</p>
                    <Button variant="contained" color="secondary" onClick={this.changeCharacterHandler}>Next</Button>
                </CardContent>
            </Card>
        )
    }
}
