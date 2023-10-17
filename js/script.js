function calcTotal(){
    console.log("Ingreso a calcTotal")
    const precio = 1000

   let cant= document.getElementById("cant").value
   console.log(cant)

   if (cant>=0) {
    let total=cant*precio
    document.getElementById("total").className= "bg-info p-1"
    document.getElementById("total").innerHTML=total
 
   } else {
    document.getElementById("total").className= "bg-danger p-1"
    document.getElementById("total").innerHTML="la cantidad de tickets debe ser mayor o igual a 1"
 
    
   }

  
}