import { TServiceOrderUpdateStatusInput, TServiceOrderWithClient } from "@/types/serviceOrder";

import request from "../request";

export default async (id: number, serviceOrder: TServiceOrderUpdateStatusInput) => {
  const { response, status, error } = await request({
    method: "PUT",
    url: "/api/private/serviceOrders",
    body: { id, ...serviceOrder },
  });

  const updatedServiceOrder = response as TServiceOrderWithClient;

  return { updatedServiceOrder, status, error };
};
