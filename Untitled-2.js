window.onload = function() {
    populateRelationshipOptions();

    // Add event listener to update the "Person" dropdown when the relationship changes
    // document.getElementById("relationship").addEventListener("change", updatePersonOptions);
};


function populateRelationshipOptions() {
    const relationshipSelect = document.getElementById("relationship");

    // Clear existing options
    relationshipSelect.innerHTML = "";

    // Loop through the relations array and create an <option> for each one
    relations.forEach(relation => {
        const option = document.createElement("option");
        option.value = relation.toLowerCase();  // Use lowercase for the value
        option.textContent = relation;  // Set the display text
        relationshipSelect.appendChild(option);  // Append the option to the select dropdown
    });

    // Call the function to populate the "person" dropdown when the page loads
    updatePersonOptions();
}




// Function to update the "Person" dropdown based on the selected relationship
function updatePersonOptions() {
    const relationshipSelect = document.getElementById("relationship");
    const personSelect = document.getElementById("person");

    // Get the selected relationship value (in lowercase)
    const selectedRelation = relationshipSelect.value;

    // Clear existing options in the person dropdown
    personSelect.innerHTML = "";

    // If a valid relationship is selected, populate the person dropdown
    referenceNodes.forEach(person => {
            const option = document.createElement("option");
            option.value = person.referenceNode ;
            option.textContent = person.name;
            
            personSelect.appendChild(option);  // Append the option to the "person" dropdown
        });
    }


    
