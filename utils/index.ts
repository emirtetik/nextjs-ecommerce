import { CarProps, FilterProps } from "@/types";

 export async function fetchCars(filters: FilterProps) {
    const {manufacturer, year,  model, limit, fuel} = filters;

       const headers ={
            'X-RapidAPI-Key': '3231214c48msh488de50d7fc070cp1e879djsnadf4c22fa781',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
       }

       const response = await fetch  (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
                                      headers: headers,
                                                        });

   const result = await response.json();

   return result;
 }

 export const calculateCarRent = (city_mpg: number, year: number) => {
     const basePrice = 50; 
     const mile  = 0.1;
     const age = 0.05; 
   
     const mileageRate = city_mpg * mile;
     const ageRate = (new Date().getFullYear() - year) * age;
   
     const rentRate = basePrice + mileageRate + ageRate;
   
     return rentRate.toFixed(2);
   };

  //  export const CarImageUrl = (car: CarProps, angle? : string) => {
  //      const url = new URL('https://cdn.imagin.studio/getimage');

  //      const {make, year ,model } = car ;

  //      url.searchParams.append('customer', '');
  //      url.searchParams.append('make', make)
  //      url.searchParams.append('modelFamily', model.split(' ')[0])
  //      url.searchParams.append('zoomType', 'fullscreen')
  //      url.searchParams.append('modelYear', `${year}`)
  //      url.searchParams.append('angle', `${angle}`)

  //      return `${url}`;

  //  }

  export const updateSearchParams = (type:string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

     return newPathname;
  }