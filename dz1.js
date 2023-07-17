let name = +prompt( "Ismingizni kiriting")
while( !isNaN(name)){
  name = +prompt("Iltimos qaytadan urinib ko'ring:")
}
let century = +prompt("Tug'ilgan yilingizni kiriting:")
while ( isNaN(century)) {
  century = +prompt("Iltimos qaytadan urinib ko'ring:")
}

let data = +prompt("Hozirgi yilni kiriting:")
while ( isNaN(data))
 data  = +prompt("Iltimos qaytadan urinib ko'ring:")
 console.log("Sizni yoshingiz " + (data-century));
 alert("🙄🙄🙄   Sizni yoshingiz" + (data-century))
  
