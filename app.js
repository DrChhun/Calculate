function sage() {
    let age = document.getElementById("user_age").value;
    let earth = document.getElementById("earth").innerHTML="Your age on Earth is " + age + " kg";
    let mars = document.getElementById("mars").innerHTML="Your age on Mars is " +Math.round((age / 9.81) * 3.711) + " kg";
    let moon = document.getElementById("moon").innerHTML="Your age on Moon is " +Math.round((age / 9.81) * 1.622) + " kg";
    let jupiter = document.getElementById("jupiter").innerHTML="Your age on Jupiter is " + Math.round((age / 9.81) * 24.79) + " kg";
    let uranus = document.getElementById("uranus").innerHTML="Your age on Uranus is " + Math.round((age / 9.81) * 8.69) + " kg";
    let mercury = document.getElementById("mercury").innerHTML="Your age on Mercury is " + Math.round((age / 9.81) * 3.7) + " kg";
    let venus = document.getElementById("venus").innerHTML="Your age on Venus is " + Math.round((age / 9.81) * 8.87) + " kg";
    let saturn = document.getElementById("saturn").innerHTML="Your age on Saturn is " + Math.round((age / 9.81) * 10.44) + " kg";
    let neptune = document.getElementById("neptune").innerHTML="Your age on Neptune is " + Math.round((age / 9.81) * 11.15) + " kg";
    let pluto = document.getElementById("pluto").innerHTML=((age / 9.81) * 0.06).round + " kg";
}

