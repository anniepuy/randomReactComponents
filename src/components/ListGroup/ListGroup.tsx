import { useState } from "react";
import styled from 'styled-components';

interface ListItemProps {
    active: boolean;
}
const List = styled.ul`
    list-style: none;
    padding: 10px;
`
const ListItem = styled.li<ListItemProps>`
    padding: 5px 0px;
    background:${props => props.active ? 'blue' : "yellow"}
`

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
    const [selectedIndex, setSelectedIndex] = useState(0)

    const bodyPartSelected = [];

    return (
        <>
            <h1>Body Part</h1>
            {bodyPartSelected.length === 0 && <p>No body part selected</p>}
            <List>
                {bodypart.map((bodypart, index) => (
                    <ListItem
                        active = {index === selectedIndex}
                        key = {bodypart}
                        onClick={()=> {setSelectedIndex(index);}}
                    >
                        {bodypart}
                    </ListItem>
                ))}  
            </List>
        </>
     );
}
export default ListGroup;