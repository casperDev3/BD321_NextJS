import React from "react";
import Link from "next/link";
import s from "./index.module.scss";
// interfaces
import { Product } from "@/interfaces";
// redux
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "@/store/features/cart";

interface Props {
  data: Product;
}

const Card = ({ data }: Props) => {
  const { title, price, description, id } = data;
  // init
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{price}</div>
        <Link href={`/products/${title}?id=${id}`}>Детальніше</Link>
        <div
          onClick={() => {
            dispatch(addItemToCart(id));
          }}
          // className={`${s.card__btn} ${s.btn}`}
          className={[s.card__btn, s.btn].join(" ")}
        >
          Додати в корзину
        </div>
        <div
          onClick={() => {
            dispatch(removeItemFromCart(id));
          }}
          className={s.card__btn_del}
        >
          Видалити з корзини
        </div>
      </div>
    </>
  );
};

export default Card;
