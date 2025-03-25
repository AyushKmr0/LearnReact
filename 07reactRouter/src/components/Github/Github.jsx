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
        <div className="w-full flex justify-center items-center flex-col">
            <div className="bg-gray-100 flex justify-center items-center flex-col p-8 my-2 rounded-lg max-w-lg">
                <h2 className="text-3xl text-gray-500 py-8">{data.login}</h2>
                <img
                    src={data.avatar_url}
                    alt="Git image"
                    className="rounded-full"
                />
                <h2 className="text-3xl text-gray-800 py-8">{data.name}</h2>
                <p className="pb-8 mx-8">{data.bio}</p>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/AyushKmr0");
    return response.json();
};
