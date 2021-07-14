import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import './Panel.scss'
import Card from "../Card/index";

import AddForm from "../AddForm/AddForm";
import classNames from 'classnames'



const Panel = ({cards, title}) => {
    return (
        <div className={classNames ('panel', {'panel--empty': !cards})}>
            <b>{title}</b>
            {cards && <div className="panel__items">
                {cards.map((card, index) => (<Card key={index}>
                        {card.text}
                    </Card>)
                )}

          </div>}
            <AddForm/>
        </div>
    )
}

export default Panel

Panel.propTypes ={
    text: PropTypes.string.isRequired,
}