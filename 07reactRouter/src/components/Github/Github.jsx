import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AyushKmr0')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
       return (
        <>
            <div className="flex justify-center items-center gap-10 p-10">
                <div className="w-sm border-4 border-orange-700 rounded-full p-2 shadow-sm shadow-orange-700">
                    <img
                        src={data.avatar_url}
                        alt="avatar_url"
                        className="m-auto rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 pl-3 ">
                    <h3 className="text-4xl font-bold tracking-wider">
                        {data.name}
                    </h3>
                    <span className="text-gray-400 mb-6 tracking-wider">
                        {"@" + data.login}
                    </span>
                    <p>{data.bio}</p>
                </div>
            </div>
        </>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/AyushKmr0");
    return response.json();
};
