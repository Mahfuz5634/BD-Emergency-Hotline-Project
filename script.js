// loveButtonClickedCount
const loveButton = document.getElementsByClassName("love-button");

for (let love of loveButton) {
  love.addEventListener("click", function () {
    let count = Number(document.getElementById("love-count").innerText);
    count += 1;
    document.getElementById("love-count").innerText = count;

    love.style.color = "red";
  });
}

// copyButtonSection
const copyButton = document.getElementsByClassName("copyBtn");

for (let CB of copyButton) {
  CB.addEventListener("click", async function () {
    let copycount = Number(document.getElementById("copy-count").innerText);
    copycount += 1;
    document.getElementById("copy-count").innerText = copycount;

    const card = CB.parentNode.parentNode;
    const text = card.querySelector("h1").innerText;
    const num = card.querySelector("h2").innerText;

    try {
      await navigator.clipboard.writeText(`${num}`);
      alert("Copied to clipboard: " + text + " " + num);
    } catch (err) {
      alert("Copy failed. Please copy manually: " + text + " " + num);
      console.error(err);
    }
  });
}

// callButtonSection
const callButton = document.getElementsByClassName("call-button");

for (let CB of callButton) {
  CB.addEventListener("click", function () {
    let count = Number(document.getElementById("coin-count").innerText);

    if (count >= 20) {
      count -= 20;
      document.getElementById("coin-count").innerText = count;

      const card = CB.parentNode.parentNode;
      const text = card.querySelector("h1").innerText;
      const num = card.querySelector("h2").innerText;
      let now = new Date();
      let curTime = now.toLocaleTimeString();
      alert('📞 You are calling ' + text + ': ' + num);

      let newHistory = document.getElementById("history-section");
      let addHistory = document.createElement("div");
      addHistory.innerHTML = `<div  class="bg-[#cdcaca36] w-[98%] h-[70px] m-auto mt-2 flex justify-between items-center rounded-sm">
               <div class="p-2">
                 <h1 class="font-semibold text-[15px]">${text}</h1>
                 <p>${num}</p>
               </div>
               <div class="p-2 text-[13px] ]">${curTime}</div>
               
            </div>`;

      newHistory.appendChild(addHistory);
     
    }
    else{
    alert('🚫 Insufficient Balance!\nYou need at least 20 coins to make a call.');

    }
     

  });
}


// clearbuttonsection
document.getElementById('clearButton').addEventListener('click',function(){
  
  document.getElementById('history-section').innerHTML='';
})