document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
    }, 3000); // Show the popup after 3 seconds

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    document.getElementById('subscribeBtn').addEventListener('click', function() {
        let email = document.getElementById('email').value;
        if (email) {
            alert("Thank you for subscribing!");
            document.getElementById('popup').style.display = 'none';
        } else {
            alert("Please enter a valid email address.");
        }
    });
});
