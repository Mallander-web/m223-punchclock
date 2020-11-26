document.addEventListener('DOMContentLoaded', function(){
    const createEntryForm = document.querySelector('#createLoginForm');
    createEntryForm.addEventListener('submit', createEntry);

});

const login = (e) => {
 e.preventDefault();
    const formData = new FormData(e.target);
    const login = {};
    login['username'] = (formData.get('username');
    login['password'] = (formData.get('password');

    fetch(`${URL}/users/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    }).then((result) => {
        if(result.status == 200){
        localStorage.setItem("token", result.headers.get("Authorization"));
        }

    });
}