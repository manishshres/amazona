import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { XCircleIcon } from "@heroicons/react/outline";
import { Router } from "next/router";

export default function CartScreen() {
  const { state, dispatch } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  return (
    <>
      <Layout title="Shopping Cart">
        <div className="mt-4">
          {cartItems.length === 0 ? (
            <div> Cart is empty</div>
          ) : (
            <>
              <h1 className="text-rose-500 text-xl font-bold">Shopping Cart</h1>
              <div className="grid md:grid-cols-4 md:gap-5">
                <div className="overflow-x-auto md:col-span-3">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="px-5 text-left">Item</th>
                        <th className="px-5 text-left">Quantity</th>
                        <th className="px-5 text-left">Price</th>
                        <th className="px-5 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="border-b ">
                          <td className="text-left p-5">{item.title}</td>
                          <td className="text-left p-5 ml-1">
                            {item.quantity}
                          </td>
                          <td className="text-left p-5">${item.price}</td>
                          <td className="text-left p-5">
                            <button onClick={() => removeItemHandler(item)}>
                              <XCircleIcon className="h-5 w-5"></XCircleIcon>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="sm:mt-4 card border p-5">
                  <ul>
                    <li>
                      <div className="pb-3">
                        Subtotal (
                        {cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                        {cartItems.reduce(
                          (a, c) => a + c.quantity * c.price,
                          0
                        )}
                      </div>
                    </li>
                    <li>
                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700">Checkout</a>

                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
