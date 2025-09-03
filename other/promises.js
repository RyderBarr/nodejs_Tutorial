
const didHomework = true;

const doHomework = new Promise((resolve, reject)=>{

    setTimeout(() => 
    {
    
        resolve("Homework completed!")
    
    }, 2000);
    
    if(!didHomework)
    {
        
        reject("Homework not done!")

    }

})

doHomework.then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.error(err)
    })

function studySubject(subject)
{

    return new Promise((resolve, reject)=>
    {

        if(subject === "Math")
        {

            setTimeout(() => 
            {

                resolve("Studied Math!")

            }, 1000)

        }
        else
        {

            reject("I don't want to study that!")

        }

    })

}

studySubject("Math")
    .then(result=>console.log(result))
    .then('Now I am ready for the test!')
    .catch(err=>console.error(err))

function wakeUp()
{
    return new Promise((resolve, reject)=>
    {

        setTimeout(() => 
        {

            resolve("Woke up at 7 AM!")

        }, 1000);

    })
}

function eatBreakfast()
{
    return new Promise((resolve, reject)=>
    {

        setTimeout(() => 
        {

            resolve("Ate breakfast!")

        }, 2000);

    })
}

function goToSchool()
{
    return new Promise((resolve, reject)=>
    {

        setTimeout(() => 
        {

            resolve("Reached school on time!")

        }, 1000);

    })
}

wakeUp()
    .then(result=>
    {

        console.log(result)

        eatBreakfast()
            .then(result => 
            {

                console.log(result)

                goToSchool()
                    .then(result => 
                    {

                        console.log(result)

                    })
                    .finally(() => 
                    {

                        console.log("End of the day - done or not done.")

                    })
            
            })

    })
    

function fetchJoke()
{

    return new Promise((resolve, reject)=>{
        
        resolve(fetch("https://official-joke-api.appspot.com/random_joke"))
        
    })
}

fetchJoke()
    .then(result=>
    {

        return result.json()

    })
    .then(result =>
    {

        console.log(`${result.setup} ${result.punchline}`)

    })
    .catch(err=>
    {

        console.error(err)

    })
    .finally(()=>
    {

        console.log("how did you like my joke")
            
    })
    