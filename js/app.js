const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

//Create element and render cafe
function renderCafe(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    cafeList.appendChild(li);

    deleteRecordFromFirestore(cross);
}

// Saving data into firestore
form.addEventListener('submit', (event) => {
    event.preventDefault(); // To prevent default page reload when clicking submit button
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    });

    form.name.value = '';
    form.city.value = '';
});

// Getting cafe list from firestore
db.collection('cafes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc)
    })
});

// Delete record from firestore
function deleteRecordFromFirestore(cross) {
cross.addEventListener('click',(event)=>{
    let id =event.target.parentElement.getAttribute('data-id'); // Getting id of the doc we want to remove
    db.collection('cafes').doc(id).delete();
})
}
