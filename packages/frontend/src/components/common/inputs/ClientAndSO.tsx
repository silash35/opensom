import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

import ClientInputs from "@/components/common/inputs/Client";
import EquipmentInputs from "@/components/common/inputs/ServiceOrder";
import useClients from "@/hooks/useClients";
import type Client from "@/types/client";

interface ClientWithLabel extends Client {
  id: number;
  label: string;
}

interface Props {
  setSelectedClientId: (selectedClient: number) => void;
}

const newClient: ClientWithLabel = { label: "Novo Cliente", id: 0 } as ClientWithLabel;

export default function ClientAndSOInputs({ setSelectedClientId }: Props) {
  const [options, setOptions] = useState([newClient]);
  const [search, setSearch] = useState("");

  const { clients } = useClients(`?take=50${search.length > 0 ? `&start=${search}` : ""}`);

  const [clientSelectorValue, setClientSelectorValue] = useState(options[0]);

  useEffect(() => {
    setSelectedClientId(clientSelectorValue.id);
  }, [clientSelectorValue]);

  useEffect(() => {
    if (Array.isArray(clients)) {
      const clientsWithLabel = clients.map((client) => {
        return { ...client, label: client.name };
      });

      const processedOptions = [newClient].concat(clientsWithLabel);

      setOptions(processedOptions);
    }
  }, [clients]);

  return (
    <>
      <h2>Dados do Cliente</h2>
      <Autocomplete
        options={options}
        value={clientSelectorValue}
        filterOptions={(x) => x}
        onChange={(e, newValue) => {
          if (newValue) setClientSelectorValue(newValue);
        }}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.id}>
              {option.label}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            label="Cliente"
            required
          />
        )}
      />
      <ClientInputs client={clientSelectorValue} />

      <h2>Dados do Equipamento</h2>
      <EquipmentInputs />
    </>
  );
}
