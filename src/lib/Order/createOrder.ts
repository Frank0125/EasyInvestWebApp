// import type { Order } from "../types/Order";
// import { hasAllAtributes } from "./hasAllAtributes";
import { type OrderFormData } from "../../schemas/OrderSchema";
import { saveTextFile } from "../saveTextFile";
import { updateUserStats } from "../User/updateUserStats";

/**
 * 
 * @param newOrder : built Order object that creates a record and updates user stats.
 */

//! validation already done in component

export async function createOrder(newOrder : OrderFormData) {
 try{
    // if (!hasAllAtributes(newOrder)) {
    //     throw new Error("The Order is missing atributes")
    // }
    let content = ""
    // Add every attribute dynamically
    content += Object.entries(newOrder)
      .map(([key, value]) => `${key}: ${String(value)}\n`)
      .join("");
    updateUserStats(newOrder)
    console.log("recordcreated")

    //region File name
    saveTextFile("Record_"+newOrder.stockName+"_"+newOrder.id, content)
 }
 catch(error){
    console.log("Error: ", (error as Error).message)
 }
}