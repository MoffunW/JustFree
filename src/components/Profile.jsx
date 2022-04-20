import './Profile.scss'
import bell from '../assets/icons/Bell.svg'
import down from '../assets/icons/Down.svg'

function Profile() {
    return (
        <div className="profile">
            <div className="profile__notification">
                <div className="profile__counter">8</div>
                <img src={bell} alt="Notifications" className="profile__bell" />
            </div>
            <div className="profile__user">
                <div className="profile__username">Filip J</div>
                <img src={down} className="profile__arrow-down" alt='arrow down'></img>
                <div className="profile__avatar">
                    <div className="profile__letter">F</div>
                </div>
            </div>
        </div>
    )
}
    
export default Profile