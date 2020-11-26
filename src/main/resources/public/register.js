const URL = "http://localhost:8081"

document.addEventListener('DOMContentLoaded', function(){
    const createEntryForm = document.querySelector('#registerForm');
    createEntryForm.addEventListener('submit', (e) => login(e));
});

const login = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const signup = {};
    signup['username'] = formData.get('username');
    signup['password'] = formData.get('password');

    fetch(`${URL}/users/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup)
    }).then((result) => {
        console.log(result)
        if (result.status == 200){
            localStorage.setItem("Token", result.headers.get("Authorization"));
            window.location.replace(`${URL}/index.html`);

    }

    });
    }