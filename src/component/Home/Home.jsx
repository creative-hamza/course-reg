// import React from 'react';
import { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Home.css";
import { data } from "autoprefixer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [allcourse,setAllcourse] = useState([]);
    const [selectCourse,setSelectcourse]= useState([]);
    const [totalCost,setTotalcost]= useState(0);
    const [totalRemaining,setTotalRemaing]= useState(0);
    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data=>setAllcourse(data));
    },[]);
    const handleSelector = (course)=>{
        const isExist = selectCourse.find(item => item.id == course.id);
        let count =course.credit;
        if(isExist){
            toast("The course is selected");

        }
        else{

            selectCourse.forEach((item)=>{
                count= count+ item.credit;
            });

         setSelectcourse([...selectCourse,course]);
         let totalremaing = 20-count;
         if(totalremaing>=0){
            setTotalRemaing(totalremaing);
        }
        else{
            toast("credit limit 20");
        }
        setTotalcost(count);
        }
    }
    // let totalremaing = 20-count;
    
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
                            <button onClick={()=>handleSelector(course)} className="card-btn mb-4">Select</button>
                            <ToastContainer />

                    </div>
                        ))
                    }
                
               
             
             </div>
             <div className="coursee">
                    {/* <h1 className="">this is course</h1> */}
                    <Course selectCourse={selectCourse} totalCost={totalCost} totalRemaining={totalRemaining}></Course>
                </div>
            </div>
        </div>
    );
};

export default Home;