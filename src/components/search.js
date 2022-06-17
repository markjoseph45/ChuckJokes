import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBolt } from '@fortawesome/free-solid-svg-icons'
import Bitmap from "./../assets/assets_Homework_Front-End_01/bitmap.png";
import { Link } from "react-router-dom";


const Search = (props) => {

    const { jokes } = props;

    const [searchResult, setSearchResult] = useState([]);
    const [search, setSearch] = useState('');


    const jokesFiltered = () => {
        let result = searchResult.map((item, index) => (
            <li className="nav-dropdown-item border-bottom" key={index}>
                <Link to={`/${item.id}`} className="nav-dropdown-anchor">
                    <FontAwesomeIcon icon={faBolt} className="bolt-icon text-gold" />
                    <span>{item.categories || 'UNCATEGORIZED'}</span>: {item.value.substring(0, 25) + '...'}
                </Link>
            </li>
        ))
        return (
            <ul className="nav-dropdown-menu">
                {result}
            </ul>
        )
    }


    const displaySearch = () => {
        if (searchResult.length){
            return jokesFiltered()
        }
    }

    useEffect(() => {
        if(search){
            let jokesArray = jokes.filter((item, index) => {
                if (item.value.includes(search)) {
                    return item;
                }
            });
            console.log({ jokesArray })
            setSearchResult(jokesArray)
        }else{
            setSearchResult([])
        }
    }, [search])
    

    return (
        <div className="wrapper-fluid search">
            <div className="search-wrapper"
                style={{ backgroundImage: `url(${Bitmap})` }}>
                <h1 className="title">The Joke Bible</h1>
                <p className="description">Daily Laughs for you and yours</p>

                <div className="search-input">
                    <input type="text" className="nice-form"
                    placeholder="How can we make you laugh today?"
                        onChange={(e) => setSearch(e.target.value)} />
                    <span className="search-icon-wrapper">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    
                    {
                        displaySearch()
                    }

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

export default connect(mapStateToProps, mapDispatchToProps)(Search)