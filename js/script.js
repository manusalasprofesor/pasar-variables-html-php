const url = 'https://jsonplaceholder.typicode.com/users';
const contenedor = document.querySelector('#contenedor');
const enlace = document.querySelector('#enlace');
let nombre;
// Petición fetch
fetch(url)
      .then(response => response.json())
    //   .then(json => console.log(json))
      .then((datos) =>{
        datos.map((dato)=>{
            console.log(dato.name);
            nombre = dato.name;
            let parrafo = document.createElement('p');
            parrafo.innerHTML = nombre;
            contenedor.insertBefore(parrafo, enlace);
        });
      })
      .catch(err => console.error('Error de funcionamiento', err));