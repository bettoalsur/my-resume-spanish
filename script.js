
const sidebar = document.querySelector(".sidebar");
const containers = [...document.querySelectorAll(".container")];
const containerTitles = [...document.querySelectorAll(".container > span")];

function clickToggle() {
    if (window.innerWidth > 750) return;

    if (sidebar.classList.contains("open")) {
        containers.forEach(container => container.classList.remove("active"));
    }

    sidebar.classList.toggle("open");
}

containerTitles.forEach(title => {
    title.addEventListener("click", (e) => {

        if (window.innerWidth > 750) return;

        const title = e.currentTarget;
        const container = title.parentNode;

        if (!sidebar.classList.contains("open")) {
            sidebar.classList.add("open");
        }

        containers.forEach( obj => {
            if (obj != container) obj.classList.remove("active");
        } );
        container.classList.toggle("active");
    });
});

function sendMessage() {
    let mensagem = "Olá Alberto, ";
    var wapMes = encodeURIComponent(mensagem);
    var prep = "https://wa.me/+5511994253957?text=";
    window.open(prep + wapMes);
}
