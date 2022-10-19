import React, {useEffect, useState} from "react";

const UserRepos = ({username}) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        if(username){
            fetch(`https://api.github.com/users/${username}/repos`,{
                method:'GET'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setData(data)
                })
            // Catch error
        }
    },[username]);

    return(
        <>
            { data !== [] && data?.map(repo => (
                    <div className={"reposColumn"}>
                        <div className={"reposCard"}>
                            <h3>{repo.name}</h3>
                            <div className="container">
                                <p>{repo?.description}</p>
                                <p> URL : <a href={repo['html_url']}>{repo['html_url']}</a></p>
                                <div className="left">
                                    <p>Size : <span className="reposValue">{repo?.size}</span></p>
                                    <p>Forks : <span className="reposValue">{repo?.forks}</span></p>
                                </div>
                               <div className="right">
                                   <p>Open issues : <span className="reposValue">{repo['open_issues']}</span></p>
                                   <p>Stars count : <span className="reposValue">{repo['stargazers_count']}</span></p>
                               </div>

                            </div>
                        </div>
                    </div>
                )
            )
            }
        </>

    )
}

export default UserRepos;
