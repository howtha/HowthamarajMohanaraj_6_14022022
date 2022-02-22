function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city;
        const span = document.createElement( 'span' );
        span.textContent = tagline;
        const p = document.createElement( 'p' );
        p.innerHTML = price, "€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(span);
        article.appendChild(p);
        return (article);
    }
    return { name, picture, tagline, city, price, getUserCardDOM }
}