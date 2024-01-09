import { useEffect, useState } from 'react';

import { useNavigate} from 'react-router-dom';

function Analytics() {
  const [allUrls, setAllUrls] = useState([]);
  const token = localStorage.getItem('accessToken');

  const navigate = useNavigate()

  useEffect(() => {
    // if (!token) {
    //   // Handle redirection here or set a state to indicate redirection
    //   // For example:
    //   window.location.href = '/log'; // Redirects to '/log' if token is missing
    //   return; // Prevent further execution of the fetch logic
    // }


    if (!token) {
      // Redirect to login page if token is missing
     navigate('/log');
      return; // Stop execution if token is missing
    }

    console.log("token");
    fetch('https://urlst.onrender.com/url/allurls',{
    
    headers: {
        Authorization: `Bearer ${token}`,
      },

    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.allUrls)) {
          setAllUrls(data.allUrls); // Save fetched data to state
        } else {
          throw new Error('Fetched data is not in the expected format');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>All URLs</h2>
      <ul>
        {allUrls.map(url => (
          <li key={url._id}>
            <p>{url.redirectURL}</p>
            <p>{`https://urlst.onrender.com/${url.shortid}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Analytics;
