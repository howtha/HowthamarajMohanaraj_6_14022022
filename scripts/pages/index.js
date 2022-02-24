    async function getPhotographers() {
        fetch("./data/photographers.json")
        .then(response => response.json())
        .then(jsondata => 
            {   
                for (cpt = 0; cpt <= jsondata.photographers.length; cpt++)
                {
                    console.log(jsondata.photographers[cpt].name);
                }
        
        const photographers = 
            {
                "name": "Data",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            }
        });
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    