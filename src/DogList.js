import { Link } from "react-router-dom"
import "./App.css"

const DogList = ({ dogs }) => {
    console.log(dogs.dogs[0])
    return (
        <div>
            <h1>Welcome to the dogs page</h1>
            <h2>Check out each dog by clicking on their name:</h2>
            {dogs.dogs.map((dog) => (
                <Link className="link-dog" to={`/dogs/${dog.src}`}>{dog.name}</Link>
            ))}
        </div>
    )
}

export default DogList;