const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

window.addEventListener("mousemove", (e) => {

    let xValue = e.clientX - window.innerWidth / 2;
    let yValue = e.clientY - window.innerHeight / 2;

    img2.style.transform = `translate( calc(0% - (${xValue * 0.05}px)), calc(0% - (${yValue * 0.05}px)))`;
});
