import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import useBudget from "@/hooks/useBudget";

import Page from "./print/Document";
import Options from "./print/Options";

interface Props {
  id: number;
}

export default function BudgetPdf({ id }: Props) {
  const { budget } = useBudget(String(id));

  if (!budget) {
    return (
      <Stack height="100%" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <>
      <Options budget={budget} />
      <Page budget={budget} />
    </>
  );
}