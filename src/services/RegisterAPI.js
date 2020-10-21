import React from 'react'

export default function componentDidMount() {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
  }
  fetch('http://127.0.0.1:3333/api/v1/users', requestOptions)
      .then(async response => {
          const data = await response.json();
          if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
          this.setState({ postId: data.id })
      })
      .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
}
