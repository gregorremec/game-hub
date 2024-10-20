import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Whoops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Invalid Route: this page does not exist"
            : "Application Error: unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
