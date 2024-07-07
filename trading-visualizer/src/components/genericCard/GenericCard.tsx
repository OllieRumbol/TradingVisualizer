import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

type GenericCardProps = {
  children: React.ReactElement
}

export default function GenericCard(props: GenericCardProps) {

  return (
    <Card sx={{ borderRadius: "20px" }}>
      <CardContent sx={{ padding: "24px 24px" }}>
        {props.children}
      </CardContent>
    </Card>
  );
}
