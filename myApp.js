
let name = function (){

let x = 'jhon'
let y = 'Doe'
console.log(x + " " + y) 
}

let randomObj = function () {

    let name = "Jhon"
    let surname = "Doe"
    let email = "jhondoe@gmail.com"

    return {
        name:name,
        surname:surname,
        email:email
    }
}

randomObj()

delete randomObj.email 

let sArray = function () {
    let str = ["ciao","come","stai","io","bene","e","tu","?","ci","vediamo"]
    console.log(str)
}

let array100 = function () {
    let arr = []
    for(i=0;i<100;i++){
        let num = Math.floor(Math.random()*100+1)
        arr.push(num)

    }
    return arr
}

function bubble_SortMM()
{
              let swapp;
    
              let x= array100();
              console.log(x)
              let n = x.length-1;
               do {
                  swapp = false;
                  for (let i=0; i < n; i++)
        
                  {
          
                   if (x[i] > x[i+1])
                   {
                     let temp = x[i]
                     x[i] = x[i+1]
                    x[i+1] = temp
                    swapp = true
               
                     }
                   }
                    n--;
                 } while (swapp);
                let primo = x.shift()
                let ultimo = x.pop()
                console.log(primo, ultimo)
                }



           