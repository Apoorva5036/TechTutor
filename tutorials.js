document.getElementById("componentSelect").addEventListener("change", function() {
    const component = this.value;
    const descriptionText = document.getElementById("descriptionText");

    // Update description based on the selected component
    switch (component) {
        case "resistor":
            descriptionText.innerHTML = "A resistor is a passive two-terminal electrical component that implements electrical resistance as a circuit element.";
            break;
        case "capacitor":
            descriptionText.innerHTML = "A capacitor is a device that stores electrical energy in an electric field. It is widely used in electronic circuits for filtering applications.";
            break;
        case "led":
            descriptionText.innerHTML = "An LED (Light Emitting Diode) is a semiconductor light source that emits light when current flows through it in the forward direction.";
            break;
        case "transistor":
            descriptionText.innerHTML = "A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power.";
            break;
        default:
            descriptionText.innerHTML = "Select a component to learn more...";
            break;
    }
});
