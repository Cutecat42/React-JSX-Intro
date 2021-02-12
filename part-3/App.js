const App = (props) => (
    (
        <div>
            <Person name="Cat" age="30" hobbies={["Coding", "Reading"]} />
            <Person name="Lilly" age="4" hobbies={["Sleeping", "Playing"]} />
            <Person name="MrPhantom" age="5" hobbies={["Sleeping", "Eating"]} />
        </div>
    )
);

ReactDOM.render(
    <App />, document.getElementById("root")
  );