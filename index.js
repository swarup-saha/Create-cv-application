console.log("Welcome cv applicant");
// CANDIDATE INFORMATION
const data = [
    {
        name: 'rohan das',
        age: 32,
        title: ' Software Engineer',
        city: 'kolkata',
        language: 'computer c programing',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'bapai',
        age: 35,
        title: ' Software Engineer',
        city: 'hydrabad',
        language: 'computer c programing',
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },

    {
        name: 'baishaki',
        age: 25,
        title: ' Software Engineer',
        city: 'bangalor',
        language: 'computer c programing',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },

    {
        name: ' dasbabu',
        age: 32,
        title: ' Software Engineer',
        city: 'kolkata',
        language: 'computer c programing',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },

    {
        name: 'ram korim',
        age: 34,
        title: ' Software Engineer',
        city: 'madaraj',
        language: 'computer c programing',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },

    {
        name: 'preti porter',
        age: 23,
        title: ' Software Engineer',
        city: 'london',
        language: 'computer c programing',
        image: 'https://randomuser.me/api/portraits/women/16.jpg'
    }
];

// console.log(data);

function CvIterator(profiles) {
    let Cvindex = 0;
    return {
        next: function () {
            // console.log(profiles[Cvindex]);
            return Cvindex < profiles.length ? { value: profiles[Cvindex++], done: false }
                : { done: true }
        }
    };
}
const candidates = CvIterator(data);

// console.log(candidates);
nextCv();
// NEXT button fetch the api
const nexts = document.getElementById('nexts');
nexts.addEventListener('click', nextCv);
function nextCv() {
    console.log("is that click touch");
    const CurrentCandidate = candidates.next().value;
    // console.log(CurrentCandidate);
    const image = document.getElementById('image');
    const profile = document.getElementById('profile');
    if (CurrentCandidate != undefined) {
        image.innerHTML = `<img src = '${CurrentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${CurrentCandidate.name}</li>
    <li class="list-group-item">${CurrentCandidate.age}</li>
    <li class="list-group-item">${CurrentCandidate.city}</li>
    <li class="list-group-item">${CurrentCandidate.language}</li>
    <li class="list-group-item">${CurrentCandidate.title}</li>
  </ul>`;
    }
    else{
        alert("End of the Candidate Application");
        window.location.reload();
    }
}