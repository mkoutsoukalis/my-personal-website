// Core Deliverables

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/sections")
        .then((response) => response.json())
        .then((sections) => {
            const boxContainers = document.querySelectorAll(".box-container");
            // Loop through each box container and populate with data
            boxContainers.forEach((boxContainer, index) => {
                const sectionData = sections[index];
                console.log(sectionData);
                const box = document.createElement("div");
                box.classList.add("box");
                const title = document.createElement("h2");
                title.textContent = sectionData.title;
                const content = document.createElement("div");
                content.classList.add("content");
                const details = document.createElement("p");
                details.textContent = sectionData.details;
                box.appendChild(title);
                box.appendChild(content);
                content.appendChild(details);
                boxContainer.appendChild(box);
                if (sectionData.images) {
                    const img = document.createElement("img");
                    img.src = sectionData.images;
                    img.classList.add("Img");
                    if (sectionData.id === 4){
                        img.addEventListener('click', (event) => {
                        window.open(sectionData.url, "_blank")
                        })
                    }
                    box.appendChild(img);
                }
                // Add event listeners for hover effect
                box.addEventListener('mouseover', () => {
                    // Add the 'show' class to the content div on mouseover
                    content.classList.add('show');
                    });
                box.addEventListener('mouseout', () => {
                    // Remove the 'show' class from the content div on mouseout
                    content.classList.remove('show');
                    });
            });
            // Call the function to handle video autoplay
            handleVideoAutoplay();
        });   
    // Function to handle video autoplay
    function handleVideoAutoplay() {
        // Autoplay the video on load
        var video = document.getElementById("autoplay-video");
        video.autoplay = true;
        video.controls = false; // Hide controls
        // Loop the video
        video.addEventListener("ended", function() {
            video.currentTime = 0;
            video.play();
        });
    }  
});