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
    const text = card.querySelector('h1').innerText;
    const num  = card.querySelector('h2').innerText;

    try {
      await navigator.clipboard.writeText(`${num}`);
      alert("Copied to clipboard: " + text + " " + num);
    } catch (err) {
      alert("Copy failed. Please copy manually: " + text + " " + num);
      console.error(err);
    }
  });
}
