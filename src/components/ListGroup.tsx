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

    //Turn the array into a list
    return (
        <>
            <h1>Body Part</h1>
            {bodypart.length === 0 && <p>No body part selected</p>}
            <ul className="list-group">
                
                {bodypart.map((bodypart) => (<li key = {bodypart}>{bodypart}</li>))}  
            </ul>
        </>
     );
}
export default ListGroup;