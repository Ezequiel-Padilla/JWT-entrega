import axios from 'axios';
import { generateBackendURL } from '../routes';
import TokenService from '../tokenService';

class SessionController {
  static async login(username, password) {
    const response = await axios.post(generateBackendURL('/auth/signin'), {
      username,
      password,
    });
    TokenService.setUser(response.data);
  }

  static async register(username, password, email) {
    const response = await axios.post(generateBackendURL('/auth/signup'), {
      username,
      password,
      email,
    });
    TokenService.setUser(response.data);
  }
}

export default SessionController;
