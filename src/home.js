import myImage from "./image.jpg";
let domLoader = () => {

    const body = document.body;
    
    const content = document.getElementById("content");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const footer = document.createElement("footer");
    const copyText = document.createElement("p");

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