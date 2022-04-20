function Person(props) {
    return (
        <div className="graph__person">
            <img src={props.src} alt="avatar" />
        </div>
    );
}

export default Person;
