const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensaje.value = textoEncriptado;
  inputTexto.value = "";
}


function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    // console.log("IMPRIME ESTO PARA CONFIRMAR EL FOR");
    // console.log(i);
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
      console.log(stringEncriptada);
    }
  }
  // console.log(`Esta es la stringEncriptada ${stringEncriptada}`);
  return stringEncriptada;
}


function btnDesencriptar() {
  let matrizCodigo = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  
  let stringDesencriptar = inputTexto.value.toLowerCase();
  console.log(stringDesencriptar);

  for (let i = 0; i < matrizCodigo.length; i++) {
    console.log("Entra al for");
    console.log(i);
    // console.log("IMPRIME ESTO PARA CONFIRMAR EL FOR");
    // console.log(i);
    // console.log(stringDesencriptar.includes(matrizCodigo[1][1]));
    if (stringDesencriptar.includes(matrizCodigo[i][1])) {
      // console.log("TOY EN EL IF");
      stringDesencriptar = stringDesencriptar.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
      console.log(stringDesencriptar);
    }

  }

            
  mensaje.value = stringDesencriptar;
}

function copiar() {
  mensaje.focus();
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
 
}
function pegar(){
    navigator.clipboard.readText().then((page) =>{inputTexto.value = page });

  }

