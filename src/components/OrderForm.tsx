import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderSchema, type OrderFormData } from "../schemas/OrderSchema";
import { StockType } from "../types/StockType";
import { createOrder } from "../lib/Order/createOrder";

export function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      id: crypto.randomUUID(),
      userID: "123",
      stockName: "",
      amount: 5,
      shares: 0.05,
      priceBought: 0,
      expectedGrowth: 0,
      openedAt: new Date(),
      closedAt: null,
      type: StockType.REGULAR,
    },
  });

  const onSubmit = (data: OrderFormData) => {
    createOrder(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 p-4 max-w-md mx-auto bg-white rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold text-gray-800">New Order</h2>

      <label className="flex flex-col">
        Stock Name
        <input
          type="text"
          {...register("stockName")}
          className="border p-2 rounded"
        />
        {errors.stockName && (
          <p className="text-red-500 text-sm">{errors.stockName.message}</p>
        )}
      </label>

      <label className="flex flex-col">
        Amount
        <input
          type="number"
          step="0.01"
          {...register("amount", { valueAsNumber: true })}
          className="border p-2 rounded"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}
      </label>

      <label className="flex flex-col">
        Shares
        <input
          type="number"
          step="0.01"
          {...register("shares", { valueAsNumber: true })}
          className="border p-2 rounded"
        />
        {errors.shares && (
          <p className="text-red-500 text-sm">{errors.shares.message}</p>
        )}
      </label>

      <label className="flex flex-col">
        Price Bought
        <input
          type="number"
          step="0.01"
          {...register("priceBought", { valueAsNumber: true })}
          className="border p-2 rounded"
        />
        {errors.priceBought && (
          <p className="text-red-500 text-sm">{errors.priceBought.message}</p>
        )}
      </label>

      <label className="flex flex-col">
        Expected Growth (%)
        <input
          type="number"
          step="0.01"
          {...register("expectedGrowth", { valueAsNumber: true })}
          className="border p-2 rounded"
        />
        {errors.expectedGrowth && (
          <p className="text-red-500 text-sm">
            {errors.expectedGrowth.message}
          </p>
        )}
      </label>

      <label className="flex flex-col">
        Type
        <select {...register("type")} className="border p-2 rounded">
          <option value={StockType.REGULAR}>Regular</option>
          <option value={StockType.SHORT}>Short</option>
        </select>
        {errors.type && (
          <p className="text-red-500 text-sm">{errors.type.message}</p>
        )}
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Submit Order
      </button>
    </form>
  );
}
