import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { getAllJokes } from "./../store/actions/JokesAction";

const JokeDetails = (props) => {

    const { id, jokes } = props;

    const [joke, setJoke] = useState({})

    const displayJoke = () => {
            return (
                <div className="joke-card-parent">

                    <div className="joke-card">
                        <span>{joke.categories || 'UNCATEGORIZED'}</span>
                        <h2>{joke.categories || 'UNCATEGORIZED'}</h2>
                        <p>{joke.value}</p>
                    </div>

                    <div className="like-parent">

                        <div className="like-wrapper">
                            <div className="up-wrapper">
                                <button className='up' onClick={() => likeHandler()}>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </button>
                                <span>{joke.likes}</span>
                            </div>
                            <div className="down-wrapper">
                                <button className='down' onClick={() => disLikeHandler()}>
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                </button>
                                <span>{joke.dislikes}</span>
                            </div>
                        </div>

                        <div className="page-wrapper">
                            <button onClick={() => randomJokes()}>
                                <FontAwesomeIcon icon={faChevronLeft} className="arrows" />
                                <span className="prev">PREV JOKE</span>
                            </button>
                            <button className="next-button" onClick={() => randomJokes()}>
                                <span className="next">NEXT JOKE</span>
                                <FontAwesomeIcon icon={faChevronRight} className="arrows" />
                            </button>
                        </div>

                    </div>

                </div>
            )
    }

    const displayJokeStatus = () => {
        if (joke != null || joke != undefined) {
            if (joke.value) {
                return displayJoke();
            }
        }
    }

    const randomJokes = () => {
        let result = jokes[Math.floor(Math.random() * jokes.length)];
        setJoke(result)
    }

    const likeHandler = () => {
        setJoke({
            ...joke,
            likes: joke.likes + 1
        })
    }

    const disLikeHandler = () => {
        setJoke({
            ...joke,
            dislikes: joke.dislikes - 1
        })
    }

    const jokeDataFind = () => {
        let jokeData = jokes.find(item => item.id == id);
        setJoke(jokeData)
    }

    useEffect(() => {
        jokeDataFind()
    }, [jokes])

    useEffect(() => {
        displayJokeStatus();
    }, [joke])

    useEffect(() => {
        jokeDataFind()
    }, [id])

    useEffect(() => {
      props.getAllJokes();
    }, [])
    
    return (
        <div className="joke-details">

            <div className="back-arrow-wrapper">
                <div className="wrapper">
                    <Link to={`/`} className="back-anchor">
                        <FontAwesomeIcon icon={faChevronLeft} className='chevron' />
                    </Link>
                </div>
            </div>

            <div className="joke-wrapper">
                <div className="wrapper">

                    <div className="joke-parent">
                        
                        {displayJokeStatus()}

                        <div className="top-jokes">
                            
                            <div className="top-wrapper">
                                <h5>THE TOP 10 JOKES OF THIS WEEK</h5>
                                <ul>
                                    <li>Smoking Joke</li>
                                    <li>My Boss Joke</li>
                                    <li>Dirty Million Boss Joke</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

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
        getAllJokes: () => dispatch(
            getAllJokes()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeDetails)