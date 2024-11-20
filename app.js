// Sample tree data
const relations = [
    // "Parent",
    // "Husnband",
    // "Wife",
    // "Child",
    // "Spouse",   
    // "Sibling",
    "Son",
    "Daughter",
    "Husband",
    "Wife",
    // "Aunt/Uncle",
    // "Cousin"
];
// Define the relations array and people object

let node=0

const referenceNodes= [
    {
        name: "Family Tree",
        referenceNode: "mainnode",
    },
    {
        name: "Seprate family",
        referenceNode: "tree",
    }
]
let familyTree = [];  // To store the family members

const familyForm = document.getElementById("family-form");
const familyTreeContainer = document.getElementById("family-tree");



// Function to update the family tree UI

familyForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page


    // Get form values  
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const relationship = document.getElementById("relationship").value;
    const reference = document.getElementById("person").value;

    let member={
        id: node,
        name: name,
        gender: gender,
        relationship: relationship,
        referenceNode: reference,
    }
    addnode(member);

    // Clear the form fields
    familyForm.reset();
});
let selectednode=[]

function addnode(data) {
    const reference = document.getElementById(`${data.referenceNode}`);
console.log(reference)

    reference.style.content=`${data.relationship}`;
    const nd = document.createElement("li");
    nd.innerHTML=`<div class="sticky" draggable="true">${data.name}, \n${data.relationship} Of ${data.referenceNode}</div>
    
    <ul id="child${node}"></ul>`
    nd.addEventListener("dragstart", () => {
        
        //on drag add class draggin
        selectednode.push(nd)
    //   setTimeout(() => nd.id=`selectednode`, 0);
    });
  
    // Add dragend event listener
    // nd.addEventListener("dragend", () => {
    //       // nd.remove(id)
    //         selectednode.pop()
    // });

    let newref={
        name: data.name,
        referenceNode:`child${node}`
    }

    console.log(reference.firstElement)

    reference.insertBefore(nd,reference.firstElement)
    referenceNodes.push(newref)
    updatePersonOptions()
    node++
}

const sortableList = document.querySelector(".tree");
let el;

      
const initSortableList = (e) => {

    console.log(e)
    //find the which class is selected by finding where draging class added
      const draggingItem = selectednode[0];
      const nd = document.createElement("li");

      nd.innerHTML=draggingItem.innerHTML;
      let x = e.clientX;
      
      let y = e.clientY;
      console.log(draggingItem)
      el = document.elementFromPoint(x, y);
      console.log(selectednode)
      el.nextElementSibling.appendChild(nd)
     
    selectednode=[]
           
  }

  
sortableList.addEventListener("dragend", initSortableList);
  