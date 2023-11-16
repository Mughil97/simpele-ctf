document.getElementById('themeToggle').addEventListener('click', function () {
    let currentTheme = document.body.dataset.theme;

    // Toggle between light and dark theme
    if (currentTheme === "dark") {
        // document.body.dataset.theme = "light";
        // document.querySelector('.content').toggleAttribute('hidden');
        // document.getElementById("bulb").src = "assets/light-bulb-on.svg";
    } else {
        // document.body.dataset.theme = "dark";
        // document.querySelector('.content').toggleAttribute('hidden');
        // document.getElementById("bulb").src = "assets/light-bulb.svg";
    }
});

document.getElementById('checkMessage').addEventListener('click', function () {
    const userInput = document.getElementById('decryptedMessage').value.toUpperCase();

    // Call the API here
    fetch('https://darth97.dev/api/v1/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secret: userInput
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.redirect) {
                // Directly open the URL in a new tab
                window.open(data.redirect, '_blank');
            } else if (data.status) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
                var myModal = new bootstrap.Modal(document.getElementById('winModal'), {});
                myModal.show();
            } else {
                alert(data.hint)
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

