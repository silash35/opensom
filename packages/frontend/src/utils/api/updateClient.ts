import TServiceOrder, { TServiceOrderInput } from "@/types/serviceOrder";
import TClient, { TClientInput } from "@/types/client";
import request from "../request";

export default async (client: TClientInput, serviceOrder?: TServiceOrderInput) => {
  const { response, status } = await request({
    method: "PUT",
    url: "/api/private/clients",
    body: { ...client, ...serviceOrder },
  });

  const updatedClient = response as Client;

  return { updatedClient, status };
};

interface Client extends TClient {
  ServiceOrders: TServiceOrder[];
}
