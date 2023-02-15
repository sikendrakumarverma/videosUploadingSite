import axios from "axios";
import React, { useState, useEffect } from "react";
//import { useNavigate, Link } from "react-router-dom";
import ProductCard from "./ProductCard";


function GetAllVideosList() {

    let [data, setData] = useState([]);
    //let navigate = useNavigate();


    //console.log(data)

   

    async function getBooksData() {
        let result = await axios.get("http://localhost:8080/getVideos")
            .then((response) => {
                //console.log(response.data.data)
                setData(response.data.data)
                alert(`success : ${response.data.message}`)
            })
            .catch((error) => {
                console.log("error :", error.response.data.message)
                alert(`Error: ${error.response.data.message}`)
            })
        console.log(result)
        // setData(result)
    }

    useEffect(() => {
        // if (!localStorage.getItem('token')) {
        //     navigate("/login")
        // }
        getBooksData();

    }, [])

    return (
        <div >
            <h2 > All videos List</h2>
            <div className="product-wrapper">
                {data.map((item, index) => (
                    <ProductCard
                        key={item._id}
                        id={item._id}
                        name={`${item.title}`}
                        video={item.videoLink}
                    />
                ))}
            </div>

        </div>
    )
}
export default GetAllVideosList;