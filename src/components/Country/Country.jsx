import React, { useState, useEffect } from "react";
import { Container, FormControl, InputLabel, Select } from "@material-ui/core";

import { fetchCountries } from "../../services/apiService";

const Country = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      setFetchedCountries(await fetchCountries());
    };

    console.log(getCountries());

    getCountries();
  }, [setFetchedCountries]);

  return (
    <Container maxWidth="md">
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-country-native-simple" focused={true}>
          Country
        </InputLabel>
        <Select
          native
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
          label="Select Country"
          inputProps={{
            name: "country",
            id: "outlined-country-native-simple",
          }}
        >
          <option aria-label="None" value=""></option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default Country;
