import IProduct from "./IProduct";

type IProductCart = IProduct & {
  quantity: number;
};
export default IProductCart;
