import { BASE_URL } from "@/constants";

export class Cart {
  baseURL: string = BASE_URL;
  constructor() {}
  public createPrettyData(data: number[]) {
    // create unique ids
    // @ts-ignore
    let uniqueProductsID = [...new Set(data)];
    // new place for product
    let formatProductsData: {}[] = [];
    // create new array products
    uniqueProductsID.map((e: number) => {
      // create counter
      let counter = 0;
      data.map((item: number) => {
        if (e == item) {
          counter++;
        }
      });
      // create frame
      formatProductsData.push({
        id: e,
        qty: counter,
      });
    });
    return formatProductsData;
  }
}
