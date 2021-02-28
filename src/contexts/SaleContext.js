import { createContext } from "react";

export const sale = {
  isSale: true,
};

const SaleContext = createContext(sale.isSale);
export default SaleContext;
