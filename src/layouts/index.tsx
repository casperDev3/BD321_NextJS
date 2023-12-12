// layouts
import Header from "./header";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
}

const Layouts = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
