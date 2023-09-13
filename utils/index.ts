export const fetchHotels = async () => {
  const headers = {
    "X-RapidAPI-Key": "e5c92094e2mshc7420f5fc5278a1p11323bjsne85867c6a47f",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  };

  const response = await fetch(
    `https://booking-com.p.rapidapi.com/v1/static/hotels`,
    {
      headers: headers,
    }
  );

    const result = await response.json();
    

    return result;
    

};