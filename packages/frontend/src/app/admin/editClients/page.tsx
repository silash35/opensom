import type { Metadata } from "next";

import EditClients from "@/components/pages/EditClients";

export const metadata: Metadata = { title: "Gerenciar Clientes" };

const EditClientsPage = () => <EditClients />;

export default EditClientsPage;