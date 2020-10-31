




document.getElementById('submit').addEventListener('click',()=>{
    const text=document.getElementById('string');
    const string=text.value;

    document.getElementById('popup').classList.remove('active');

document.querySelector('input').value="";

    document.getElementById('enterd').innerHTML=``;
    document.getElementById('output').innerHTML=``;

    if(string.length>2){
        const final=string.substr(1,string.length-2);

        document.getElementById('enterd').innerHTML=`You Enterd: ${string}`;
        document.getElementById('output').innerHTML=`Output: ${final}`;
    }else{
        document.getElementById('popup').classList.add('active');
    }


})
