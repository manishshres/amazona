import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store, round } from "../utils/Store";
import { XCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

function CartScreen() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const TAXRATE = 6;

  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
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
                            <select
                              value={item.quantity}
                              onChange={(e) =>
                                updateCartHandler(item, e.target.value)
                              }
                              className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
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
                  <h2
                    id="summary-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Order summary
                  </h2>

                  <dl className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm text-gray-600">Subtotal</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        $
                        {round(
                          cartItems.reduce(
                            (a, c) => a + c.quantity * c.price,
                            0
                          ),
                          2
                        )}
                      </dd>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <dt className="flex text-sm text-gray-600">
                        <span>Tax estimate</span>
                        <a
                          href="#"
                          className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">
                            Learn more about how tax is calculated
                          </span>
                        </a>
                      </dt>
                      <dd className="text-sm font-medium text-gray-900">
                        $
                        {
                          /** This needs to be fixed **/
                          Number(
                            cartItems.reduce(
                              (a, c) => a + c.quantity * c.price * (6 / 100),
                              0
                            )
                          ).toFixed(2)
                        }
                      </dd>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <dt className="text-base font-medium text-gray-900">
                        Order total
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        $
                        {round(
                          cartItems.reduce(
                            (a, c) =>
                              a +
                              c.quantity * c.price +
                              c.quantity * c.price * (TAXRATE / 100),
                            0
                          ),
                          2
                        )}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6">
                    <button
                      onClick={() => router.push("/checkout")}
                      className="w-full bg-rose-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-rose-500"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
