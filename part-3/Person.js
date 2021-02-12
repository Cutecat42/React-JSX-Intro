const Person = (props) => {
    return (
        <div>
        <p>
            Learn some more info about this person (or cat):
        </p>
        <ul>
            <li>{props.name.slice(0,6)}</li>
            <li>{props.age}</li>
        </ul>
            {
               <p> {props.age > 17 ? "Please go vote!" : "You must be 18 to vote."} </p>
            }
        <ul>
            {props.hobbies.map(h => <li>{h}</li>)}
        </ul>
        </div>
    )
};