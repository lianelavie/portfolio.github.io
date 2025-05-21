 <><script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script></>

        VANTA.WAVES({
            el: "#navbar",
            color: 0xff9900,
            shininess: 70,
            waveHeight: 25,
            waveSpeed: 0.5,
            zoom: 1
        });

    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
   
  
        document.addEventListener("DOMContentLoaded", function() {
            const loader = document.getElementById("loader");
            setTimeout(() => {
                loader.style.display = "none";
            }, 1000); // Hides after 1 second
        });

        // Back to top
        const backToTopButton = document.getElementById("backToTop");
        window.onscroll = function () {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        // Add flip functionality to cards:
        document.querySelectorAll('.flip-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // If clicked target is the repo link, do nothing (let it open)
                if (e.target.tagName.toLowerCase() === 'a') {
                    return;
                }
                // Toggle flip
                card.classList.toggle('flipped');
            });
            // Optional: flip back when pressing Escape key if flipped
            card.addEventListener('keydown', e => {
                if (e.key === 'Escape' && card.classList.contains('flipped')) {
                    card.classList.remove('flipped');
                }
            });
        });
