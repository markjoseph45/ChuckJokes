import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import ArrowDown from "./../assets/assets_Homework_Front-End_01/path-copy-7.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const Categories = (props) => {

    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState(['#cfb995', '#ff5b5b', '#57e690', '#ff915b', '#ffbe5b', '#ffdf5b', '#57dbe6']
)

    const { jokes } = props;


    useEffect(() => {
        if(jokes.length){
            let filteredCategories = jokes.filter(item => {
                if (item.categories){
                    return item;
                }
            }).map( item => {
                return item.categories;
            });
            let categoryData = [...new Set(filteredCategories)]
            setCategories(categoryData)
        }
    }, [jokes])

    const categoryList = () => {
        return categories.map(item => (
            <button className="global-button" key={item}
                onClick={() => categoryHandler(item)}
                style={{ background: colors[Math.floor(Math.random() * colors.length)] }}>
                {item}
            </button>
        ))
    }
    
    const categoryHandler = (type) => {
        let catData = {
            category: type,
            count: 6
        }
        props.newCategoryData(catData)
    }

    return (
        <div className="categories">

            <div className="wrapper">

                <div className="categories-wrapper">

                    {
                        categoryList()
                    }

                    <button className="global-button"
                        style={{ background: colors[Math.floor(Math.random() * colors.length)] }}
                        onClick={() => categoryHandler('UNCATEGORIZED')}>
                        UNCATEGORIZED
                    </button>

                    <button className="global-button transparent-button"
                        onClick={() => categoryHandler('ALL')}>
                        <span>VIEW ALL</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories)