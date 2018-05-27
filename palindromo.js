var palabra = "juani"
var palabrainvertida = ""
var longitud = palabra.length /*.length cuenta la cantidad de letras*/

console.log(palabra, palabrainvertida, longitud)

for (var i = longitud - 1; i >= 0; i--) {
	console.log(palabra [i])
	palabrainvertida = palabrainvertida + palabra[i]
}

console.log(palabrainvertida)


	if (palabrainvertida == palabra) {
		console.log("palindromo")
	}   else 
		console.log("NO!")