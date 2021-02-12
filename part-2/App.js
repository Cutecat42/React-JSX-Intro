const App = (props) => (
    (
        <div>
            <Tweet username="Cutecat42" name="Cat" date="2/12/21" message="This is my first Tweet!"/>
            <Tweet username="Zamira" name="Melody" date="2/12/21" message="Yo wazup??!!!"/>
            <Tweet username="LillyPuff" name="Lilly White" date="2/12/21" message="I'm a kitty cat"/>
        </div>
    )
);

ReactDOM.render(
    <App />, document.getElementById("root")
  );