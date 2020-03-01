import React from 'react'
import Nav from '../../components/Common/Header'


export default ({children}) => {

    console.log('render Main Admin')

    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

