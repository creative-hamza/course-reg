// import React from 'react';

import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Course = ({selectCourse,totalCost,totalRemaining}) => {
// console.log(selectCourse);
 
//  console.log(course);



    return (
        <div>
            <h2 className="text-blue">Credit Hour Remaining {totalRemaining}hr</h2>
          <h1>Course name</h1>
          {selectCourse.map(course =>(
            <ol key={course.id}>
                {course.title}
                </ol>
          ))}

          <h4>Total credit hour:{totalCost}</h4>

        </div>
    );
};

export default Course;