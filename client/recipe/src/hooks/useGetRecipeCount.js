export const fetchUserRecipeCount = async (userID) => {
  try {
    const response = await fetch(`http://localhost:3001/user-recipe-count/${userID}`);
    const data = await response.json();
    
    if (response.ok) {
      return data.count; // Assuming the count is provided in the response
    } else {
      // Handle error cases
      console.error('Error fetching user recipe count:', data.error);
      return 0; // Return a default value or handle the error accordingly
    }
  } catch (error) {
    // Handle network errors
    console.error('Network error:', error);
    return 0; // Return a default value or handle the error accordingly
  }
};
