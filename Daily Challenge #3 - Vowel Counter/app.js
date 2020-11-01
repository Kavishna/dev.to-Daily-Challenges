const input=document.getElementById('input');
const inputBtn=document.getElementById('inputBtn');

const vowels = [ 'a','e','i','o','u'];

function countVowels(){
    
    const inputText=input.value.trim();
    input.value='';

    let stringArr=inputText.split('');



    let count=0;
   
    for(let vowel of vowels){
        for(let value of stringArr){
            if(value===vowel){
                count++;
            }
        }
    }

    document.getElementById('output').innerHTML=`<h2>Vowels in 
    </h2> <br/> <small>${inputText}</small> <h1>${count}</h1>`;
}

inputBtn.addEventListener('click',()=>{
    countVowels();
});