import axios from 'axios'

interface SigninPram {
    email:string;
    password:string;
}

interface SigninRequest {
    email:string;
    password:string;
}
const signin = async({email, password}:SigninPram) => {
    try{
        const requestData:SigninRequest = {
            email:email,
            password:password
        }

        const response = await axios.post(
            'http://localhost:8000/api/token/',
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

export {signin}