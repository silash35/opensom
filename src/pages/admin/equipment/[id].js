import CircularProgress from "@mui/material/CircularProgress";
import { withPasswordProtect } from "@storyofams/next-password-protect";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Header from "@/components/common/header";
import Main from "@/components/equipment/main";
import Options from "@/components/equipment/options";
import Pdf from "@/components/equipment/pdf";
import processEquipment from "@/utils/processEquipment";

function Equipment() {
  const [isPrinting, setIsPrinting] = useState(false);
  const [equipment, setEquipment] = useState("loading");
  const router = useRouter();
  const { id } = router.query;

  const load = async () => {
    setEquipment("loading");

    try {
      const res = await fetch(`/api/admin/equipments?id=${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setEquipment(processEquipment(data));
    } catch (error) {
      setEquipment("error");
    }
  };

  useEffect(async () => {
    await load();
  }, [id]);

  return isPrinting ? (
    <Pdf equipment={equipment} />
  ) : (
    <>
      <Head>
        <title>Gerenciar Ordens de Serviço</title>
      </Head>

      <Header />

      <Main>
        {(() => {
          if (equipment === "loading") {
            return <CircularProgress />;
          } else if (equipment?.id == id) {
            return (
              <>
                <Pdf equipment={equipment} />
                <Options equipment={equipment} setIsPrinting={setIsPrinting} reload={load} />
              </>
            );
          } else {
            return <p>ERRO: ID {id} Invalido. Nenhuma OS encontrada</p>;
          }
        })()}
      </Main>
    </>
  );
}

export default withPasswordProtect(Equipment, {
  loginComponentProps: {
    backUrl: "/",
    logo: "/logo.png",
    buttonColor: "#fff",
    buttonBackgroundColor: "#c00000",
  },
});