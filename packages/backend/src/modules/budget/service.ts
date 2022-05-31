import prisma from "../../database/prisma";

class BudgetService {
  // Read functions
  async getAll(serviceOrderID) {
    return await prisma.budget.findMany({
      where: { serviceOrder: { id: serviceOrderID } },
      include: {
        itens: true,
      },
    });
  }

  async getOne(id: number) {
    return await prisma.budget.findUnique({
      where: { id },
      include: {
        itens: true,
      },
    });
  }

  // Write functions
  async deleteOne(id: number) {
    await prisma.budget.delete({
      where: { id },
    });
  }
}

const budgetService = new BudgetService();

export default budgetService;