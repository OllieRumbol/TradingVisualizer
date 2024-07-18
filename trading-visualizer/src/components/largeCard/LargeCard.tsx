import React from "react";

import Grid from "@mui/material/Grid";
import GenericCard from "components/genericCard/GenericCard";

type LargeCardProps = {
  children: React.ReactElement;
};

export default function LargeCard(props: LargeCardProps) {
  return (
    <>
      <Grid item lg={9} sm={12} xs={12}>
        <GenericCard>{props.children}</GenericCard>
      </Grid>
    </>
  );
}
