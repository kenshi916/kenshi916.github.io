
// Show the ammo list when the button is clicked
function showAmmo() {
    const ammoList = document.getElementById("ammo-list");
    if (ammoList.style.display === "none") {
        ammoList.style.display = "block";
    } else {
        ammoList.style.display = "none";
    }
}
