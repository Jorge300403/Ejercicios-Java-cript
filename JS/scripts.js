function ejer1(numero){
    if(numero == ""){
        document.getElementById("output_numero").innerHTML = "Ingrese algun número";
    }else if(numero%2 == 0){
        document.getElementById("output_numero").innerHTML = "El número " + numero + " es par";
    }else{
        document.getElementById("output_numero").innerHTML = "El número " + numero + " es impar";
    }  
}

function ejer2(numero){
    if(numero == ""){
        document.getElementById("output_numero").innerHTML = "Ingrese algun número";
    }else{
        var i;
        for(i=1; i<=10+1; i++){
            document.getElementById("x" + (i)).innerHTML = numero*i;
        }
    }  
}

function ejer3(numero1, numero2){
    if(numero1=="" || numero2 ==""){
        if(numero1==""){
            document.getElementById("output_numero").innerHTML = "Ingrese su primer número";
        }else{
            document.getElementById("output_numero").innerHTML = "Ingrese su segundo número";
        }
    }else{
        var resultado=0;
        for(var i=0; i<numero2; i++){
            resultado+=parseInt(numero1);
        }
        document.getElementById("output_numero").innerHTML = "El producto es " + resultado;
    }
}

function ejer4(numero){
    var long = numero.length;
    let arreglo = [];
    let arreglo2 = [];
    var mayor = -1;
    for(i=0; i<long; i++){
        arreglo.push(numero[i]);
        if(parseInt(mayor) < parseInt(numero[i])){
            mayor = numero[i];
        }
    }

    for(i=0; i<long; i++){
        if(parseInt(arreglo[i]) == parseInt(mayor)){
            arreglo2.push(i+1);
        }
    }

    document.getElementById("output_numero").innerHTML = "El mayor es: " + mayor + " y se encuentra en : [" + arreglo2 + "]";
}

function ejer5(numero1, numero2){
    var long = numero1.length;
    var long2 = numero2.length;
    let arreglo = [];
    let arreglo2 = [];
    let arreglo3 = [];
    let digito="";
    var i = 0;
    for(i=0; i<long; i++){
        if(numero1[i] == ","){
            arreglo.push(digito);
            digito="";
        }else{
            digito+=numero1[i];
        }
    }
    for(i=0; i<long2; i++){
        if(numero2[i] == ","){
            arreglo2.push(digito);
            digito="";
        }else{
            digito+=numero2[i];
        }
    }

    if(arreglo.length != arreglo2.length){
        document.getElementById("output_numero").innerHTML = "Los vectores no tienen el mismo tamaño";
    }else{
        for(i=0; i<arreglo.length; i++){
            arreglo3.push(parseInt(arreglo[i]) + parseInt(arreglo2[i]));
        }
        document.getElementById("output_numero").innerHTML = "[" + arreglo3 + "]";
    }  
}

function ejer6(numero1){
    var long = numero1.length;
    let arreglo = [];
    let digito = "";
    var i;
    var sumaT =0;
    for(i=0; i<long; i++){
        if(numero1[i] == ","){
            arreglo.push(digito);
            digito="";
        }else{
            digito+=numero1[i];
        }
    }
    for(i=0; i<arreglo.length; i++){
        sumaT = parseInt(sumaT) + parseInt(arreglo[i]);
    }
    document.getElementById("output_numero").innerHTML = "[" + arreglo + "] tiene media: " + (sumaT/arreglo.length);
}

function ejer7(numero1){
    var long = numero1.length;
    let arreglo = [];
    let digito = "";
    let aux = "";
    var i;
    for(i=0; i<long; i++){
        if(numero1[i] == ","){
            arreglo.push(digito);
            digito="";
        }else{
            digito+=numero1[i];
        }
    }
    let arreglo2 = arreglo;
    for(i=0; i<arreglo2.length-1; i++){
        for(var j=i+1; j<arreglo2.length; j++){
            if(parseInt(arreglo2[i]) > parseInt(arreglo2[j])){
                aux = arreglo2[i];
                arreglo2[i] = arreglo2[j];
                arreglo2[j] = aux;
            }
        }
    }
    document.getElementById("output_numero").innerHTML ="Arreglo ordenado [" + arreglo2 + "]";
}

function ejer8(cadena){
    var long = cadena.length;
    let arreglo = [];
    let arreglo2 = [];
    let arreglo3 = [];
    let arreglo4 = [];
    let palabra = "";
    for(i=0; i<long; i++){
        if(cadena[i] == " "){
            arreglo.push(palabra);
            palabra="";
        }else{
            palabra+=cadena[i];
        }
    }
    for(i=0; i<arreglo.length; i++){
        arreglo2.push(arreglo[i].length);
        arreglo3.push(arreglo[i].toUpperCase());
        arreglo4.push(arreglo[i].toLowerCase());
    }
    document.getElementById("output_numero").innerHTML ="[" + arreglo + "] con longitudes [" + arreglo2 + "] en mayúsculas [" + arreglo3 + "] en minúsculas [" + arreglo4 + "]";
}

function condSimple(numero1){
    var n1 = parseInt(numero1);
    if((n1 >= 18)){
        alert("Puede votar");
    }
}

function condMultiple(numero1, numero2, numero3){
    var n1 = parseInt(numero1);
    var n2 = parseInt(numero2);
    var n3 = parseInt(numero3);
    if((n1 > n2) && (n1 > n3)){
        document.getElementById("output_numero").innerHTML = "El mayor es : " + n1;
    }else if((n2 > n3) && (n2 > n1)){
        document.getElementById("output_numero").innerHTML = "El mayor es : " + n2;
    }else{
        document.getElementById("output_numero").innerHTML = "El mayor es : " + n3;
    }
}

function condSwitch(nombre){
    nombre = nombre.toUpperCase();
    switch(nombre){
        case 'JORGE':
            document.getElementById("output_numero").innerHTML = "Hola Jorge!";
            break;
        case 'ALEXIS':
            document.getElementById("output_numero").innerHTML = "Hola Alexis!";
            break;
        case 'CESAR':
            document.getElementById("output_numero").innerHTML = "Hola Cesar!";
            break;
        case 'ALAN':
            document.getElementById("output_numero").innerHTML = "Hola Alan!";
            break;
        case 'DANIEL':
            document.getElementById("output_numero").innerHTML = "Hola Daniel!";
            break;
        case 'PEDRO':
            document.getElementById("output_numero").innerHTML = "Hola Pedro!";
            break;
        default:
            document.getElementById("output_numero").innerHTML = "Ese nombre no existe.";
    }
}

function cicloFor(){
    let arreglo = [];
    let arreglo2 = [];
    var sumatoria = 0;
    for(var i=1; i<=50; i++){
        if(i%2 == 0){
            arreglo.push(i);
        }
        sumatoria = parseInt(sumatoria) + parseInt(i);
    }
    for(i=51; i<=100; i++){
        if(i%2 == 0){
            arreglo2.push(i);
        }
        sumatoria = parseInt(sumatoria) + parseInt(i);
    }
    document.getElementById("output_numero").innerHTML = "Números pares [" + arreglo;
    document.getElementById("output_numero2").innerHTML = arreglo2 + "]";
    document.getElementById("output_numero3").innerHTML = "La sumatoria es: " + sumatoria;
    
}

function cicloWhile(){
    let arreglo = [];
    let arreglo2 = [];
    var sumatoria = 0;
    var i=1;
    while(i<=50){
        if(i%2 == 0){
            arreglo.push(i);
        }
        sumatoria = parseInt(sumatoria) + parseInt(i);
        i++;
    } 
    while(i<=100){
        if(i%2 == 0){
            arreglo2.push(i);
        }
        sumatoria = parseInt(sumatoria) + parseInt(i);
        i++;
    }
    document.getElementById("output_numero").innerHTML = "Números pares [" + arreglo;
    document.getElementById("output_numero2").innerHTML = arreglo2 + "]";
    document.getElementById("output_numero3").innerHTML = "La sumatoria es: " + sumatoria;
}

function cicloDo(){
    let arreglo = [];
    let arreglo2 = [];
    var sumatoria = 0;
    var i=1;
    do{
        if(i%2 == 0){
            arreglo.push(i);
        }
        sumatoria = parseInt(sumatoria) + parseInt(i);
        i++;
    }while(i<=50);
    do{
        if(i%2 == 0){
            arreglo2.push(i);
        }
        sumatoria = parseInt(sumatoria) + parseInt(i);
        i++;
    }while(i<=100);
    document.getElementById("output_numero").innerHTML = "Números pares [" + arreglo;
    document.getElementById("output_numero2").innerHTML = arreglo2 + "]";
    document.getElementById("output_numero3").innerHTML = "La sumatoria es: " + sumatoria;
}

function bubble(numero1){
    var long = numero1.length;
    let arreglo = [];
    let digito = "";
    let aux = "";
    var i;
    for(i=0; i<long; i++){
        if(numero1[i] == ","){
            arreglo.push(digito);
            digito="";
        }else{
            digito+=numero1[i];
        }
    }
    let arreglo2 = arreglo;
    for(i=0; i<arreglo2.length-1; i++){
        for(var j=i+1; j<arreglo2.length; j++){
            if(parseInt(arreglo2[i]) > parseInt(arreglo2[j])){
                aux = arreglo2[i];
                arreglo2[i] = arreglo2[j];
                arreglo2[j] = aux;
            }
        }
    }
    document.getElementById("output_numero").innerHTML ="Arreglo ordenado [" + arreglo2 + "]";
}

function insertion(numero1){
    var long = numero1.length;
    let arreglo = [];
    let digito = "";
    let aux = "";
    var i;
    for(i=0; i<long; i++){
        if(numero1[i] == ","){
            arreglo.push(digito);
            digito="";
        }else{
            digito+=numero1[i];
        }
    }
    let arreglo2 = arreglo;
    for(i=1; i<arreglo2.length; i++){
        aux = arreglo2[i];
        for(var j=i-1; j>=0 && parseInt(aux) < parseInt(arreglo2[j]); j--){
            arreglo2[j+1] = arreglo2[j];
        }
        arreglo2[j+1] = aux;
    }
    document.getElementById("output_numero").innerHTML ="Arreglo ordenado [" + arreglo2 + "]";
}

function selection(numero1){
    var long = numero1.length;
    let arreglo = [];
    let digito = "";
    let aux = "";
    var i;
    var posicion;
    for(i=0; i<long; i++){
        if(numero1[i] == ","){
            arreglo.push(digito);
            digito="";
        }else{
            digito+=numero1[i];
        }
    }
    let arreglo2 = arreglo;
    for(i=0; i<arreglo2.length-1; i++){
        posicion = i;
        for(var j=i+1; j<arreglo2.length; j++){
            if(parseInt(arreglo2[j]) < parseInt(arreglo2[posicion])) posicion=j;
        }
        aux = arreglo2[i];
        arreglo2[i] = arreglo2[posicion];
        arreglo2[posicion] = aux;
    }
    document.getElementById("output_numero").innerHTML ="Arreglo ordenado [" + arreglo2 + "]";
}

function myFunction() {

    // Create an "li" node:
    const node = document.createElement("div");
    
    // Create a text node:
    const input = document.createElement("input");
    
    // Append the text node to the "li" node:
    node.appendChild(input);
    
    // Append the "li" node to the list:
    document.getElementById("listas").appendChild(node);
    }