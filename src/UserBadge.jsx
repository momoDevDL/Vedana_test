import React, {useEffect, useState} from "react";

const UserBadge = ({username, displayRepos, handleButtonClick}) => {
    const [data, setData] = useState({})

    useEffect(()=>{
        if(username){
            fetch(`https://api.github.com/users/${username}`,{
                method:'GET'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setData(data)
                })
            // Catch Error
        }
    },[username]);

    return (
            <div className='badgeCard'>
                <img src={data?.["avatar_url"]} alt="Avatar" style={{width:'100%'}}/>
                    <div className="container">
                        <h3>{data?.name}</h3>
                        <p>{`followers: ${data?.followers}`}</p>
                        <p>{`following: ${data?.following}`}</p>
                        <button className="reposButton" onClick={handleButtonClick}>{displayRepos ? "Hide" : "Display"} Repositories</button>
                    </div>
            </div>
    )
}

export default UserBadge;
