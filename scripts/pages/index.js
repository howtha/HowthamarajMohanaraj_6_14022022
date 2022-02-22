    async function getPhotographers() {
        fetch("./data/photographers.json")
        .then(response => 
            {
                return response.json();
            })
        .then(jsondata => 
            {
                console.log(jsondata.photographers);
                console.log(jsondata.photographers.length);

                const photographers = [
                    {
                        for (let cpt = 0; cpt <= jsondata.photographers.length; cpt++)
                        {
                            "name": "Ma data test", //jsondata.photographers[0].name
                            "id": 1,
                            "city": "Paris",
                            "country": "France",
                            "tagline": "Ceci est ma data test",
                            "price": 400,
                            "portrait": "account.png"
                        }
                    }
                ]

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
    