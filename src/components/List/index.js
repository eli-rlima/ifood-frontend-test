// Global
import React, { memo } from 'react';
import PropTypes from 'prop-types';
// Components
import Card from './Card';
// Stylesheets
import './index.scss';

const List = ({ data }) => {

    return(
        <div className='list'>
            {data.map((item, index) => {
                return(
                    <Card 
                        key={index}
                        name={item.name} 
                        imageUrl={item.images[0].url}
                        owner={item.owner}
                        tracks={item.tracks.total}
                        external_urls={item.external_urls}
                    />
                )
            })}
        </div>
    );
}

List.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
}

export default memo(List);