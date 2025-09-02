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
        console.err(err)
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
{}