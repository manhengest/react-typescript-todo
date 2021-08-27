import React from "react";
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FunctionComponent = () => {
    const history = useHistory()

    return (
        <>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores cupiditate, deleniti
                eius eligendi hic pariatur possimus repudiandae ullam voluptatum!</p>
            <button className="btn" onClick={() => history.push('/')}>Go back</button>
        </>
    )
}
