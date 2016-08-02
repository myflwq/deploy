import React from 'react';
import axios from 'axios';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';


class App extends React.Component {
  getChildContext() {
     return {muiTheme: getMuiTheme()};
   }
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
      info:{},
      wait:true
    }
  }
  componentDidMount(){
    this.getUserInfo().then((x)=>{
      console.log(x.gitInfo);
      this.setState({
        info:x.gitInfo,
        wait:false
      })
    })
  }
  render () {
    return(
      <div>
        {
          this.state.wait ? <CircularProgress size={1.5} /> :
          <div>
            <img src={this.state.info.avatar_url} />
          </div>
        }
      </div>

    )
  }
}
App.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired,
};
export default App;
