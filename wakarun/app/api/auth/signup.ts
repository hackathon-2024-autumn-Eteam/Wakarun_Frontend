import axios from 'axios'

interface SignupPram {
    username:string;
    email:string;
    password:string;
}

interface SignupRequest {
    user_name:string;
    email:string;
    password:string;
}
const signup = async({username, email, password}:SignupPram) => {
    try{
        const requestData:SignupRequest = {
            user_name:username,
            email:email,
            password:password
        }

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/signup/`,
            requestData,
        )
        
        if (response.status >= 200 && response.status < 300) {
            console.log('成功');
            return true;
        }
    }   catch (error) {
        console.error('失敗',error);
        throw error;
    };
}

export {signup}