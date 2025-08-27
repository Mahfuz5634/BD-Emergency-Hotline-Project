// loveButtonClickedCount

const loveButton=document.getElementsByClassName('love-button');

for(let love of loveButton){
    love.addEventListener('click',function(){
        let count=Number(document.getElementById('love-count').innerText);
        count+=1;
        document.getElementById('love-count').innerText=count;
       
        love.style.color='red'


    })
}