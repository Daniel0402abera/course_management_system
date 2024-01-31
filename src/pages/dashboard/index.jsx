import { Box} from "@mui/material";

import Header from "../../components/Header";
import UserDashboard from "../../components/UserDashboard";

const Dashboard = () => {


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
        <Box>
          <UserDashboard />
        </Box>
    </Box>
  );
};

export default Dashboard;
