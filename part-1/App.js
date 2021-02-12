const App = (props) => (
    (
        <div>
    <FirstComponent />
    <NamedComponent name="Cat"/>
    </div>
    )
);

ReactDOM.render(
    <App />, document.getElementById("root")
  );