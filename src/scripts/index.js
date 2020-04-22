const addToList = () => {
    let userInput = document.querySelector('#userText').value;
    //console.log(userInput);
    let newLi = document.createElement("li");
    let text = document.createTextNode(userInput);
    newLi.appendChild(text);
    document.querySelector('.result').appendChild(newLi);
    document.querySelector('#userText').value="";
};

let completeList = document.querySelectorAll(".result");
completeList.forEach(({style: item},i) => {
    if (i % 2 ==1){
        item.backgroundColor = (colorGen);
    }
    //item.paddingLeft = "1rem";
    //item.paddingRight = "1rem";
});

 let thingsToDo = document.querySelectorAll(".result");
 
result.forEach(({style: item}){
    item.backgroundColor = colorGen();
    item.height = "10rem";
});

function colorGen() {
    let result = "#";
    let HexNum = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      result += HexNum[Math.floor(Math.random() * 16)];
      // console.log(result);
    }
    return result;
  };