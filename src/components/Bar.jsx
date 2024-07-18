import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from "moment";
const Bar = ({ countrys, date, prayer }) => {
  //timer
  const [timer, setTimer] = useState(10);
  //hours
  const [hours, setHours] = useState(0);

  //minuts
  const [minuts, setMinuts] = useState(0);

  //seconds
  const [seconds, setSeconds] = useState(0);

  //name next Prayer
  const [nextP, setNextP] = useState("");

  const arrPrayer = [
    { key: "Fajr", name: "الفجر" },
    { key: "Dhuhr", name: "الظهر" },
    { key: "Asr", name: "العصر" },
    { key: "Maghrib", name: "المغرب" },
    { key: "Isha", name: "العشاء" },
  ];

  const setupCountdownTimer = () => {
    const momentNow = moment();
    let nextPrayerTime = null;
    let indexPrayer = 0;
    //get the next prayer name
    if (
      momentNow.isAfter(moment(prayer.Fajr, "hh:mm")) &&
      momentNow.isBefore(moment(prayer.Dhuhr, "hh:mm"))
    ) {
      nextPrayerTime = prayer.Dhuhr;
      indexPrayer = 1;
    } else if (
      momentNow.isAfter(moment(prayer.Dhuhr, "hh:mm")) &&
      momentNow.isBefore(moment(prayer.Asr, "hh:mm"))
    ) {
      nextPrayerTime = prayer.Asr;
      indexPrayer = 2;
    } else if (
      momentNow.isAfter(moment(prayer.Asr, "hh:mm")) &&
      momentNow.isBefore(moment(prayer.Maghrib, "hh:mm"))
    ) {
      nextPrayerTime = prayer.Maghrib;
      indexPrayer = 3;
    } else if (
      momentNow.isAfter(moment(prayer.Maghrib, "hh:mm")) &&
      momentNow.isBefore(moment(prayer.Isha, "hh:mm"))
    ) {
      nextPrayerTime = prayer.Isha;
      indexPrayer = 4;
    } else {
      nextPrayerTime = prayer.Fajr;
      indexPrayer = 0;
    }

    setNextP(arrPrayer[indexPrayer].name);

    // run the timer importnet var nextPrayerTime
    let differnceTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

    //fajr time
    if (differnceTime < 0) {
      const midNightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
      const fajrMdiNightDiff = moment(nextPrayerTime, "hh:mm").diff(
        moment("00:00:00", "hh:mm:ss")
      );
      const totalDiif = midNightDiff + fajrMdiNightDiff;
      differnceTime = totalDiif;
    }

    const durationDiffernceTime = moment.duration(differnceTime);

    //set hours and min and second in the page
    setHours(durationDiffernceTime.hours());
    setMinuts(durationDiffernceTime.minutes());
    setSeconds(durationDiffernceTime.seconds());

    console.log();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setupCountdownTimer();

    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [prayer]);
  return (
    <>
      <Box mb={3} display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="p">
            {`${date.dayName}  ${date.fullDate} | ${moment().format("LT")}`}
          </Typography>

          <Typography variant="h4" sx={{ mt: 2 }}>
            {countrys.displayName}
          </Typography>
        </Box>
        <Box m="auto">
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            متبقي على صلاة {nextP}
          </Typography>
          <Typography variant="h3" pt="5px">
            {hours}:{minuts}:{seconds}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginBottom: "30px" }} />
    </>
  );
};

export default Bar;
