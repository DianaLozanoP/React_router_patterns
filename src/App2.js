import { Routes, Route, Navigate } from 'react-router-dom';
import Colors from './Colors';
import ColorPage from './ColorPage';
import NewColor from './NewColor';
import { useState } from "react"
import { v4 as uuid } from "uuid"

function App2() {
    const [colors, setColors] = useState([{ id: uuid(), name: 'red', value: '#F33F10' }]);
    const addColor = ({ color_name, color }) => {
        setColors([...colors, { id: uuid(), name: color_name, value: color }])
    }
    return (
        <div className="App">
            <Routes>
                <Route path="/colors" element={<Colors colors={colors} />} />
                <Route path="/colors/new" element={<NewColor addColor={addColor} />} />
                <Route path="/colors/:name" element={<ColorPage colors={colors} />} />
                <Route path="*" element={<Navigate to="/colors" />} />
            </Routes>
        </div>
    );
}

export default App2;