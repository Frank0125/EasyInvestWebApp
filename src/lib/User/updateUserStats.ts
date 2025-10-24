import type { OrderFormData } from "../../schemas/OrderSchema"
/**
 * 
 * @param newOrder : built Order object that creates a record and updates user stats.
 */
export async function updateUserStats(newOrder : OrderFormData) {
 try{
    console.log(newOrder)
    console.log("Stats changed")
 }
 catch(error){
    console.log("Error: ", (error as Error).message)
 }
}