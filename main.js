import {searchStock, filterStocksByPrice, OperateOnStock} from "./utils/stockFunc.js"
import input from "analiza-sync";

let askPupular = Number(input("enter 1 or 2 or 3 or 4:   " ))

while (askPupular !== "exit"){
    if (askPupular === 1){
        let identifier1 = input("enter a name of stock or id of stock  ")
        console.log(searchStock(identifier1), "\n Did we find the stock???")
        askPupular = Number(input("enter 1 or 2 or 3 or 4:   " ))
    }
    if (askPupular === 2){
        let givenPrice1 = Number(input("enter a price  "))
        let above1 = input("enter true if above or false if less  ")
        console.log(filterStocksByPrice(givenPrice1 , above1), "\n This is what I found.")
        askPupular = Number(input("enter 1 or 2 or 3 or 4:   " ))
        
    }
    if (askPupular === 3){
        let operation1 = input("enter buy or sell  ")
        let identifier1 = input("enter a name of stock or id of stock  ")
        console.log(OperateOnStock(operation1, identifier1), "\n Did you notice what changed?")
        askPupular = Number(input("enter 1 or 2 or 3 or 4:   " ))
    }
    if (askPupular === 4){
        askPupular = "exit"
    }
}