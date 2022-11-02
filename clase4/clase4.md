# Clase 4 CSS
Se puede usar mas de un estilo en un mismo html. Se pueden aplicar varias reglas css a la misma etiqueta.
## Tres grupos que engloban todas las reglas
* Formato de texto (Se heredan)
* Formato de cajas (No se heredan)
* Ubicacion de elementos (No se heredan)

### Formato de texto
Se heredan de padres a hijos, por ejemplo aplica a cajas adentro de otras cajas padre.
font-size(medidas)
font-weight(normal o **bold**)
font-style(normal o italica)
font-variant(normal o small caps)
font-family(Familia tipografica para usar)

text-decoration
text-transform
ver pdf

line-height(Debe ser mayor o igual al tamaño de la fuente, un valor optimo 1.3 el tamaño del texto)
color(color de texto solamente)

hasta que otro elemento sobreescriba la propiedad heredada va a heredar del contenedor padre
los links tienen su propio estilo por defecto

#### pseudo clase
* a:link() vinculo en reposo
* a:hover() puntero del mouse encima
* a:active() mientras el usuario mantiene el click
* a:visited() el vinculo fue visitado

### Propiedades de cajas
Para css todos los elementos son considerados cajas, "todo es una caja" BOX MODEL
padding: distancia entre el elemento y el borde
margin: distancia entre el borde y la caja en si
tiene que ver con el top, left, right, bottom. margin, border, padding, y el content que es la etiqueta en si
que a su vez adentro tiene un width y un height.
explico shorthand:
margin: 10px 20px (aplica 10px a top y bottom, 20px a right y left)
margin: 10px (todos los lados)
margin: x x x x (top,right,bottom,left)
tambien hay margin-top, padding-top y asi para todos los lados.
border tiene propiedades especiales shorthand:
border-color (color)
border-width (grosor)
border-style (estilo del borde)
border: **medida** **estilo** **color**
ej border: 1px solid black

**Para sacar los margin y padding que aplica el navegador por defecto**
* { margin: 0, padding:0 }

















































