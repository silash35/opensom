import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import Product from "@/components/common/product";
import Header from "@/components/header";
import getProduct from "@/utils/getProduct";

const en = {
  title: "Check your product status",
};

const pt = {
  title: "Verifique o status do seu produto",
};

export default function TrackPage({
  product,
  locale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const t = locale === "en" ? en : pt;

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      <Header />

      <main style={{ display: "contents" }}>
        <Product product={product} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Array.isArray(context.query.id) ? context.query.id[0] : context.query.id;
  const locale = context.locale;

  if (id === undefined) {
    return { notFound: true };
  } else {
    const product = await getProduct(id, locale);
    return {
      props: { product, locale: locale ? locale : "en" },
      notFound: product === "Not found" || product === "Unknown error",
    };
  }
};