# Clase 5 CSS
## Display
Modifica las etiquetas HTML para mostrarse en bloque o en linea. Bloque h1, en linea p.
* display:inline ahora tienen margin padding y border en el eje vertical no aplica margin. El padding y el border se 
aplica pero no empujan. Se superponen. Tampoco aplica width y height, se ajusta al contenido.
* display:block se ubica uno debajo del otro, aplica margin,padding, border y empuja los otros elementos. Aplica widht 
y height. Margenes del eje vertical funcionan.
* display:inline-block Se colocan uno al lado de la otra, no hay etiquetas por defecto asi. combina lo mejor de las eti
quetas anteriores. 
**vertical-align**
tiene 4 valores esta propiedad: baseline, bottom, top y middle.

## Float
Separa la etiqueta de las otras en el documento y la deja flotando en otra capa secundaria. Por eso adopta 
caracteristicas distintas a las demas. Tiene left o right.
* comportamiento similar a inline-block
* dos elementos flotados que no entren en la misma linea se empuja el segundo hacia abajo.
* son elementos de abajo ocupan el lugar del que flota.
La propiedad **clear** permite que los elementos que son ocultos por el flotado ocupen el espacio que corresponde para 
que sea vea.
* Ver elementos flotados en pdf.

## Posicion
Va a determinar como sera el posicionamiento indistinto del tipo de caja. 
* Estatico por defecto
* Relativo tiene top, left, right y bottom. sigue ocupando espacio ninguna lo empuja. La caja tapada no desplaza su 
contenido. Aplica profundidad mediante la propiedad z. De menor a mayor se numera, siendo el mas grande el primero que 
se ve.
* Absoluto utiliza otras etiquetas de referencia








