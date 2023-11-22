import React from "react";
import s from "./index.module.scss";
//components
import BreadCrumbs from "@/components/breadcrumbs";

const WishList = () => {
  return (
    <>
      <main className={`${s.wishlist} container`}>
        <div className={`${s.wishlist__breadcrumbs}`}>
          <BreadCrumbs />
        </div>
      </main>
    </>
  );
};

export default WishList;
