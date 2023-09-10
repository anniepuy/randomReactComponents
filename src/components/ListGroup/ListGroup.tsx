import { useState } from "react";
import styles from './ListGroup.module.css';

function ListGroup () {
    const bodypart = [
        'Shoulders',
        'Chest',
        'Back',
        'Biceps',
        'Triceps',
        'Hamstrings',
        'Quads',
        'Glutes',
        'Calves',
        'Abs'
    ];

    //State hook
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const bodyPartSelected = [];

    return (
        <>
            <h1>Body Part</h1>
            {bodyPartSelected.length === 0 && <p>No body part selected</p>}
            <ul className="list-group">
                {bodypart.map((bodypart, index) => (
                    <li 
                    className={ 
                        selectedIndex === index 
                        ? 'list-group-item active' 
                        : 'list-group-item'} 
                    key = {bodypart}
                    onClick={()=> {setSelectedIndex(index);}}
                    >
                        {bodypart}
                    </li>
                ))}  
            </ul>
        </>
     );
}
export default ListGroup;