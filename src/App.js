import React from 'react';
import axios from 'axios';



class App extends React.Component {
  getUserInfo(username){
    return axios.get(`https://api.github.com/users/myflwq`)
    .then((res)=>(
        {
          gitInfo: res.data
        }
      )
    )
  }
  constructor(){
    super();
    this.state={
      info:{}
    }
  }
  componentDidMount(){
    this.getUserInfo().then((x)=>{
      console.log(x.gitInfo);
      this.setState({
        info:x.gitInfo
      })
    })
  }
  render () {
    return(
      <h1>{this.state.info.followers}</h1>
    )
  }
}

export default App;
