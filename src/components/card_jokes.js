import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBolt, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const CardJokes = (props) => {

    const { jokes, filterData } = props;

    const [filters, setFilters] = useState(filterData);
    const [cardJokes, setCardJokes] = useState([]);

    const jokeHandler = () => {
        if (jokes.length) {
            let jokesArray = jokes.filter(item => {

                switch (filters.category) {
                    case 'UNCATEGORIZED':
                        if (!item.categories.length) {
                            return item
                        }
                        break;
                    case 'ALL':
                        return item;
                    default:
                        if (filters.category === item.categories) {
                            return item
                        }
                        break;
                }

            })

            let jokeData = jokesArray.slice(0, filters.count)
            setCardJokes(jokeData)

        }
    }

    const viewMore = () => {
        setFilters({
            ...filters,
            count: filters.count + 6
        });
    }

    const jokeList = () => {
        const rows = [...Array(Math.ceil(cardJokes.length / 4))];

        const jokeRows = rows.map((row, idx) => cardJokes.slice(idx * 3, idx * 3 + 3));
        
        const content = jokeRows.map((row, index) => (
            <div className="card-wrapper" key={index}>

                {row.map((item, idx) => (
                    <div className="card" key={idx}>
                        <div>
                            <h4>
                                <FontAwesomeIcon icon={faBolt} className="bolt-icon text-gold" />
                                { (item.categories) || 'UNCATEGORIZED' }
                            </h4>
                            <p className="card-details">
                                {item.value}
                            </p>
                        </div>
                        <div className="card-footer">
                            <Link to={`/${item.id}`} className="card-anchor">
                                <span>SEE STATS</span>
                                <FontAwesomeIcon icon={faArrowRight} className='arrow-down' />
                            </Link>
                        </div>
                    </div>
                ))}

            </div>)
        );
        return (
            <div>
                {content}
            </div>
        );
    }


    useEffect(() => {
        jokeHandler()
    }, [jokes])

    useEffect(() => {
        jokeHandler();
    }, [filters])

    useEffect(() => {
        setFilters(filterData);
    }, [filterData])


    return (
        <div className="card-jokes">
            <div className="wrapper">

                <hr />

                <div className="card-category">
                    <span>{filters.category}</span>
                </div>
                
                {
                    jokeList()
                }

                <div className="card-viewmore">
                    <button className="global-button transparent-button"
                        onClick={() => viewMore()}>
                        <span>VIEW MORE</span>
                        <FontAwesomeIcon icon={faArrowDown} className='arrow-down' />
                    </button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardJokes)