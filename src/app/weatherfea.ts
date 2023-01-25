import { create } from 'zustand'

interface MyState {
    weatherData: any;
    error: string | null;
    isLoading: boolean;
    fetchWeather: (cityName: string) => Promise<void>;
}
const apikey:string = "46a361253fc2625f4bbe96efe52da4c8"
export const useMyStore = create<MyState>((set, get) => ({
    weatherData: null,
    error: null,
    isLoading: false,
    fetchWeather: async (cityName: string) => {
        set((state) => ({
            isLoading: true
        }))
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
            const data = await response.json()
            set((state) => ({
                weatherData: data,
                isLoading: false
            }))
        } catch (error: any) {
            set((state) => ({
                error: error.message,
                isLoading: false
            }))
        }
    },
}));
