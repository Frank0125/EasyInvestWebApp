import type { Order } from "../types/Order";
import { hasAllAtributes } from "./hasAllAtributes";
import { saveTextFile } from "./saveTextFile";
import { updateUserStats } from "./updateUserStats";

/**
 * 
 * @param newOrder : built Order object that creates a record and updates user stats.
 */
export async function createOrder(newOrder : Order) {
 try{
    if (!hasAllAtributes(newOrder)) {
        throw new Error("The Order is missing atributes")
    }
    let content = ""
    const newID = "randam"
    content = formatEntry(newID) + formatEntry(newOrder.stockName)

    updateUserStats(newOrder)
    console.log("recordcreated")
    saveTextFile("Record_"+newID, content)
 }
 catch(error){
    console.log("Error: ", (error as Error).message)
 }
}

function formatEntry(item: unknown): string {
  const str = String(item);
  return str + "\n";
}
