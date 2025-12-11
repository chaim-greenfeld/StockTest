import input from "analiza-sync";
import { stockMarket } from "../data/dataStock.js";

export function searchStock(identifier) {
  let a;
  let b;

  a = stockMarket.stocks.filter((stock) => stock.name === identifier);
  b = stockMarket.stocks.filter((stock) => stock.id === identifier);

  if (a[0]) {
    return a;
  } else if (b[0]) {
    return b;
  } else {
    console.log("stock not found");
    return [];
  }
}


export function filterStocksByPrice(givenPrice, above){
    if (typeof(givenPrice) === "number"){
    if (above === true){
        let a = stockMarket.stocks.filter((stock) => stock.currentPrice >= givenPrice)
        return a
    }
    else if (above === false){
        let b = stockMarket.stocks.filter((stock) => stock.currentPrice <= givenPrice)
        return b
    }
    else {
        console.log("stock not found")
        return []
    }}
    else {
        return `the ${givenPrice} is not number`
    }

}

export function OperateOnStock(operation, identifier){   
    let a;
    let b;

    if (operation === "buy"){
    a = stockMarket.stocks.filter((stock) => stock.name === identifier);
    b = stockMarket.stocks.filter((stock) => stock.id === identifier);
    if (a[0]){
        const askPlayer = Number(input(" how many units to buy?:    "))
        if (a[0].availableStocks >= askPlayer){
            a[0].availableStocks -= askPlayer
            a[0].previousPrices.push(a[0].currentPrice)
            a[0].currentPrice *= 1.05
            stockMarket.stocks.forEach((stock) => {               
                if (stock.category === a[0].category){
                    if (stock.id === a[0].id){
                    return "it is instead of continue"
                }
                    stock.previousPrices.push(stock.currentPrice)
                    stock.currentPrice *= 1.01
                }
            })
        }
        else {
            return `You picked too many stocks.`
        }
        return a[0]

    }
    else if (b[0]){
        const baskPlayer = Number(input(" how many units to buy?:    "))
        if (b[0].availableStocks >= baskPlayer){
            b[0].availableStocks -= baskPlayer
            b[0].previousPrices.push((b[0].currentPrice).toFixed(1))
            b[0].currentPrice *= 1.05
            stockMarket.stocks.forEach((stock) => {
                if (stock.category === b[0].category){
                    if (stock.id === b[0].id){
                        return "it is instead of continue"
                    }
                    stock.previousPrices.push(stock.currentPrice)
                    stock.currentPrice *= 1.01
                }
                
            })
            return b[0]
        }
        else {
            return `You picked too many stocks.`
        }
    }
    else {
        return "the stock not found"
    }
    } 
    else if (operation === "sell"){
    a = stockMarket.stocks.filter((stock) => stock.name === identifier);
    b = stockMarket.stocks.filter((stock) => stock.id === identifier);
    if (a[0]){
        const howFamiliar = Number(input("How stock do you want to sell?:   "))
        a[0].availableStocks += howFamiliar
        a[0].previousPrices.push(a[0].currentPrice)
        a[0].currentPrice *= 0.95
        stockMarket.stocks.forEach((stock) => {
            if (stock.category === a[0].category){
                if (stock.id === a[0].id){
                    return "it is instead of continue"
                }
                stock.previousPrices.push(stock.currentPrice)
                stock.currentPrice *= 0.99
            }
        })
        return a[0]
    }
    else if (b[0]){

        const bHowFamiliar = Number(input("How stock do you want to sell?:   "))
        b[0].availableStocks += bHowFamiliar
        b[0].previousPrices.push(b[0].currentPrice)
        b[0].currentPrice *= 0.95
        stockMarket.stocks.forEach((stock) => {
            if (stock.category === b[0].category){
                if (stock.id === b[0].id){
                    return "it is instead of continue"
                }
                stock.previousPrices.push(stock.currentPrice)
                stock.currentPrice *= 0.99
            }
        
        })
        return b[0]
            

    }
    else {
        return "the stock not found"
    }

    }
}


