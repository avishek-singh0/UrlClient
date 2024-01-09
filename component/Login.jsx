
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the access token from localStorage
    localStorage.removeItem('accessToken');
    // Redirect to the login page or any other desired route
    navigate('/log');
  };
  
  const token = localStorage.getItem('accessToken');

  return (
    <div>
       {token ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>User is not Logged in</p>
      )}
       
    </div>
  );
};

export default Logout;
