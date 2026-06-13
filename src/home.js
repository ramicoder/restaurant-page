import myImage from "./image.jpg";
let domLoader = () => {

    const body = document.body;
    const header = document.createElement("header");
    const welcomeMsg = document.createElement("h1");
    const img = document.createElement("img");
    img.src = myImage;
    img.alt = "some restaurant logo";
    const imageRef = document.createElement("p");
    const personRef = document.createElement("a");
    personRef.textContent = "Adhitya Sibikumar";
    const siteRef = document.createElement("a");
    siteRef.textContent = "Unsplash";
    personRef.href = "https://unsplash.com/@adhitya_2505?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    siteRef.href = "https://unsplash.com/photos/subway-logo-with-green-background-vOJk_JT2DcU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    const nav = document.createElement("nav");
    const menu = document.createElement("button");
    const about = document.createElement("button");
    const reviews = document.createElement("button");
    menu.textContent = "Menu";
    about.textContent = "About";
    reviews.textContent = "Reviews";
    const content = document.getElementById("content");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const footer = document.createElement("footer");
    const copyText = document.createElement("p");


    content.appendChild(header);
    welcomeMsg.textContent = "Welcome to Rami's restaurant";
    header.appendChild(welcomeMsg);
    header.appendChild(img);

    imageRef.textContent = "Photo by ";
    imageRef.appendChild(personRef);
    imageRef.append(" on ");
    imageRef.appendChild(siteRef);

    header.appendChild(imageRef);
    nav.appendChild(menu);
    nav.appendChild(about);
    nav.appendChild(reviews);
    header.appendChild(nav);

    p1.innerHTML = "Since you chose to see my project, you deserve to learn some knowledge." + 
    "<br>" + "Let's talk about the first restaurant in the world...";

    p2.textContent = "Archaeological excavations conducted in 2023 at the ancient Sumerian city of Lagash uncovered what researchers believe to be one of the world’s earliest known public food-service establishments, dating to around 2700 BCE during the Early Dynastic period of Mesopotamia. The excavation revealed a well-organized space containing benches for seating, an oven used for cooking, designated food-preparation areas, and large numbers of standardized serving bowls. Some of these vessels still contained residue from food and beer, providing direct evidence of the types of products consumed at the site.";
    p3.textContent = "Archaeological excavations conducted in 2023 at the ancient Sumerian city of Lagash uncovered what researchers believe to be one of the world’s earliest known public food-service establishments, dating to around 2700 BCE during the Early Dynastic period of Mesopotamia. The excavation revealed a well-organized space containing benches for seating, an oven used for cooking, designated food-preparation areas, and large numbers of standardized serving bowls. Some of these vessels still contained residue from food and beer, providing direct evidence of the types of products consumed at the site.";
    p4.textContent = "Researchers interpret the site as a communal dining and drinking venue where residents could gather, socialize, and purchase or receive prepared meals. The discovery offers valuable insight into the social and economic organization of early urban centers, demonstrating that public dining spaces existed thousands of years before the restaurants and taverns of later civilizations. It also highlights the complexity of daily life in ancient Mesopotamian cities, where non-elite populations had access to shared public spaces that fostered social interaction, ood distribution, and community engagement.";

    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(p4);

    copyText.innerHTML = "&COPY; 2026 Rami Daood. All Rights Reserved.";
    content.appendChild(footer);
    footer.appendChild(copyText);

};
export default domLoader;