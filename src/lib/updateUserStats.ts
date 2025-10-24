import type { Order } from "../types/Order";
/**
 * 
 * @param newOrder : built Order object that creates a record and updates user stats.
 */
export async function updateUserStats(newOrder : Order) {
 try{
    console.log(newOrder)
    console.log("Stats changed")
 }
 catch(error){
    console.log("Error: ", (error as Error).message)
 }
}