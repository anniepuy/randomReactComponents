import { useState } from "react";

// {items: [], heading: string}
interface Props {
    items: string[];
    heading: string;
    //(item: string) => void
    //on type of event
    onSelectItem: (item: string) => void;
}

function PropList ({items, heading, onSelectItem}:Props) {
    //State hook
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item,index) => (
                    <li 
                    className={ 
                        selectedIndex === index 
                        ? 'list-group-item active' 
                        : 'list-group-item'} 
                    key = {item}
                    onClick={()=> {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    }}
                    >
                        {item}
                    </li>
                ))}  
            </ul>
        </>
     );
}
export default PropList;