async function getPhotographers() {
    fetch("./data/photographers.json")
    .then(response => response.json())
    .then(jsondata => 
        {   
            for (cpt = 0; cpt <= jsondata.photographers.length; cpt++)
            {
                //console.log(jsondata.photographers[cpt].name);
                const photographers = 
                    {
                        "name": jsondata.photographers[cpt].name,
                        "id": jsondata.photographers[cpt].id,
                        "city": jsondata.photographers[cpt].city,
                        "country": jsondata.photographers[cpt].country,
                        "tagline": jsondata.photographers[cpt].tagline,
                        "price": jsondata.photographers[cpt].price,
                        "portrait": jsondata.photographers[cpt].portrait 
                    }
                console.log(photographers);
            }
            return ({
                photographers: [...photographers, ...photographers]})
        })
    .catch(err => console.log("Erreur" + err))
    
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
