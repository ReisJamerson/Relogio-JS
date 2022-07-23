function RefrashTime() {
  let display = document.querySelector(".display");
  let now = new Date();
  let time =  RepairTime(now.getHours()) +`:` + RepairTime(now.getMinutes()) +`:` + RepairTime(now.getSeconds());
  display.textContent = time;
}

function RepairTime (numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}

RefrashTime()
setInterval(RefrashTime, 1000);
