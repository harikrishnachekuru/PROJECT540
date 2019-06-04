import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://localhost:4001/api/user/register', {
            user_name: newUser.user_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
        })
}

export const login = user => {
    return axios
        .post('http://localhost:4001/api/user/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            if(res.data.errorPassword){
                
            } else if(res.data.errorUser){
                
            } else{
                localStorage.setItem('usertoken', res.data)
                return res.data 
            }
        })
        .catch(err => {
            console.log(err)
        })
}

