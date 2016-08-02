import axios from 'axios';


export default function getUserInfo(username){
  return axios.get(`https://api.github.com/users/myflwq`)
  .then((res)=>(
      {
        gitInfo: res.data
      }
    )
  )
}
