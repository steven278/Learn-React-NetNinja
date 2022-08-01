const Home = () => {

    //handle click events
    const handleClick = (e) => {
        console.log('hello ninjas', e);
    }

    const hanldeClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => hanldeClickAgain('steven', e)}>Click me again</button>
        </div>
    );
}
export default Home;