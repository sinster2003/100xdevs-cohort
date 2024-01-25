import Info from "./templates/Info";

const Profile = ({imgUrl, name, age, place}) => {
    return(
        <div style={{
            width:"400px"
        }}>
            <div className="profile-background" style={{
                backgroundColor: "#38B2AC",
                height: "120px",
                position: "relative"
            }}>
                <div style={{
                    height: "5rem",
                    width: "5rem",
                    position: "absolute",
                    bottom: "-30px",
                    left: "50%",
                    translate: "-50%"
                }}>
                    <img src={imgUrl} alt="Profile-picture" height="100%" width="100%" 
                    style={{
                        borderRadius: "50%"
                    }}/>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "40px",
                marginBottom: "20px",
                gap:"5px"
            }}>
                <div style={{
                    display: "flex",
                    gap: "5px"
                }}>
                    <p>{name}</p>
                    <p>{age}</p>
                </div>
                <p>{place}</p>
            </div>
            <hr/>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px"
            }}>
                <Info count="80K" info="followers" />
                <Info count="803K" info="likes" />
                <Info count="1.4K" info="Photos" />
            </div>
        </div>
    );
}

export default Profile;