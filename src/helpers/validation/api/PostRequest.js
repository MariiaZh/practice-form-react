

const PostRequest = (email, password, newAccount) => {

    let responseData = {};

    console.log('email:', email)
    console.log('password:', password)
    console.log('newAccount:', newAccount)

    let url;
    if (!newAccount) {
        url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcrSXEDf_pTnOykGXZeBOiBQhus9LEb2g';
    } else {
        url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcrSXEDf_pTnOykGXZeBOiBQhus9LEb2g';
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .then((data) => {
            console.log('data.idToken:', data.localId)
            console.log('data.email:', data.email)
            responseData = {
                localId: data.localId,
                email: data.email
            };
        })
        .catch((err) => {
            console.log(err)
            alert(err.message);
        });

    return responseData;
}

export default PostRequest;