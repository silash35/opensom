interface TClient {
  id: number;
  deleted: boolean;
  createdAt: string;
  updatedAt: string | null;

  name: string;
  email: string | null;
  address: string | null;
  zip: string | null;
  whatsapp: string | null;
  tel: string | null;
  cpfOrCnpj: string | null;
}

interface TClientInput {
  name: string;
  email?: string;
  address?: string;
  zip?: string;
  whatsapp?: string;
  tel?: string;
  cpfOrCnpj?: string;
}

export type { TClientInput };
export default TClient;
