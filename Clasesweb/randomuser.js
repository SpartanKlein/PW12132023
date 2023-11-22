async function apirandomuser(){
    const respuesta = await fetch("https://randomuser.me/api/")
    const datos= await respuesta.json();
    let foto= document.getElementBy("foto")
    let nombre= document.getElementBy("nombre")
    let telefono= document.getElementBy("telefono")
    foto.setAttribute("src", datos.results[0].picture.large);
    nombre.innerHTML=datos.results[0].name.first+" "+datos.results[0].name.last;
    telefono.innerHTML= datos.results[0].phone;
}