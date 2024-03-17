import { useParams } from "react-router-dom";
import uuid from 'react-uuid';

const DogDetails = ({ dogs }) => {
    const params = useParams();
    const Dog = dogs.dogs.filter(dog => dog.src === params.name);
    console.log(Dog)
    return (
        <div>
            <h2>{Dog[0].name}</h2>
            <h4>Age: {Dog[0].age}</h4>
            <h4>Facts:</h4>
            <ul>
                {Dog[0].facts.map((fact) => (
                    <li key={uuid()}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails;