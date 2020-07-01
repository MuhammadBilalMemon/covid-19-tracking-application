import React, { useContext } from "react";
import { Container, FormControl, InputLabel, Select } from "@material-ui/core";
import { DataContext } from "./../context/DataProvider";

const Country = () => {
  const { setUrl, countryData } = useContext(DataContext);

  const allCountries = countryData.countries ? countryData.countries : [];

  return (
    <Container maxWidth="md">
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-country-native-simple" focused={true}>
          Country
        </InputLabel>
        <Select
          native
          onChange={(e) => setUrl(e.target.value)}
          label="Select Country"
          inputProps={{
            name: "country",
            id: "outlined-country-native-simple",
          }}
        >
          <option aria-label="None" value=""></option>
          {allCountries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default Country;
