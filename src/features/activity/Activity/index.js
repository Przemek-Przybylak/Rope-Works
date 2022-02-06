import { Description, Grid, Poster, Tile } from "./styled";
import activityList from "../activityList.json";

export const Activity = () => {
  return (
    <>
      <h2> Oferta</h2>
      <Grid>
        {activityList.map((activity) => (
          <Tile>
            <Poster></Poster>
            <Description>{activity.name}</Description>
          </Tile>
        ))}
      </Grid>
    </>
  );
};
