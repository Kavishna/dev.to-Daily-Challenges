const myStr=`1233.00 125 Hardware;! 24.8?; 123 Flowers 93.5 127 Meat 120.90 120 Picture 34.00 124 Gasoline 11.00 123 Photos;! 71.4?; 122 Picture 93.5 132 Tires;! 19.00,?; 129 Stamps 13.6 129 Fruits{} 17.6 129 Market;! 128.00?; 121 Gasoline;! 13.6?;`;


const givenCheckBook1=myStr.split(' ');

const data1=givenCheckBook1.map(data =>{
    return data.replace(/[&\/\\#,+()$~%!;'":*?<>{}]/g, '')
})

let processedArr=[];

for(let i=1;i<data1.length;i+=3){
    processedArr.push(`${data1[i]} ${data1[i+1]} ${data1[i+2]}`)
}



// const givenCheckBook=[
//     '1233.00',  
//     '125 Hardware;! 24.8?;',
//     '123 Flowers 93.5',
//     '127 Meat 120.90',
//     '120 Picture 34.00',
//     '124 Gasoline 11.00',
//     '123 Photos;! 71.4?;',
//     '122 Picture 93.5',
//     '132 Tires;! 19.00,?;',
//     '129 Stamps 13.6',
//     '129 Fruits{} 17.6',
//     '129 Market;! 128.00?;',
//     '121 Gasoline;! 13.6?;',
// ]

// const processedArr=givenCheckBook.map(data =>{
//     return data.replace(/[&\/\\#,+()$~%!;'":*?<>{}]/g, '')
// })

let finalArr=[];


for(let j=1;j<processedArr.length;j++){
    let temp=processedArr[j].split(' ');
    let finalObj={}

    finalObj['id']=temp[0];
    finalObj['catogery']=temp[1];
    finalObj['amount']=parseFloat(temp[2]);
    finalArr.push(finalObj);

}


const ul=document.querySelector('ul');

let total=0;

const li=document.createElement('li');
li.innerHTML=`Original_Balance: ${data1[0]}`;
ul.appendChild(li)

for(let value of finalArr){

    
    
    let balance=parseFloat(data1[0]);
    total+=value.amount;
    console.log(total);
    const li=document.createElement('li')
     li.innerHTML=`${value.id} <span style="color:rgb(160, 149, 149)">${value.catogery}</span> ${value.amount} <span style="color:rgb(160, 149, 149)">Balance</span> ${(balance-total).toFixed(2)}`
     ul.appendChild(li);
}

const li2=document.createElement('li');
li2.innerHTML=`Total expense: ${total.toFixed(2)}`;
ul.appendChild(li2)

const average=total/processedArr.length;

const li3=document.createElement('li');
li3.innerHTML=`Average expense: ${average.toFixed(2)}`;
ul.appendChild(li3)
