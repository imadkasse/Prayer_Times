import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Cards from "./components/Cards";
import Bar from "./components/Bar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button, CssBaseline, IconButton } from "@mui/material";
import Country from "./components/Country";

function App() {

  //get date
  const [date, setdate] = useState({
    dayName: "الأربعاء",
    fullDate: "30-02-2017",
  });

  //get name of city
  const [countrys, setCountrys] = useState({
    displayName: "الجزائر-الجلفة",
    apiName: "Makkah",
  });
  // edit citys
  const avaivbleCountrys = [
    {
      id: Math.random(),
      displayName: "الجزائر-الجلفة",
      apiName: "djelfa,Algeria",
    },
    {
      id: Math.random(),
      displayName: "مكة المكرمة",
      apiName: "Makkah",
    },
    {
      id: Math.random(),
      displayName: "المدينة المنورة",
      apiName: "madina",
    },
  ];
  //mode(dark,light)
  const theme = useTheme();
  const [mode, setMode] = useState(
    localStorage.getItem("MODE") === null
      ? "light"
      : localStorage.getItem("MODE")
  );
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // get time of salat
  const [time, setTime] = useState([]);
  const getTime = async (url) => {
    const res = await axios.get(
      `http://api.aladhan.com/v1/timingsByAddress?address=${url}`
    );
    setTime(res.data.data.timings);
    //get date
    setdate({
      dayName: res.data.data.date.hijri.weekday.ar,
      fullDate: res.data.data.date.gregorian.date,
    });
  };
  // get time in first loading page
  useEffect(() => {
    getTime("djelfa,Algeria");
    
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Box position="relative" mb={5} ml={5}>
          <Button
            onClick={() => {
              localStorage.setItem(
                "MODE",
                darkTheme.palette.mode === "dark" ? "light" : "dark"
              );
              setMode(darkTheme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {darkTheme.palette.mode === "dark" ? (
              <LightModeIcon sx={{ color: "orange" }} />
            ) : (
              <DarkModeIcon />
            )}
          </Button>
        </Box>
        <Bar countrys={countrys} date={date} prayer={time} />
        <Cards time={time} />
        <Country
          getTime={getTime}
          setCountrys={setCountrys}
          avaivbleCountrys={avaivbleCountrys}
        />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
