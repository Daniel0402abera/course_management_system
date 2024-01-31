import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { courseModel } from "../../data/courseModel";
import Header from "../../components/Header";

const Courses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCellClick = (course) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Course Name",
      flex: 2,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleCellClick(params.row)}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "instructor",
      headerName: "Instructor",
      flex: 1,
    },
    { field: "location", headerName: "Location" },
    {
      field: "duration",
      headerName: "Duration",
      flex: 1,
    },
    {
      field: "enrollmentStatus",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "schedule",
      headerName: "Schedule",
      flex: 2,
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header title="COURSES" subtitle="List of Courses for Enrollment" />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
              cursor: "pointer",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={courseModel}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleClose}>
        {/* <DialogTitle>{selectedCourse && selectedCourse.name}</DialogTitle> */}
        <DialogContent>
          {selectedCourse && (
            <div>
              <h2>{selectedCourse.name}</h2>
              <p>{selectedCourse.instructor}</p>
              <p>{selectedCourse.description}</p>
              <p>{selectedCourse.enrollmentStatus}</p>
              <p>{selectedCourse.duration}</p>
              <p>{selectedCourse.schedule}</p>
              <p>{selectedCourse.location}</p>
              <h3>Prerequisites:</h3>
              <ul>
                {selectedCourse.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>{" "}
              <h3>Syllabus:</h3>
              <ul>
                {selectedCourse.syllabus.map((week) => (
                  <li key={week.week}>
                    Week {week.week}: {week.topic} - {week.content}
                  </li>
                ))}
              </ul>{" "}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="info">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Courses;
