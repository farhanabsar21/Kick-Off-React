import React from 'react';
import "./InfoDetail.css";
import female from "../../Images/Gender/female.jpg";
import male from "../../Images/Gender/male.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFootballBall, faMapMarked, faTransgender } from '@fortawesome/free-solid-svg-icons';
import facebook from "../../Images/Social-icons/Facebook.png";
import twitter from "../../Images/Social-icons/Twitter.png";
import youtube from "../../Images/Social-icons/YouTube.png";


const InfoDetail = (props) => {
    const { strLeague, intFormedYear, strCountry, strSport, strGender, 
            strDescriptionEN } = props.info;
            
    const markedIcon = <FontAwesomeIcon icon={ faMapMarked } />;
    const flagIcon = <FontAwesomeIcon icon={ faFlag } />;
    const footballIcon = <FontAwesomeIcon icon={ faFootballBall } />;
    const genderIcon = <FontAwesomeIcon icon={ faTransgender } />;

    return (
        <div className="info-detail">
            <div className="info-details-container">
                <div className="detail-container">
                    <h2>League Name: {strLeague}</h2>
                    <p><span>{markedIcon}</span> Founded in: {intFormedYear}</p>
                    <p><span>{flagIcon}</span> Country: {strCountry}</p>
                    <p><span>{footballIcon}</span> Sports Type: {strSport}</p>
                    <p><span>{genderIcon}</span> Gender: {strGender}</p>
                </div>
                <div className="image-container">
                    {strGender === "Female" ? <img src={female} alt="female" /> : 
                        <img src={male} alt="male"/> }
                </div>
            </div>
            <div className="info-description">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="social-media">
                <img src={facebook} alt=""/>
                <img src={twitter} alt=""/>
                <img src={youtube} alt=""/>
            </div>
        </div>
    );
};

export default InfoDetail;