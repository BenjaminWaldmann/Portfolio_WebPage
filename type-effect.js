
const typewriters = document.getElementsByClassName("type-writer-effect")
for (var typewriter of typewriters) {

    text = typewriter.innerHTML;
    typewriter.innerHTML = text[0];

    setTimeout(() => addchar(1), 100); 

    function addchar(i)
    {
        if(i >= text.length){
            return;
        }
        typewriter.innerHTML += text[i]
        setTimeout(() => addchar(i+1), Math.floor(Math.random()) *300 + 110);
    }
}


        

