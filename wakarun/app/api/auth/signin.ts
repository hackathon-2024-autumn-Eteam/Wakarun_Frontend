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
    try {
        const requestData:SigninRequest = {
            email:email,
            password:password
        }

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/token/`,
            requestData,
        )

        if (response.data.access) {
            localStorage.setItem("access_token",response.data.access)
        } else {
            throw(":errorcode:001")
        }
        if (response.data.refresh) {
            localStorage.setItem("refresh_token",response.data.refresh)
        } else {
            throw(":errorcode:002")
        }
        
        if (response.status >= 200 && response.status < 300) {
            console.log('成功');
            return true;
        }
    } catch (error) {
        console.error('失敗',error);
        throw error;
    };
}

export {signin}