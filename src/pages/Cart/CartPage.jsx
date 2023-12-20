import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';
import { useCart } from '../../context';

export const CartPage = () => {
  // const cartListLength = 0;
  const { cartList } = useCart();
  // return <main>{cartListLength ? <CartList /> : <CartEmpty />}</main>;
  return (
    <main>{cartList && cartList.length ? <CartList /> : <CartEmpty />}</main>
  );
};
