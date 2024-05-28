import React, { useEffect, useState } from "react";

import SmallCard from "components/smallCard/SmallCard";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MoneyIcon from "@mui/icons-material/Money";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AppsIcon from "@mui/icons-material/Apps";
import ErrorIcon from "@mui/icons-material/Error";

type StatsCardProps = {
  title: string;
  value: string;
  iconType: string;
  changeFromLastMonth: number;
};

export default function StatsCard(props: StatsCardProps) {
  const { title, value, iconType, changeFromLastMonth } = props;
  const trendColour = changeFromLastMonth > 0 ? "#15b79f" : "#f04438";
  const trendIcon =
    changeFromLastMonth > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />;

  const [icon, setIcon] = useState(<></>);
  const [iconColour, setIconColour] = useState("#15b79f");

  useEffect(() => {
    if (iconType) {
      if (iconType === "currency") {
        setIcon(<CurrencyPoundIcon />);
      } else if (iconType === "value") {
        setIcon(<MoneyIcon />);
        setIconColour("#fb9c0c");
      } else if (iconType === "dividends") {
        setIcon(<AccountBalanceIcon />);
        setIconColour("#2E96FF");
      } else if (iconType === "shares") {
        setIcon(<AppsIcon />);
        setIconColour("#635bff");
      } else {
        setIcon(<ErrorIcon />);
      }
    }
  }, [iconType]);

  return (
    <SmallCard>
      <Stack spacing={3}>
        <Stack
          direction="row"
          sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="h6" component="h6">
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{ backgroundColor: iconColour, height: "56px", width: "56px" }}
          >
            {icon}
          </Avatar>
        </Stack>

        <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={0.5}>
            {trendIcon}
            <Typography
              variant="body2"
              color={trendColour}
            >{`${changeFromLastMonth}%`}</Typography>
            <Typography color={trendColour} variant="caption">
              Since last month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </SmallCard>
  );
}
