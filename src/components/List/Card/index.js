// Global
import React, { memo } from 'react'
import PropTypes from 'prop-types';
// Stylesheets
import './index.scss';

const Card = ({ name, imageUrl, owner, tracks, index, external_urls }) => {
    console.log(external_urls)
    return (
        <div className='card-playlist' key={index}>
            <a href={external_urls.spotify} target={"blank"}>
                <img
                    className='card-playlist__image'
                    alt='playlist`s description'
                    src={imageUrl}
                />
            </a>
            <div className='card-playlist__description'>
                <div className='card-playlist__description__name'>{name}</div>
                <div className='card-playlist__description__owner'>Criador: {owner}</div>
                <div className='card-playlist__description__tracks'>Trilhas: {tracks}</div>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
    tracks: PropTypes.number,
    index: PropTypes.number,
    external_urls: {
        spotify: PropTypes.string,
    },
};

export default memo(Card);