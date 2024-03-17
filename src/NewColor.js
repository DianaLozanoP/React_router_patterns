import { useState } from 'react';
import { SketchPicker } from 'react-color';
import "./App.css"
import { useNavigate } from "react-router-dom"

const NewColor = ({ addColor }) => {
    const navigate = useNavigate();
    const [color, setColor] = useState("lightblue");
    const INITIAL_STATE = {
        color_name: "",
        color: color
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleColorChange = (updatedColor) => {
        setColor(updatedColor.hex);
        setFormData({
            ...formData,
            color: updatedColor.hex
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ ...formData })
        setFormData(INITIAL_STATE)
        navigate("/colors")
    }
    return (
        <div>
            <h1>Color Selector Example</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color_name">Color name</label>
                <input
                    name="color_name"
                    value={formData.color_name}
                    onChange={handleChange}
                />
                <SketchPicker
                    className='picker'
                    color={color}
                    onChange={handleColorChange}
                />
                <button>Add this color</button>
            </form>
        </div>
    );
}

export default NewColor;