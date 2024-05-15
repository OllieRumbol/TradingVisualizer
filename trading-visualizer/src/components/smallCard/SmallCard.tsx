import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import GenericCard from "components/genericCard/GenericCard";

type SmallCardProps = {
    children: React.ReactElement
}

export default function SmallCard(props: SmallCardProps) {
  return (
    <>
      <Grid item lg={3} sm={6} xs={12}>
        <GenericCard>
            {props.children}
        </GenericCard>
      </Grid>
    </>
  );
}
