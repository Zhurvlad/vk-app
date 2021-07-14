import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

const Card = ({children}) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default Card

Card.propTypes ={
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
}