import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/token/';

class AuthService {
    login(credentials){
        return axios.post(USER_API_BASE_URL + "generate-token", credentials);
    }

    getUserInfo(){
        const userInfo = localStorage.getItem("userInfo");
        return userInfo ? JSON.parse(userInfo) : null;
    }

    getAuthHeader() {
        const userInfo = this.getUserInfo();
        if (userInfo && userInfo.token) {
            return { headers: { Authorization: 'Bearer ' + userInfo.token }};
        } else {
            return {};
        }
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader())
                    .catch(error => {
                        // Handle error
                        console.error('Logout failed:', error);
                    });
    }
}

const authService = new AuthService();
export default authService;
