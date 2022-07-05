import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Link,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import isEmptyAddress from "../../../../../../../utils/isEmptyAddress";
import trimAddress from "../../../../../../../utils/trimAddress";
import { NETWORK_URL } from "../../../../../../../utils/constants";
import AppContext from "../../../../../../_context";

export default function DisplayListItem({ row = {} }) {
  const { raffle } = useContext(AppContext);
  const [winner, setWinner] = useState("0x00000");

  useEffect(() => {
    if (row.id) {
      raffle.methods
        .getPrizeOwner(row.id)
        .call()
        .then(data => {
          setWinner(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [raffle, row]);

  const displayWinner = () => {
    if (isEmptyAddress(winner)) {
      return (
        <Typography ml={1} variant="caption">
          Winner: (none)
        </Typography>
      );
    }
    const winnerAddressLink = `${NETWORK_URL}address/${winner}`;
    return (
      <Typography ml={1} variant="caption">
        {"Winner: "}
        <Link
          href={winnerAddressLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {trimAddress(winner)}
        </Link>
      </Typography>
    );
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          src={row.image || "https://via.placeholder.com/50x50?text=no+image"}
        >
          {row.id}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <Typography variant="subtitle2">
              <b>{row.description || "(No description)"}</b>
            </Typography>
          </>
        }
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {`PrizeID: ${row.id}`}
            </Typography>
            {displayWinner()}
          </>
        }
      />
    </ListItem>
  );
}
