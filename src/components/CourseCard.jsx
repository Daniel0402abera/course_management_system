import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, LinearProgress } from '@mui/material';

const CourseCard = ({ course, onCompleteClick }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleCompleteClick = () => {
    console.log('Before setCompleted', isCompleted);
    setCompleted(prevCompleted => !prevCompleted);
    console.log('After setCompleted', isCompleted);
    onCompleteClick(course.id, !isCompleted);
  };

  return (
    <Card style={{ marginBottom: '20px', width: '300px' }}>
      <img src={course.thumbnail} alt={`Thumbnail for ${course.name}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <CardContent>
        <Typography variant="h5" component="div">{course.name}</Typography>
        <Typography variant="subtitle1">{`Instructor: ${course.instructor}`}</Typography>
        {/* <Typography variant="subtitle1">{`Due Date: ${course.dueDate}`}</Typography> */}
        <LinearProgress variant="determinate" value={course.progress} style={{ marginBottom: '10px' }} />
        <Button
          variant="contained"
          color={isCompleted ? "default" : "primary"}
          onClick={handleCompleteClick}
        >
          {isCompleted ? "Completed" : "Mark as Completed"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
