import CharCard from '../components/CharCard'
import React from 'react'

export default function TeamCon(props) {

    const renderChars = () => {
        return props.team.map( (char, index) => <CharCard char={char} key={index}/>)
    }

    return (
        <>
            <div>
                <h3>My Team</h3>
                {renderChars()}
            </div>
        </>
    )
}