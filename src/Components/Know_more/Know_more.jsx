import React from "react";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

function Know_more(){
    let {kmid} = useParams();
    // useParams Hook: This hook, imported from react-router-dom, allows you to
    // retrieve dynamic parameters (values captured from the URL) that are
    // defined in your route paths
    console.log(kmid)
    let [data, setData] = useState([]);


    useEffect(() => {
        fetch(`http://api.github.com/users/Subhamk2004`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data)
            })

    }, []);

    return(
        <div className='p-4 bg-gray-400
        rounded-xl px-5 m-5 flex flex-col justify-center items-center

        '>
            <h1 className='text-3xl
            font-bold
            '>
                Wanna know more about me click the link below
            </h1>
            <a href='https://subhamk2004.github.io/Subham_Portfolio/#'
            className='font-semibold text-orange-800 text-xl'
            >
                Subham's Portfolio
            </a>
            <h2>
                Below is the data received from the id captured from url:
            </h2>
            <p>Github name :
                <span
                className='text-green-800 font-bold text-xl'
                >
                     {data.name}
                </span>
            </p>
            <img src={data.avatar_url} className='rounded-full
            w-40 m-5 shadow-xl shadow-black
            '/>

        </div>
        // we can do any operation based on the id received from the url
        // either call a user's data from database or call other pages etc
        // anything
    )
}
export default Know_more;