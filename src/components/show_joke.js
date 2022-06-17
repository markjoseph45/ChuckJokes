import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from "./navigation";
import Search from "./search";
import Footer from "./footer";
import JokeDetails from "./../components/joke_details";

const ShowJoke = (props) => {

    const { id } = useParams();

    return (
        <div className="show-joke">

            <Navigation />

            <Search />

            <JokeDetails id={id} />

            <Footer />

        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        jokes: state.jokes.jokes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getAllJokes: () => dispatch(
        //     getAllJokes()
        // )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowJoke)