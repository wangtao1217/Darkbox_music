import axios from '../assets/axios';

 const login = ({ cellphone, passwords}) => {
  return axios({
        url: '/login/cellphone',
        params: {
          cellphone,
          passwords
        }
    })
}

const logout = () => {
    return axios({
        method: "post",
        url: "/logout"
    })
}

export default { login, logout }