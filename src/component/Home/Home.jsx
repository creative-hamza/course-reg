// import React from 'react';
import { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Home.css";
import { data } from "autoprefixer";

const Home = () => {
    const [allcourse,setAllcourse] = useState([]);
    const [selectCourse,setSelectcourse]= useState([]);
    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data=>setAllcourse(data));
    },[]);
    const handleSelector = (course)=>{
         setSelectcourse([...selectCourse,course]);
    }
    // console.log(selectCourse);
    return (
        <div className="container">
            <div className="home-container">
                <div className="card-container">
               
                
                    {
                        allcourse.map(course=>(
                            <div key={course.id} className="card">
                            <div className="card-img">
                                <img className="photo" src={course.image} alt="" />
                            </div>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                            <div className="info">
                                <p>{`$Price: ${course.price} `}</p>
                                <p>{`Credit:${course.credit}hr `}</p>
                            </div>
                            <button onClick={()=>handleSelector(course)} className="card-btn">Select</button>

                    </div>
                        ))
                    }
                
               
             
             </div>
             <div className="coursee">
                    <h1 className="">this is course</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;