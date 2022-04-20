function ProfileResult(props) {
    return (
        <div className="profile-card__result">
            <div className="profile-card__category">{props.category}</div>
            <div className="profile-card__data">{props.data}</div>
        </div>
    );
}

export default ProfileResult;
