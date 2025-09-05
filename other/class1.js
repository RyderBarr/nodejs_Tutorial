// super class music
class Music
{

    constructor(genre,insturments)
    {

        this.genre = genre
        this.insturments = insturments

    }

    // for when the music is recorded
    record()
    {

        console.log('the music has been recorded')

    }

    // for when the music is produced
    produce()
    {

        console.log('the music has been produced')

    }

}

// subclass band
class Band extends Music
{

    constructor(genre, insturments, members, name)
    {

        // call the super class constructor
        super(genre,insturments)

        this.name = name
        this.members = members

    }

    // for when the band jams
    jam()
    {
     
        console.log(`${this.name} jamed`)
        
    }

}

// subclass for individual musicans
class Musican extends Music
{

    constructor(genre,insturments,name)
    {

        // call the super class constructor
        super(genre,insturments)
        this.name = name

    }
    
    // for when the musican writes a song
    write()
    {

        console.log(`${this.name} wrote some ${this.genre} songs`)
    
    }
    
}

const theBeatles = new Band
(

    'rock',
    ['bass guitar','electric guitar', 'aucoustic guitar', 'drums', 'piano'],
    ['ringo','george','paul','john','Pete Best'],
    'the Beatles'

)

theBeatles.produce()
theBeatles.jam()

const aliceInChains = new Band
(

    'grunge',
    ['bass guitar','electric guitar', 'aucoustic guitar', 'drums','piano'],
    ['Layne Staley', 'Jerry Cantrell','Mike Starr','William Duvall', 'Mike Inez','Sean Kinney'],
    'Alice in Chains'

)

aliceInChains.produce()
aliceInChains.jam()

const madonna = new Musican
(

    'pop',
    ['drum machines', 'synthesizers', 'drums', 'guitar'],
    'madonna'

)

madonna.produce()
madonna.write()

// an array of music objects
const All_music = [theBeatles, aliceInChains, madonna]

//  go through all music objects to call there methods
for (let i = 0; i< All_music.length; i++)
{

    All_music[i].record()
    All_music[i].produce()

    // check if the object is a band or musican
    if (All_music[i] instanceof Band)
    {

        All_music[i].jam()

    }
    
    // check if the object is a band or musican
    if (All_music[i] instanceof Musican)
    {

        All_music[i].write()

    }

}