export const getWeather = async()=>{
    try{
        const response = await fetch (`${baseUrl}/users`);
        return response.json();
   }catch (error){
    throw new Error (error.message)
   }
}