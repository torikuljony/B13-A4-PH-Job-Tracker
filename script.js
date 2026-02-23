let interview = [];
let rejected = [];

const total = document.getElementById('total');
const two = document.getElementById('two');
const three = document.getElementById('three');

const allBtn = document.getElementById('all-btn');
const allInterviewBtn = document.getElementById('all-interview-btn');
const allRejectedBtn = document.getElementById('all-rejected-btn');

const cardSection = document.getElementById('cards'); 
const filterSection = document.getElementById('filtered-section');
const mainContainer = document.querySelector('main');

function calculateCount(){
    total.innerText = cardSection.children.length + interview.length + rejected.length;
    two.innerText = interview.length;
    three.innerText = rejected.length;
}

calculateCount();

// Filter button toggle

function toggleStyle(id){
    allBtn.classList.remove('bg-black','text-white');
    allInterviewBtn.classList.remove('bg-black','text-white');
    allRejectedBtn.classList.remove('bg-black','text-white');

    allBtn.classList.add('bg-gray-300','text-black');
    allInterviewBtn.classList.add('bg-gray-300','text-black');
    allRejectedBtn.classList.add('bg-gray-300','text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300','text-black');
    selected.classList.add('bg-black','text-white');

    if(id === 'all-interview-btn'){
        cardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    } else if(id === 'all-btn'){
        cardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if(id === 'all-rejected-btn'){
        cardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}

// Move card function

function moveCard(card, fromList, toList, status){
    const mobile = card.querySelector('.mobile').innerText;
    const react = card.querySelector('.react').innerText;
    const light = card.querySelector('.light').innerText;
    const water = card.querySelector('.water').innerText;

    // Remove from old list

    if(fromList === 'cards'){
        cardSection.removeChild(card);
    } else if(fromList === 'interview'){
        interview = interview.filter(item => item.mobile !== mobile);
    } else if(fromList === 'rejected'){
        rejected = rejected.filter(item => item.mobile !== mobile);
    }

    // Add to new list

    const obj = {mobile, react, light, water, status};
    if(toList === 'interview'){
        interview.push(obj);
        renderInterview();
    } else if(toList === 'rejected'){
        rejected.push(obj);
        renderRejected();
    }

    calculateCount();
}

// Main click listener

mainContainer.addEventListener('click', function(event){
    const card = event.target.closest('.card');
    if(!card) return;

    if(event.target.classList.contains('interview-btn')){

        // Determine current list

        if(cardSection.contains(card)){
            moveCard(card, 'cards', 'interview', 'Interview');
        } else if(filterSection.contains(card)){
            moveCard(card, 'rejected', 'interview', 'Interview');
        }
    } else if(event.target.classList.contains('rejected-btn')){
        if(cardSection.contains(card)){
            moveCard(card, 'cards', 'rejected', 'Rejected');
        } else if(filterSection.contains(card)){
            moveCard(card, 'interview', 'rejected', 'Rejected');
        }
    }
});

// Render interview card

function renderInterview(){
    filterSection.innerHTML = '';
    interview.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card flex justify-between bg-[#fbf9f9]';
        div.innerHTML = `
            <div class="space-y-6 pl-4">
                <div class="py-3 ">
                    <p class="font-bold mobile">${item.mobile}</p>
                    <p class="opacity-55 react">${item.react}</p>
                </div>
                <p class="opacity-55 light">${item.light}</p>
                <div>
                    <button class="bg-[#e0eaf5] py-2 px-5 rounded-[4px]">${item.status}</button>
                    <br>
                    <p class="mt-4 water">${item.water}</p>
                </div>
                <div class="pb-4">
                    <button class="interview-btn border border-green-400 px-5 py-2 rounded-[4px]">Interview</button>
                    <button class="rejected-btn border border-red-400 px-5 py-2 rounded-[4px]">Rejected</button>
                </div>
            </div>
        `;
        filterSection.appendChild(div);
    });
}

// Render rejected cards
function renderRejected(){
    filterSection.innerHTML = '';
    rejected.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card flex justify-between bg-[#fbf9f9]';
        div.innerHTML = `
            <div class="space-y-6 pl-4">
                <div class="py-3 ">
                    <p class="font-bold mobile">${item.mobile}</p>
                    <p class="opacity-55 react">${item.react}</p>
                </div>
                <p class="opacity-55 light">${item.light}</p>
                <div>
                    <button class="bg-[#e0eaf5] py-2 px-5 rounded-[4px]">${item.status}</button>
                    <br>
                    <p class="mt-4 water">${item.water}</p>
                </div>
                <div class="pb-4">
                    <button class="interview-btn border border-green-400 px-5 py-2 rounded-[4px]">Interview</button>
                    <button class="rejected-btn border border-red-400 px-5 py-2 rounded-[4px]">Rejected</button>
                </div>
            </div>
        `;
        filterSection.appendChild(div);
    });
}  