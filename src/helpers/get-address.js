export async function getAddress(ip) {
 
 const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_bnmTTbpJpDb2z1pcuMhGnQuOZuQIF&ipAddress=${ip}`)
  
 return response.json();
}