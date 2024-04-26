let form = document.getElementById("inscriptionForm");
let nomInput = document.getElementById("nom");
let prenomInput = document.getElementById("prenom");
let emailInput = document.getElementById("email");
let motDePasseInput = document.getElementById("motDePasse");


form.addEventListener("submit", function(event) {
    if (!nomInput.value || !prenomInput.value || !emailInput.value || !motDePasseInput.value) {
        event.preventDefault();
        alert("Veuillez remplir tous les champs.");
    }
});