// script.ts
document.addEventListener("DOMContentLoaded", () => {
  const skilltoggle = document.getElementById("skilltoggle") as HTMLElement;
  const button = document.querySelector(".btn") as HTMLButtonElement;

  button.addEventListener("click", () => {
    if (skilltoggle.style.display === "none") {
      skilltoggle.style.display = "block";
    } else {
      skilltoggle.style.display = "none";
    }
  });
});
