export interface Weather {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: List[];

}

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface List {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    weather: WeatherElement[];
    speed: number;
    deg: number;
    clouds: number;
    pop: number;
}

export interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export interface WeatherElement {
    id: number;
    main: string;
    description: string;
    icon: string;
}
