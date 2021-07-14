
import React, {Fragment} from "react";
import Panel from "../Panel";



export const Panels = ({items}) => {
    return (
        <Fragment>
            {items.map ((items, index) => (
                <Panel cards={items}/>
            ))}

        </Fragment>

    )
}

export default Panels