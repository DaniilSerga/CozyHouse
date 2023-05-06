import React, { useEffect, useState } from 'react';
import classes from './PaginationButton.module.css';

const PaginationButton = ({ type, ...props }) => {
    console.log(props);

    const getCharachter = (type) => {
        if (type === 'next') {
            return '>';
        } else if (type === 'previous') {
            return '<';
        } else if (type === 'first') {
            return '<<';
        } else if (type === 'last') {
            return '>>'
        }
    }

    return (
        <button>
            {getCharachter(type)}
        </button>
    )
}

export default PaginationButton;