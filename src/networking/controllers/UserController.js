import axios from 'axios';
import { generateBackendURL } from '../routes';
import TokenService from '../tokenService';

class UserController {
  static async get(user) {
    const response = await axios.post(generateBackendURL('/api/test/user'), {
      user,
    });
    TokenService.getUser(response.data);
  }
}

export default UserController;
