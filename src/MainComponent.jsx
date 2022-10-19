import React, {useState} from "react";
import UserBadge from "./UserBadge";
import UserRepos from "./UserRepos";

const MainComponent = () => {
    const [username, setUserName] = useState(undefined);
    const [displayBadge, setDisplayBadge] = useState(false);
    const [displayRepos, setDisplayRepos] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setUserName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setDisplayBadge(true);
    }
    const handleDisplayRepos = () => {
        setDisplayRepos(!displayRepos)
    }
    return (
        <>
            <div className='header'>
                <h1>GIT-INFO</h1>
                <form onSubmit={handleSubmit}>
                    <input className={"searchInput"} placeholder="Search..." type="text" name="username" value={username} onChange={handleChange}/>
                    <input type="submit" name="submit" value="Search" onClick={handleSubmit}/>
                </form>
            </div>
            <div className="badgeRow">
                <div className="badgeColumn">
                    {displayBadge && <UserBadge username={username} handleButtonClick={handleDisplayRepos} displayRepos={displayRepos}/>}
                </div>
            </div>
            <div className="reposRow">
                {displayRepos && <UserRepos username={username}/>}
            </div>
        </>

    )
}

export default MainComponent;
