export function navigatetoPage (navigate, path){
    if(!path){
        console.error('Path is required')
        return;
    }
    navigate(path)
}


// function reposavel pela logica do input data para retorna barras
export  function  formatDate  (value){
  const digits = value.replace(/\D/g, ''); // Expresção regular que ira remover todos caracteres n numericos
  if (digits.length <= 2) {
    return digits;
  } else if (digits.length <= 4) {
    return `${digits.slice(0, 2)}/ ${digits.slice(2)}`; //extrei o valor incial e final onde valor final não é incluido 
  } else {
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
  }
};

//function resposavel por delimitar o quanto quero de objetos no array

export function deleimitaArray(obj, prop, max, nome){
 const nun = Number(max)
    if(obj[prop].length >= nun ){
      alert(`O Você só pode adicionar no máximo ${nun} ${nome}`)
      return false; 
    }
    return true; 
}


//