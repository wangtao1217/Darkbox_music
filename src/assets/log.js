import React, { Children } from "react";

const Logstate = React.createContext(  )

export default props => {
    const [ state, setState ] = React.useState(false)
    return <Logstate value={state}>
        {Children}
    </Logstate>
}