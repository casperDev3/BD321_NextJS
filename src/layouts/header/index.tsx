import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/wishlist`}>WishList</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
