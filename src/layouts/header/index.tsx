import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <Link href={"/"}>Home</Link>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/products">Product</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
