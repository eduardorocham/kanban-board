const leads = document.querySelectorAll('.statusBoard-lead');
const dropzones = document.querySelectorAll('.statusBoard-leads');

// our leads
leads.forEach((lead) => {
    lead.addEventListener('dragstart', dragstart)
    lead.addEventListener('drag', drag)
    lead.addEventListener('dragend', dragend)
})

function dragstart () {
    // console.log('Start dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    // this = lead
    this.classList.add('is-dragging')
}

function drag() {
    // console.log('Is dragging')
}

function dragend() {
    // console.log('Stop drag')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

    // this = card
    this.classList.remove('is-dragging')
}

// place where we will drops leads

dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
})

function dragenter() {
    // console.log('Enter in zone')
}

function dragover() {
    // console.log('Over')
    // this = dropzone

    // get dragging lead
    const leadBeInDragged = document.querySelector('.is-dragging');

    this.appendChild(leadBeInDragged)
}

function dragleave() {
    // this = dropzone
    // console.log('Leave')
}

function drop() {
    // console.log('Dropped')
}