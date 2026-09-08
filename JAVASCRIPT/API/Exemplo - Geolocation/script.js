//objeto . api. método
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log('Latitude: ', posicao.coords.latitude);
        console.log("Longitude: ", posicao.coords.longitude);
        console.log("Precisão: ", posicao.coords.accuracy);

        const location = document.querySelector("#localizacao");
        location.src = "https://cdn-icons-png.flaticon.com/512/6068/6068781.png";
    },
    function (erro) {
        console.log("Não foi possível obter a localização. ", erro);

        const location = document.querySelector("#localizacao");
        location.src = "https://cdn-icons-png.flaticon.com/512/2951/2951999.png";
    }
)