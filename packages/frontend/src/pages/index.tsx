import Head from "next/head";

import Index from "@/components/pages/index/index";

const Home = () => {
  return (
    <>
      <Head>
        <title>Painel de Administração</title>
      </Head>

      <Index />
    </>
  );
};

export default Home;
