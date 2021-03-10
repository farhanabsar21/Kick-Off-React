import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./League.css";
import { Link } from 'react-router-dom';

const League = (props) => {
    const btnIcon = <FontAwesomeIcon icon={faArrowRight} />
    const { idLeague, strLeague, strSport } = props.league;
    return (
        <div>
            <div className="league-content">
                <div className="img-container">
                    <img src={`Images/leagueLogo/${idLeague}.png`} alt="logo" />
                </div>
                <h3>{strLeague}</h3>
                <p>type of league: {strSport}</p>
                <Link to={`/league/${idLeague}`}><button>Explore {btnIcon}</button></Link>
            </div>
        </div>
    );
};

export default League;