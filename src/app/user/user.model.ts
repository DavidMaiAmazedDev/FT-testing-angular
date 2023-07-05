import { Subscription } from "./Subscription.model";
import { Address } from "./address.model";
import { Employment } from "./employment";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    gender: string;
    phoneNumber: string;
    dob: string;
    membership: string;
    employment: Employment;
    address: Address;
    subscription: Subscription;
    uuid: string;
    imgUrl: string;
  }