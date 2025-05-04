// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page
const createForm = document.querySelector('form')

createForm.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const bookData = new FormData(createForm)
    const reqbody = Object.fromEntries(bookData)

    const res = await fetch ('add/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(reqBody)
    })
    const data = await res.json()
    console.log
})