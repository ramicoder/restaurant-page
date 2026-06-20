
const reviewsLoader = () => {
    const content = document.getElementById("content");
    let tickerItems = "";
    for (let i = 0; i < 45; i++) {
        tickerItems += '<div class="ticker-item">REVIEWS</div>\n';
    }
    content.innerHTML = `
    <h2>Reviews and testimonials</h2>
    <div class="reviews-content">
   
        <div class="ticker-container">
            <div class="ticker-track">
                <div class="ticker-group">
                    ${tickerItems};
                </div>
            </div>
        </div>
        <div class="cards-content">
            <div class="card">
                <h3>Elon Musk      ⭐ ⭐ ⭐ ⭐ ⭐</h3>
                <p>"Exceptional application of first principles thinking in web development. 
                The CS50 fundamentals are incredibly solid, and his hardcore engineering approach to 
                Data Structures is exactly what you need to build scalable architecture. 
                Great menu. Will be returning."</p>         
            </div>
            <div class="card">
                <h3>Mark Cuban     ⭐ ⭐ ⭐ ⭐ ⭐</h3> 
                <p>"I look for operators who know how to grind, and this guy has been maturing his skillset since 2006. 
                Top of his university class, teaching DSA, and building real applications that solve problems. 
                That is the exact kind of hustle I want to see. I'd invest in this restaurant immediately."</p>
            </div>
            <div class="card">
                <h3>Dana White      ⭐ ⭐ ⭐ ⭐ ⭐</h3> 
                <p>"This kid is an absolute savage in the kitchen. 
                You can't teach that kind of grit. He takes that BJJ blue belt mentality, 
                steps onto the mat with a complex algorithm, and just chokes it out.
                Relentless work ethic. I'd put him in the main event any day."</p>
            </div>
        </div>
        <div class="ticker-container">
            <div class="ticker-track">
                <div class="ticker-group">
                    ${tickerItems};
                </div>
            </div>
        </div>
    </div>`
}

export default reviewsLoader