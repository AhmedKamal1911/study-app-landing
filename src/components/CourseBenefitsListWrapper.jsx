import CourseBenefitsList from "./CourseBenefitsList";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const CourseBenefitsListWrapper = ({
  listItems = [],
  itemsPerListLimit = 4,
  spacing = 2,
}) => {
  const totalNumberOfListsToRender = Math.ceil(
    listItems.length / itemsPerListLimit
  );
  return (
    <>
      {totalNumberOfListsToRender > 1 ? (
        <Grid container spacing={spacing}>
          {[...Array(totalNumberOfListsToRender).keys()].map((value) => (
            <Grid xs={12} md={6} key={value}>
              <CourseBenefitsList
                listItems={listItems.slice(
                  value * itemsPerListLimit,
                  itemsPerListLimit * (value + 1)
                )}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CourseBenefitsList listItems={listItems} />
      )}
    </>
  );
};

export default CourseBenefitsListWrapper;
