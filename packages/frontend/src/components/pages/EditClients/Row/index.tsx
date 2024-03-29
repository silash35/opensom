import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

import { TClientWithSOs as Client } from "@/types/client";

import DetailedInformation from "../DetailedInformation";
import styles from "./row.module.scss";

interface Props {
  client: Client;
  mutate: () => void;
}

const ClientRow = ({ client, mutate }: Props) => {
  const [openRow, setOpenRow] = useState(false);

  return (
    <>
      <TableRow className={styles.row}>
        <TableCell>
          <IconButton aria-label="expand row" onClick={() => setOpenRow(!openRow)} size="small">
            {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {client.name}
        </TableCell>
        <TableCell align="right">{client.email}</TableCell>
        <TableCell align="right">{client.whatsapp}</TableCell>
        <TableCell align="right">{client.tel}</TableCell>
        <TableCell align="center">{client.cpfOrCnpj}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={openRow} timeout="auto" unmountOnExit>
            <DetailedInformation client={client} mutate={mutate} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ClientRow;
