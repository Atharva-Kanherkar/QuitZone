import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using Axios for backend calls

interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

function SignupForm() {
  const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    email: '',
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
      const response = await axios.post('http://localhost:5000/api/user/signup', formData); // Replace with your actual signup route
      console.log('Signup successful:', response.data);
      // Handle successful signup (e.g., redirect to login page, show confirmation message)
    } catch (error: any) {
      console.error('Signup error:', error);
      setError(error.response?.data?.message || 'Signup failed'); // Handle errors gracefully
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Name:
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
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
          minLength={8} // Enforce minimum password length
          required
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing Up...' : 'Sign Up'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default SignupForm;
