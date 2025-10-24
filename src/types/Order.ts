import type { StockType } from "./StockType"

export type Order = {
    id : string
    userID : string
    stockName : string
    amount : number
    expectedGrowth : number
    stockType : StockType
    openedAt : Date
    closedAt : Date
}