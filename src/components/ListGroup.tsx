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

    const bodyPartSelected = []
    //Turn the array into a list
    return (
        <>
            <h1>Body Part</h1>
            {bodyPartSelected.length === 0 && <p>No body part selected</p>}
            <ul className="list-group">
                {bodypart.map((bodypart) => (
                    <li className = "list-group-item" key = {bodypart}
                    onClick={() => console.log(bodypart)}>{bodypart}</li>
                ))}  
            </ul>
        </>
     );
}
export default ListGroup;