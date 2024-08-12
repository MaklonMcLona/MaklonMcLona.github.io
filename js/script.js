function typingEffect()
{
    const textOne = 'Hi, I\'m Arkadiusz';
    const textTwo = 'Front-end Developer | UX/UI Designer';
    const typingElementOne = document.getElementById('h1');
    const typingElementTwo = document.getElementById('p1');
    const typingDelay = 100;

    typeText(textOne, textTwo, typingElementOne, typingElementTwo, typingDelay);

}

function typeText(textOne, textTwo, typingElementOne, typingElementTwo, typingDelay)
{
    for(let i = 0; i < textOne.length; i++)
    {
        setTimeout(() => 
            {
                typingElementOne.textContent += textOne.charAt(i);
            }, typingDelay * i);
    }

    // for(let j = 0; j < textTwo.length; j++)
    //     {
    //         setTimeout(() => 
    //             {
    //                 typingElementTwo.textContent += textTwo.charAt(i);
    //             }, typingDelay * i)
    //     }
}

document.addEventListener('DOMContentLoaded', typingEffect());


    // setTimeout(function() 
    //     {
    //         document.getElementById('hidden').style.visibility = 'visible';
    //     }, 300);

