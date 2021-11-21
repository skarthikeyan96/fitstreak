import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

import Navigation from "../components/navigation";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Home;
