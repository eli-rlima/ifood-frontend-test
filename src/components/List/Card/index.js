// Global
import React, { memo } from 'react'
import PropTypes from 'prop-types';
// Stylesheets
import './index.scss';

const Card = ({ name, imageUrl, owner, tracks, index, external_urls }) => {
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
                <a href={external_urls.spotify} target={"blank"}>
                    <div className='card-playlist__description__name'>{name}</div>
                </a>
                <a href={owner.external_urls.spotify} target={"blank"}>
                    <div className='card-playlist__description__owner'>Criador: {owner.display_name}</div>
                </a>
                <div className='card-playlist__description__tracks'>Trilhas: {tracks}</div>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    owner: {
        display_name: PropTypes.string,
        external_urls: {
            spotify: PropTypes.string,
        },
    },
    description: PropTypes.string,
    tracks: PropTypes.number,
    index: PropTypes.number,
    external_urls: {
        spotify: PropTypes.string,
    },
};

export default memo(Card);