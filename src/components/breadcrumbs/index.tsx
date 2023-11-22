import { useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// icons
import icon_home from "@/assets/icons/Home.svg";
import icon_arrow_bc from "@/assets/icons/breadcrumbs-arrow.svg";
// styles
import s from "./index.module.scss";
//---! bc equal breadcrumbs

const BreadCrumbs = () => {
  //init
  const router = useRouter();
  let pathGeneration = "";
  // on load
  const breadCrumbs = useMemo(() => {
    return router.pathname.split("/");
  }, []);

  return (
    <>
      <ul className={s.bc}>
        {breadCrumbs &&
          breadCrumbs.map((item: string) => {
            if (item == "") {
              return (
                <li>
                  <Link href={pathGeneration + "/"}>
                    <Image
                      src={icon_home}
                      alt="home_breadcrumbs"
                      width={15}
                      height={15}
                    />
                  </Link>
                </li>
              );
            } else {
              pathGeneration += `/${item}`;
              return (
                <li>
                  <div className={s.bc__icon}>
                    <Image
                      src={icon_arrow_bc}
                      alt="arrow_breadcrumbs"
                      width={10}
                      height={10}
                    />
                  </div>
                  <Link href={`${pathGeneration}`}>{item}</Link>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
};

export default BreadCrumbs;
