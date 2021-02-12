const Tweet = (props) => {
    const tweet = [props.username, props.name, props.date]
    return (
        <div>
            <ul>
                {tweet.map(t => <li>{t}</li>)}
            </ul>
            <p>
                {props.message}
            </p>
        </div>
    )
};