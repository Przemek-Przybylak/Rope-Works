import { Description, DescriptionWrapper, Grid, Poster, Tile } from "./styled";
import activityList from "../activityList.json";
import { SectionHeader } from "../../../common/SectionHeader";

export const Activity = () => {
  return (
    <>
      <SectionHeader>Oferta</SectionHeader>
      <Grid>
        {activityList.map((activity) => (
          <Tile>
            {activity.id === 2 ? (
              <Poster cleaning />
            ) : activity.id === 3 ? (
              <Poster washing />
            ) : activity.id === 4 ? (
              <Poster gwo />
            ) : activity.id === 6 ? (
              <Poster instalation />
            ) : activity.id === 7 ? (
              <Poster special />
            ) : activity.id === 9 ? (
              <Poster ladder />
            ) : (
              <Poster />
            )}
            <DescriptionWrapper>
              <Description>{activity.name}</Description>
            </DescriptionWrapper>
          </Tile>
        ))}
      </Grid>
    </>
  );
};
