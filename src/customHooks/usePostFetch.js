import { useState, useCallback } from 'react';

export const usePostFetch = () => {
  const [result, setResult] = useState({data: null, loading: false, error: null});

    const baseUrl = 'https://goco-test-api.herokuapp.com'
    // const baseUrl = 'http://localhost:5000'

    const sendRequest = useCallback((endpoint, body) => {
      const requestOptions = { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }

      const url = baseUrl + endpoint

      setResult(prevState => ({...prevState, loading: true}))

      fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('DATA', data)
          if(data.type) {
            setResult({loading: false, data: data, error: null})
          } else {
            setResult({loading: false, data: null, error: data.message})
          }
        })

    }, [setResult]);

  return [result, sendRequest];
};
