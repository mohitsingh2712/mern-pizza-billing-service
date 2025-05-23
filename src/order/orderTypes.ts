import { ObjectId } from "mongoose";
import { ICartItem } from "../types";
import { ICustomer } from "../customer/customerModal";
export enum PaymentModeEnum {
    CARD = "card",
    CASH = "cash",
}
export enum OrderStatusEnum {
    RECEIVED = "received",
    CONFIRMED = "confirmed",
    PREPARED = "prepared",
    OUR_FOR_DEVLIVERY = "out_for_delivery",
    DELIVERED = "delivered",
    CANCELLED = "cancelled",
}
export enum PaymentStatusEnum {
    PENDING = "pending",
    PAID = "paid",
    FAILED = "failed",
}

export interface IOrder {
    _id?: ObjectId;
    cart: ICartItem[];
    customerId: ObjectId | ICustomer;
    total: number;
    discount: number;
    deliveryCharges: number;
    taxes: number;
    address: string;
    tenantId: string;
    comment?: string;
    paymentMode: PaymentModeEnum;
    orderStatus: OrderStatusEnum;
    paymentStatus: PaymentStatusEnum;
    paymentId?: string;
}
