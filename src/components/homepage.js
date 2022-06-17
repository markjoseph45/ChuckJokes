import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getAllJokes } from "./../store/actions/JokesAction";

import Navigation from "./navigation";
import Search from "./search";
import Categories from "./categories";
import CardJokes from "./card_jokes";
import Footer from "./footer";

const Homepage = (props) => {

    const initFilters = {
        category: 'ALL',
        count: 6
    }

    const [filters, setFilters] = useState(initFilters);

    useEffect(() => {
        props.getAllJokes();
    }, [])

    return(
        <div className="wrapper-fluid homepage" id="app">

            <Navigation />

            <Search />
            
            <Categories newCategoryData={(data) => setFilters(data)} />

            <CardJokes filterData={filters} />

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
        getAllJokes: () => dispatch(
            getAllJokes()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)