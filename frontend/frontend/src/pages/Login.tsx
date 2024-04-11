import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using Axios for backend calls

interface LoginFormData {
  username: string;
  password: string;
}

function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    setIsLoading(true);
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post(
        'http://localhost:5000/api/user/login',
        formData
      ); // Replace with your actual login route
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., store token, redirect to dashboard)
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Login failed'); // Handle errors gracefully
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging In...' : 'Login'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default LoginForm;
