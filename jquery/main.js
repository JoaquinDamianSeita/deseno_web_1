$(() => {
  var suma = 0;

  $(".suma").click( () =>{
    suma = suma + 1
    $("p").text(suma);
  });

  $(".resta").click( () =>{
    suma = suma - 1
    $("p").text(suma);
  });
});