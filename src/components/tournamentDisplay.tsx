import { useEffect, useState } from "react";
import { Matches } from "../models/matches.interface";
import moment from "moment";
import { Match } from "../api/api";
import { AxiosError } from "axios";
import { Grid } from "@mui/material";
import CustomizedTables from "./table";
import LoadingAnimation from "./loading";

interface TournamentDisplayProps {
  gamesList: string[];
}

export default function TournamentDisplay({ gamesList }: TournamentDisplayProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [matchResult, setMatches] = useState<Matches[]>([]);

  useEffect(() => {
    const parsedDate = moment();

    Match.getMatchesV1(parsedDate, gamesList)
      .then((data) => {
        setIsLoaded(true);
        setMatches(data);
      })
      .catch((err: AxiosError) => {
        console.log("error occurred");
        setIsLoaded(true);
        console.error("error occurred on website startup:", err)
      });

    const interval = setInterval(() => {
      Match.getMatchesV1(parsedDate, gamesList)
        .then((data) => {

          setIsLoaded(true);
          setMatches(data);
        })
        .catch((err: AxiosError) => {
          setIsLoaded(true);
          console.error("error occurred on website update:", err)
        });
    }, 30000);
    return () => clearInterval(interval);


  }, []);


  return (
    <span>
      {isLoaded ? (
        <span>
          <Grid container spacing={3}>
            {matchResult.length === 0 ?
              <Grid item xs={12}>
                <h1 style={{
                  textAlign: "center"
                }}>
                  No tournaments
                </h1>
              </Grid>
              : matchResult.map((game) => (
                <Grid item sm={
                  matchResult.length <= 2 ? (12 / matchResult.length) : 4
                }>
                  <CustomizedTables matchData={game} />
                </Grid>
              ))}
            <Grid item xs={12}>
              <h1 style={{
                textAlign: "center"
              }}>
                IF YOU SEE YOUR MATCH DISPLAYED PLEASE GO AHEAD AND PLAY YOUR MATCH. <br />
                MAKE SURE TO REPORT RESULTS TO THE TOURNAMENT'S TO.
              </h1>
            </Grid>
          </Grid>
        </span>
      )
        :
        <Grid display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <LoadingAnimation />
        </Grid>}
    </span>
  );


}
