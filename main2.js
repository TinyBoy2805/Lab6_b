const $  = document.querySelector.bind(document)
const $$  = document.querySelectorAll.bind(document)


const smallheader = $('.slide')
const next = $('#next')
const prev = $('#prev')
const nextSec = $('#section-next')
const prevSec = $('#section-prev')
const section = $('section')
let space = 0
let space2 = 0
const boxWidth = 200;


next.addEventListener('click', ()=>
{
    if (space < 115*34) {
        space += boxWidth
        smallheader.style.transform = `translateX(-${space}px)`
    }else if(space === 115*34) 
    {
        smallheader.style.transform = `translateX(-${115*34}px)`
    }
    
})

prev.addEventListener('click', () => {
    if (space > 0) { 
        space -= boxWidth;
        smallheader.style.transform = `translateX(-${space}px)`;
    } else if (space === 0) {
        // Nếu đã ở vị trí đầu, không di chuyển nữa
        smallheader.style.transform = `translateX(0)`;
    }
})


nextSec.addEventListener('click', ()=>
    {
        if (space2 < 300*2) {
            space2 += boxWidth
            section.style.transform = `translateX(-${space2}px)`
        }else if(space2 === 300*2) 
        {
            section.style.transform = `translateX(-${300*2}px)`
        }
        
    })
    
    prevSec.addEventListener('click', () => {
        if (space2 > 0) { 
            space2 -= boxWidth;
            section.style.transform = `translateX(-${space2}px)`;
        } else if (space2 === 0) {
            // Nếu đã ở vị trí đầu, không di chuyển nữa
            section.style.transform = `translateX(0)`;
        }
    })



const infoBox = [
    {
        subject: 'CSS',
        learner: 17.7
    },
    {
        subject: 'HTML',
        learner: 20.5
    },
    {
        subject: 'JavaScript',
        learner: 35.2
    },
    {
        subject: 'Python',
        learner: 45.0
    },
    {
        subject: 'React',
        learner: 22.3
    },
    {
        subject: 'Node.js',
        learner: 18.8
    },
    {
        subject: 'Java',
        learner: 40.1
    },
    {
        subject: 'SQL',
        learner: 27.4
    },
    {
        subject: 'C++',
        learner: 15.9
    },
    {
        subject: 'TypeScript',
        learner: 19.3
    },
    {
        subject: 'Ruby',
        learner: 8.5
    },
    {
        subject: 'Swift',
        learner: 14.2
    },
    {
        subject: 'PHP',
        learner: 11.0
    },
    {
        subject: 'Kotlin',
        learner: 10.4
    },
    {
        subject: 'C#',
        learner: 23.6
    },
    {
        subject: 'Go',
        learner: 9.8
    },
    {
        subject: 'Rust',
        learner: 6.3
    },
    {
        subject: 'R',
        learner: 7.9
    },
    {
        subject: 'Dart',
        learner: 5.4
    },
    {
        subject: 'Scala',
        learner: 3.8
    },
    {
        subject: 'MATLAB',
        learner: 4.5
    },
    {
        subject: 'CSS',
        learner: 17.7
    },
    {
        subject: 'HTML',
        learner: 20.5
    },
    {
        subject: 'JavaScript',
        learner: 35.2
    },
    {
        subject: 'Python',
        learner: 45.0
    },
    {
        subject: 'React',
        learner: 22.3
    },
    {
        subject: 'Node.js',
        learner: 18.8
    },
    {
        subject: 'Java',
        learner: 40.1
    },
    {
        subject: 'SQL',
        learner: 27.4
    },
    {
        subject: 'C++',
        learner: 15.9
    },
    {
        subject: 'TypeScript',
        learner: 19.3
    },
    {
        subject: 'Ruby',
        learner: 8.5
    },
    {
        subject: 'Swift',
        learner: 14.2
    },
    {
        subject: 'PHP',
        learner: 11.0
    },
    {
        subject: 'Kotlin',
        learner: 10.4
    },
    {
        subject: 'C#',
        learner: 23.6
    },
    {
        subject: 'Go',
        learner: 9.8
    },
    {
        subject: 'Rust',
        learner: 6.3
    },
    {
        subject: 'R',
        learner: 7.9
    },
    {
        subject: 'Dart',
        learner: 5.4
    },
    {
        subject: 'Scala',
        learner: 3.8
    },
    {
        subject: 'MATLAB',
        learner: 4.5
    }
];



const boxes = (subject, learner)=>
{
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML =    `
            <h3>${subject}</h3>
            <p>${learner}M learners</p>
    `
    return box
}

const renderBoxes = ()=>
{
    infoBox.forEach((info)=>
    {
        smallheader.appendChild(boxes(info.subject, info.learner))
    })
}

renderBoxes()

const boxArr = smallheader.querySelectorAll('.box')

boxArr[0].classList.add('active')
const imgs = [
    "https://i.pinimg.com/564x/db/87/26/db87262538a720c78db0eff3253b4f28.jpg",
    "https://i.pinimg.com/564x/e4/96/57/e496570760a703070748d458ae22b879.jpg",
    "https://i.pinimg.com/564x/12/05/60/1205608aaedec83974f40be42bc312be.jpg",
    "https://i.pinimg.com/564x/2c/bf/db/2cbfdbea871656c4c798e856afd0884a.jpg",
    "https://i.pinimg.com/736x/04/46/2b/04462ba5938d4bfa66210fc9b5dd9491.jpg",
    "https://i.pinimg.com/736x/e1/06/82/e106829bd473eb49707af2e46fa416f3.jpg",
    "https://i.pinimg.com/564x/f4/b5/af/f4b5af3da6f9e4b90bb11d0afcf0470d.jpg",
    "https://i.pinimg.com/564x/d1/ed/60/d1ed607602fa36a4f40873cd3d2bbf5d.jpg",
    "https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg",
    "https://i.pinimg.com/564x/d9/03/0a/d9030a5696d2507a1dfb38a686ac93c2.jpg",
  ];


  const content = $$('.content')
  const secondCont = $('#second-content')

  secondCont.style.left = content[0].getBoundingClientRect().right - 30 +'px' 


  content.forEach((ct, index) =>
  {
    ct.addEventListener('click', ()=>
    {
        secondCont.style.left = ct.getBoundingClientRect().right +'px' 
        secondCont.style.display = 'block'
    })
  })