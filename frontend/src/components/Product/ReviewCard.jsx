import React from 'react';
import { Fragment } from 'react';
import {Rating} from '@material-ui/lab'
import defaultImage from '../../images/Profile.png'

const ReviewCard = ({review}) => {

    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5
    };

    return (
        <Fragment>
            <div className="reviewCard">
                <img src={defaultImage} alt="User" />
                <p>{ review.name }</p>
                <Rating { ...options } />
                <span>{ review.comment }</span>
            </div>
        </Fragment>
    )
};

export default ReviewCard;
