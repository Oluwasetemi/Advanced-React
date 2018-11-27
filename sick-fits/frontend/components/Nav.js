import Link from 'next/link';
import { Mutation } from 'react-apollo';
// import { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import User from './User';
// import CartCount from './CartCount';
// import Signout from './Signout';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>Items</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
