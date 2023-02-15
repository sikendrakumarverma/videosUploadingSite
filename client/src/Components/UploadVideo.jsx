// import { Header } from "./Header";
import axios from 'axios';
import { Button } from '@mui/material';
//import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";


function Upload() {

    //let navigate = useNavigate();

    useEffect(() => {
        //    if (!localStorage.getItem('token')) {
        //         navigate("/login")
        //    }
    }, [])

    const [file, setFile] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    let UploadVideoUrl = "http://localhost:8080/upload"

    function Upload() {

        let formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);

        axios.post(UploadVideoUrl, formData)
            .then((response) => {
                console.log("response", response)
                alert(`success : ${response.data.message}`)
                if(!response.data.status){
                    console.log(response.data.data);
                }
            })
            .catch((error) => {
                console.log("error :", error.response.data.message)
                alert(`Error: ${error.response.data.message}`)
            })
    }

    return (

        <div >
            {/* <Header /> */}
            <h3> Upload video</h3>
            <div className="uploadDiv">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" placeholder="bookCover" />
                <br /> <br />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="title" />
                <br /> <br />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="category" />
                <br /> <br />
                <Button onClick={Upload} variant="contained" sx={{ bgcolor: 'green' }}> Upload Video</Button>

            </div>
        </div>
    )
}

export default Upload;