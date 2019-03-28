import React from 'react';
import ReactDOM from 'react-dom';
import GitHubLogin from '../src/GitHubLogin';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <GitHubLogin clientId="06760ae8cbbea40deace"
    redirectUri="https://zerodb.azurewebsites.net/api/GithubAuthCallback"
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('example')
);
