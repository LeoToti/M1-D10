
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


                /*let matrix = function() {
                    var matrix1 = [[],[],[],[],[]];
                    for(var i=0; i<matrix.length; i++) {
                        let num = Math.floor(Math.random()*100+1)
                        matrix1[i].push
                     
                    }
                 
                 return matrix1

                }*/

                let get2Arrays = function(x,y){
                    if(x.length>y.length){
                        return x
                    }
                    else {

                    return y
                }

                }


                let arraySum = function(x,y) {
                    let countA = 0
                    let countB = 0
                    for ( i=0; i<x.length;i++ ){
                        countA += x[i]


                    }
                    for ( i=0; i<y.length;i++ ){
                        countB += y[i]


                    }
                    if(countA>countB){
                        console.log("first is bigger")
                    }
                    else {
                        console.log("second is bigger")
                    }


                }

                let cont = document.getElementById('container')
                let td = document.getElementsByTagName('td')
                
                let stamp = function(){
                    for ( i=0; i<td.length;i++ ){
                        let ciao = td[i].innerText
                        console.log(ciao)

                    }

                }

                let changeH1 = function(txt) {
                    let h1 = document.getElementsByTagName("h1")[0]
                    h1.innerHTML = txt

                }

                let addExRow = function(){
                    let trx = document.createElement("tr");
                    let table = document.getElementById("table")
                    table.appendChild(trx)
                }

                let addClass = function(className){
                    let tr = document.getElementsByTagName("tr")
                    for ( i=0; i<tr.length;i++ ){
                        tr[i].classList.add(className)
                    }

                }

                let adding = function () {
                    nodeList = document.links
                    for ( i=0; i<nodeList.length;i++ ){
                        nodeList[i].style.backgroundColor('red')

                    }
                }

                window.onload = function (){
                    console.log("Page is Loaded Correctly")
                }

                let addElementToUl = function(txt){
                    let li = document.createElement("li")
                    let txt = document.createTextNode(txt)
                    li.appendChild(txt)
                    document.getElementById("ul1").appendChild(li)

                }






            
                

           