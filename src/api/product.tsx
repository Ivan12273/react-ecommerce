export async function getProducts() {
    const response = await fetch("http://localhost:5000/api/store/collections", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    
    return result.data;
}
