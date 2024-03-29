// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

function calcTotal() {
    const precio=1000
    console.log("Ingreso a calcTotal")

    let cant=document.getElementById("cant").value
    console.log("cant="+cant)

    if (cant>=1) {
        let total=cant*precio
        console.log("total="+total)

        let desc=document.getElementById("desc").value
        total=total - (total*desc/100)
        console.log("total con desc="+total)

    
        // document.getElementById("total").style.color="red"
        document.getElementById("total").className="bg-info p-1"
        document.getElementById("total").innerHTML=total
            
    } else {
        document.getElementById("total").className="bg-danger p-1"
        document.getElementById("total").innerHTML="La cantidad de tickets debe ser mayor o igual a 1"
        
    }   
}

function updSelect(valor) {
  document.getElementById("desc").value=valor

  this.calcTotal();
}
function myFunction() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("correo").value;
  let cant = document.getElementById("cant").value;

  if (nombre == "" || apellido == "" || correo == "" || cant == "") {
      alert("Por favor, complete todos los casilleros");
      return false;
  } else {
      alert("La compra se realizó correctamente");
      return true;
  }
}