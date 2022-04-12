import React from 'react'

//SimpleRouter 
import SimpleRouter from '../../router/simple-router'

const Simple = ({ path }) => {
    return (
        <>
          <div className="wrapper">
            <SimpleRouter path={path} />
          </div>
        </>
    )
}

export default Simple
