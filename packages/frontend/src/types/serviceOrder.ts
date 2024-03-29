import TClient from "@/types/client";

interface TServiceOrder {
  id: number;

  equipment: string;
  brand: string | null;
  model: string | null;
  productNumber: string | null;
  batchOrImei: string | null;
  problemDescription: string | null;
  productCondition: string | null;
  accessories: string | null;
  listOfServices: null;
  notes: string | null;

  isUnderWarranty: boolean;
  voltage: string;
  attendedBy: string;
  attendedOn: string;

  ownerId: number;

  isBudgetApproved: boolean | null;

  createdAt: string;
  registeredInManufacturerAt: string | null;
  budgetedAt: string | null;
  budgetAnsweredAt: string | null;
  partsArrivedAt: string | null;
  repairedAt: string | null;
  deliveredToCustomerAt: string | null;

  statusNumber: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70;
  defaultEmail?: string;
  statusName: string;
  isUrgent: boolean;
}

interface TServiceOrderWithClient extends TServiceOrder {
  owner: TClient;
}

interface TServiceOrderInput {
  equipment: string;
  brand?: string;
  model?: string;
  productNumber?: string;
  batchOrImei?: string;
  problemDescription?: string;
  productCondition?: string;
  accessories?: string;
  listOfServices?: string;
  notes?: string;

  isUnderWarranty: boolean;
  attendedBy: string;
  attendedOn: string;
}

interface TServiceOrderUpdateStatusInput {
  createdAt: string;
  registeredInManufacturerAt?: string;
  budgetedAt?: string;
  budgetAnsweredAt?: string;
  partsArrivedAt?: string;
  repairedAt?: string;
  deliveredToCustomerAt?: string;

  isBudgetApproved?: boolean;
}

export type {
  TServiceOrder,
  TServiceOrderInput,
  TServiceOrderUpdateStatusInput,
  TServiceOrderWithClient,
};
export default TServiceOrder;
