const mint = document.getElementById("mintAddress").textContent.trim();
const btn = document.getElementById("copyBtn");
const label = btn.querySelector("span");

btn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(mint);
  } catch (err) {
    const area = document.createElement("textarea");
    area.value = mint;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  btn.classList.add("copied");
  label.textContent = "Copied";
  setTimeout(() => {
    btn.classList.remove("copied");
    label.textContent = "Copy";
  }, 1600);
});
