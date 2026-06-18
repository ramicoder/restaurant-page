
const reviewsLoader = () => {
    const content = document.getElementById("content");
    const reviewsContainer = document.createElement("div");
    reviewsContainer.className = "reviews-content"
    reviewsContainer.innerHTML = `
    <div class="reviews-content">
        <h2>Reviews and testimonials</h2>
        <div class="card">
        
        </div>
        <div class="card">
        </div>
        <div class="card">
        </div>
    </div>
    
    `
    
    content.append(reviewsContainer);
    const footer = document.createElement("footer");
    const copyText = document.createElement("p");
    copyText.innerHTML = "&COPY; 2026 Rami Daood. All Rights Reserved.";
    content.appendChild(footer);
    footer.appendChild(copyText);
}

export default reviewsLoader