import cs50xImg from "./cs50x.jpg";
import cs50sqlImg from "./cs50sql.jpg";

const aboutLoader = () => {

    const content = document.getElementById("content");
    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-content";

    aboutContainer.innerHTML = `
        <section class="hero-section">
            <h2>Slow Cooked. Maturing to Perfection.</h2>
            <p>Great things take time. Founded in 2006, this kitchen operates on one fundamental principle: our secret sauce is relentless determination. We don't shy away from the hard things, because the toughest recipes yield the greatest goals.</p>
        </section>

        <section class="story-section">
            <h2>The Chef's Journey</h3>
            <p>The journey started in Canada before bringing the kitchen to Erbil. True discipline wasn't just learned in a classroom; it was forged on the mats earning a blue belt and taking home medals in BJJ. That exact same grit was brought to the academic world—scaling from mastering the curriculum to teaching complex math to university engineering peers.</p>
        </section>

        <section class="menu-section">
            <h3>The Menu</h3>
            <div class="menu-grid">
                <div class="menu-item">
                    <img src="${cs50xImg}" alt="CS50x Certification" class="cert-img">
                    <img src="${cs50sqlImg}" alt="CS50SQL Certification" class="cert-img">
                    <div class="item-details">
                        <h4>Appetizers (Foundations)</h4>
                        <p>CS50x & CS50SQL Certifications.</p>
                    </div>
                </div>
                <div class="menu-item">
                    
                    <div class="item-details">
                        <h4>Main Courses (Expertise)</h4>
                        <p>Serving up instruction in Data Structures, Algorithms, and Web Development.</p>
                    </div>
                </div>
                <div class="menu-item chef-special">
                    <div class="item-details">
                        <h4>Chef's Specials (Achievements)</h4>
                        <p>Consistently ranking at the absolute top of the university cohort.</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    content.appendChild(aboutContainer);
    const footer = document.createElement("footer");
    const copyText = document.createElement("p");
    copyText.innerHTML = "&COPY; 2026 Rami Daood. All Rights Reserved.";
    content.appendChild(footer);
    footer.appendChild(copyText);
   
}
export default aboutLoader;