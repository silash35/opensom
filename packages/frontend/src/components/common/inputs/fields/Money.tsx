import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useEffect, useState } from "react";

import centsToBRL from "@/utils/centsToBRL";

interface Props {
  defaultValue?: string | null;
  textFieldProps: Omit<TextFieldProps, "value" | "onChange">;
}

const Money = ({ defaultValue, textFieldProps }: Props) => {
  const processValue = (value: string) => centsToBRL(Number(value));

  const [value, setValue] = useState(processValue(defaultValue ? defaultValue : "0"));
  useEffect(() => {
    setValue(processValue(defaultValue ? defaultValue : "0"));
  }, [defaultValue]);

  return (
    <TextField
      onChange={(e) => {
        const negative = e.target.value.match(/-/g)?.length === 1;
        const input = e.target.value.replace(/\D/g, "");
        setValue(processValue((negative ? "-" : "") + input));
      }}
      value={value}
      {...textFieldProps}
    />
  );
};

export default Money;
