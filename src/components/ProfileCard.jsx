import "./ProfileCard.scss";
import jake from "../assets/images/Jake.jpg";
import ProfileResult from "./ProfileResult";

function ProfileCard(props) {
    return (
        <div className="profile-card">
            <div className="profile-card__info">
                <div className="profile-card__avatar">
                    <img src={jake} alt="Jake Appleseed" />
                    <div className="profile-card__indicator"></div>
                </div>

                <div className="profile-card__fullname">Jake Applessed</div>
                <div className="profile-card__location">London, UK</div>
            </div>
            <div className="profile-card__results">
                <ProfileResult category="Working Hours" data="14 hours" />
                <ProfileResult category="Ammout Total" data="$ 6,269" />
                <ProfileResult category="Overdue" data="$ 829" />
                <ProfileResult category="% overall work" data="48%" />
            </div>
            <div className="profile-card__invoice">Send invoice</div>
        </div>
    );
}

export default ProfileCard;
