import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CourseCard from './CourseCard'; // Make sure to adjust the import path
import { courseModel } from '../data/courseModel';
const userEmail = localStorage.getItem("userEmail");

const UserDashboard = () => {
    const [enrolledCourses, setEnrolledCourses] = useState(
      courseModel.filter((course) =>
        course.students.some((student) => student.email === userEmail)
      )
    );
  
    const handleCompleteCourse = (courseId) => {
      setEnrolledCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === courseId ? { ...course, completed: true } : course
        )
      );
    };
  
    return (
        <Box>
          <Typography variant="h4" gutterBottom>
            Enrolled Courses
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {enrolledCourses.length === 0 ? (
              <Typography variant="body1">No courses enrolled yet.</Typography>
            ) : (
              enrolledCourses.map((course) => (
                <div key={course.id} style={{ width: '28%', margin: '0 30px 0 0' }}>
                <CourseCard
                    course={course}
                    onCompleteClick={handleCompleteCourse}
                  />
                </div>
              ))
            )}
          </div>
        </Box>
      );
  };
  
  export default UserDashboard;
