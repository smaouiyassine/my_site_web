document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Collectez les données du formulaire
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Envoyez les données au serveur
        fetch("sendmail.php", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (response.ok) {
                // Gérez le succès, par exemple, affichez un message de confirmation
                alert("Message envoyé avec succès !");
                form.reset();
            } else {
                // Gérez l'erreur, par exemple, affichez un message d'erreur
                alert("Erreur lors de l'envoi du message.");
            }
        })
        .catch((error) => {
            console.error("Erreur :", error);
        });
    });
});
