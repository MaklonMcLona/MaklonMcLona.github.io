const observer = new IntersectionObserver((entries => 
{
    entries.forEach((entry =>
    {
        console.log(entry);
        if(entry.isIntersecting)
        {
            entry.target.classList.add('contentShow');
        }
    }
    ))
}
));

const hiddenElements = document.querySelectorAll('.contentHidden');
hiddenElements.forEach((el) => observer.observe(el));