import axios from 'axios'

interface SignupPram {
    username:string;
    email:string;
    password:string;
}

interface SignupRequest {
    user_name:string;
    e_mail:string;
    password:string;
}
const signup = async({username, email, password}:SignupPram) => {
    try{
        const requestData:SignupRequest = {
            user_name:username,
            e_mail:email,
            password:password
        }

        const responce = await axios.post(
            'http://localhost:8000/api/signup',
            requestData,
            {withCredentials: true}
        )
        
        if (responce.status === 200) {
            console.log('成功');
        }
    }   catch (error) {
        console.error('失敗',error)
    };
}

export {signup}