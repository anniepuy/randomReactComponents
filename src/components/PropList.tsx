import { useState } from "react";

// {items: [], heading: string}
interface PropListProps {
    items: string[];
    heading: string;
}

function PropList (props: PropListProps) {
    

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
export default PropList;