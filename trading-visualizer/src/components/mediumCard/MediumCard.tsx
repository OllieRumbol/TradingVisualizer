import React from "react";

import Grid from "@mui/material/Grid";
import GenericCard from "components/genericCard/GenericCard";

type MediumCardProps = {
    children: React.ReactElement
}

export default function MediumCard(props: MediumCardProps) {
  return (
    <>
      <Grid item lg={6} sm={12} xs={12}>
        <GenericCard>
            {props.children}
        </GenericCard>
      </Grid>
    </>
  );
}
