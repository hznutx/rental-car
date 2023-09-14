import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'f1e7bef98amsh2d645990a01a00dp18d032jsn7b240a58f32c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?transmission=a&limit=400'), {
        headers:headers,
    })
    
    const result = await response.json();

    return result;

}



export const calculateCarRent = (city_mpg:number,year:number) => {
    const basepricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basepricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
} 

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//     const url = new URL("https://cdn.imagin.studio/getimage");
//     const { make, model, year } = car;

//     url.searchParams.append('customer', 'hrjavascript-mastery');
//     url.searchParams.append('make', make);
//     url.searchParams.append('modelFamily', model.split(" ")[0]);
//     url.searchParams.append('zoomType', 'fullscreen');
//     url.searchParams.append('modelYear', `${year}`);
//     // url.searchParams.append('zoomLevel', zoomLevel);
//     url.searchParams.append('angle', `${angle}`);

//     return `${url}`;
// } 