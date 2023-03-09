//event listener keydown
const drums =[
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/openhat.wav',
        label: 'Clap',
        letter: 'A',
    },
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav',
        letter: 'S',
        label: 'Hi Hat'
    },
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/hihat.wav',
        letter: 'D',
        label: 'Kick',
    },
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/kick.wav',
        letter: 'F',
        label: 'Open Hat',
    },
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/boom.wav',
        letter: 'G',
        label: 'Boom',
    },
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/ride.wav',
        letter: 'H',
        label: 'Ride',
    },
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/snare.wav',
        letter: 'J',
        label: 'Snare',
    },
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/tom.wav',
        letter: 'K',
        label: 'Tom',
    },
    {
        soundURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/tink.wav',
        letter: 'L',
        label: 'Tink',
    },
]

let container = document.querySelector('#drum-holder')
let makePad = (drum) => {
    let pad = document.createElement('div')
    let letter = document.createElement('span')
    let label = document.createElement('span')

    letter.innerText = drum.letter
    label.innerText = drum.label
    label.classList.add('label')
    pad.append(letter)
    pad.append(label)
    pad.classList.add('pad')
    pad.setAttribute('id', padReference(drum.letter))

    return pad
}
const padReference = letter => {
    return 'pad_' + letter
}

const audioReference = letter => {
    return 'audio_' + letter
}

let makeAudio = (drum) => {
    let audio = document.createElement('audio')
    let source = document.createElement('source')

    audio.append(source)
    source.setAttribute('src', drum.soundURL)
    audio.setAttribute('id', audioReference(drum.letter))

    return audio
}


for(let drum of drums){
    
    container.append(makePad(drum))
    container.append(makeAudio(drum))
}


window.addEventListener('keydown', (event) => {
    console.log(event.key);

    let letter = event.key.toUpperCase()

    let allowedLetters = drums.map(elt => {
        return elt.letter

        
    })

    if(!allowedLetters.includes(letter)){
        return
    }
        
    

    let pad = document.getElementById(padReference(letter))
    let audio = document.getElementById(audioReference(letter))

    audio.addEventListener('ended' , (e) => {
        pad.classList.remove('active')
    })
    pad.classList.add('active')
    audio.play()
    


})


//.play()