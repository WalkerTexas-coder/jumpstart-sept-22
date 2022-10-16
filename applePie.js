// Connect HTML to JS
  alert("You're connected!")

// function appleChanger
//  takes an id of an apple on the HTML page from an onclick
// and changes the HTML element that the ID represents to an emoji

const appleChanger = (id) => {
  if(id === 0){
    return document.getElementById(id).innerHTML = "🍎"
  } else if(id === 1){
    return document.getElementById(id).innerHTML = "🍏"
  } else if(id === 2){
    return document.getElementById(id).innerHTML = "🌈"
  }
}
