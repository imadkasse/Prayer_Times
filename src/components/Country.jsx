import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

const Country = ({ getTime, setCountrys, avaivbleCountrys }) => {
  const [City, setCity] = useState("");
  const handleChange = (event) => {
    setCity(event.target.value.displayName );
    setCountrys(event.target.value);
    console.log(event.target.value.displayName);
    getTime(event.target.value.apiName);
  };
  
  return (
    <>
      <FormControl sx={{ width: "270px", mt: 2 }}>
        <InputLabel id="demo-simple-select-label">city</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={City}
          label="City"
          onChange={handleChange}
        >
          {avaivbleCountrys.map((city) => {
            return (
              <MenuItem
                value={city}
                key={city.id}
              >
                {city.displayName}
              </MenuItem>
            );
          })}
          
        </Select>
      </FormControl>
    </>
  );
};

export default Country;
