import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//var axios = require('axios');


// let template = (
//   <main>
//     <header>
//       <img src="images/logo_128.png" class="logo"/>
//     </header>
//     <div id="content">
//       <h4>List of latest notifications:</h4>
//     <div class="notify">
//       <b>Title</b>
//     <span class="date">28 Oct</span>
//       <br></br>
//       Some text here
//     </div>
//     <div class="notify">
//       <b>Title 2</b>
//     <span class="date">28 Oct</span>
//       <br></br>
//       Another text here
//     </div>
//     </div>
//   </main>
// );
//
// let appRoot = document.getElementById("app");
//
// ReactDOM.render(template, appRoot);

class Extension extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const headerImgSrc = 'images/logo_128.png';
    const headerTitle = 'List of latest notifications:';
    const notifications = [
      {
        title: 'Third notify title',
        body: 'Anoher text here',
        date: '30 Oct'
      }, {
        title: 'Second notify',
        body: 'Second notify`s body',
        date: '30 Oct'
      }, {
        title: 'First title',
        body: 'Some text here',
        date: '28 Oct'
      }];

    return (
      <div>
        <Header headerImgSrc={headerImgSrc}/>
        <Container headerTitle={headerTitle} notifications={notifications}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={this.props.headerImgSrc} class="logo"/>
      </header>
    );
  }
}

class Container extends React.Component {
  state = {
    repos: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Trojanekkk/repos`)
      .then(res => {
        const repos = res.data;
        this.setState({ repos });
      })
  }

  render() {
    return (
      <main>
        <h4>{this.props.headerTitle}</h4>
        {
          this.state.repos.map((repo) => <Notify repo={repo} />)
        }
      </main>
    )
  }
  // render() {
  //   return (
  //     <main>
  //       <h4>{this.props.headerTitle}</h4>
  //       {
  //         this.props.notifications.map((notification) => <Notify notification={notification} />)
  //       }
  //     </main>
  //   );
  // }
}

class Notify extends React.Component {
  render() {
    return (
      <div class="notify">
        <b>{this.props.repo.name}</b>
      <span class="date">{this.props.repo.created_at.substring(0,9)}</span>
        <br></br>
        Some text here
      </div>
    );
  }
}

// class PersonList extends React.Component {
//   state = {
//     repos: []
//   }
//
//   componentDidMount() {
//     axios.get(`https://api.github.com/users/Trojanekkk/repos`)
//       .then(res => {
//         const repos = res.data;
//         this.setState({ repos });
//       })
//   }
//
//   render() {
//     return (
//       <ul>
//         { this.state.repos.map(repo => <li>{repo.name}</li>)}
//       </ul>
//     )
//   }
// }

ReactDOM.render(<Extension />, document.getElementById('app'));
