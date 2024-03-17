import { useState } from "react"
import { Link } from "react-router-dom"

const Colors = ({ colors }) => {
    return (
        <>
            <div>
                <h2>Welcome to the color factory.</h2>
                <Link to="/colors/new">Add a color</Link>
            </div>
            <div className="color_link">
                <h4>Please select a color.</h4>
                {colors.map((color) => (
                    <Link to={`/colors/${color.name}`}> {color.name}</Link>
                ))}
            </div>
        </>
    )
}

export default Colors;