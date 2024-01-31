import { Box, Typography, Link,useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box bgcolor={colors.BrandGreen[500]} m="20px" mt="50px" mb="20px">
      <Typography>
        Copyright &copy; {new Date().getFullYear()}
        <Link color={colors.grey[100]} href="">
          {" "}
          course management{" "}
        </Link>
        All Rights Reserved.
      </Typography>
    </Box>
  );
};
export default Footer;
