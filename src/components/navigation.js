import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'


const Navigation = (props) => {

    const [menuStatus, setMenuStatus] = useState(false)

    return (
        <div className="navigation">
            <ul className="nav-ul wrapper">
                <li className="nav-li">
                    SO FUNKTIONIERTS
                </li>
                <li className="nav-li">
                    SONDERANGEBOTE
                </li>
                <li className="nav-li" onClick={() => setMenuStatus(!menuStatus)}>
                    <button className="nav-li nav-dropdown" id="menuItems">
                        <span>
                            <FontAwesomeIcon icon={faUser} className='faUser' />
                            MAIN MENU
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCaretDown} className='' />
                        </span>
                    </button>

                    {
                        menuStatus ? 

                            <ul className="nav-dropdown-menu">
                                <li className="nav-dropdown-item border-bottom">
                                    <Link to={``} className="nav-dropdown-anchor">
                                        My published jokes
                                    </Link>
                                </li>
                                <li className="nav-dropdown-item border-bottom">
                                    <Link to={``} className="nav-dropdown-anchor" href="#">
                                        My saved jokes
                                    </Link>
                                </li>
                                <li className="nav-dropdown-item border-bottom">
                                    <Link to={``} className="nav-dropdown-anchor" href="#">
                                        Account information
                                    </Link>
                                </li>
                                <li className="nav-dropdown-item">
                                    <Link to={``} className="nav-dropdown-anchor" href="#">
                                        Publish new joke
                                    </Link>
                                </li>
                            </ul>
                        :
                        null
                    }
                    
                </li>
            </ul>
        </div>
    )
}

export default Navigation;