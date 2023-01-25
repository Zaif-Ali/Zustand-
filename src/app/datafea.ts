import { create } from "zustand"

interface variable {
    data: string[] | null,
    loading: boolean,
    error: string | null,
    DataFetch: () => Promise<void>;
}
export const DataStore = create<variable>((set, get) => ({
    // variables defined
    data: null,
    loading: false,
    error: null,
    // functions defined
    DataFetch: async () => {
        set((state) => ({
            loading: true,
        }))
        // fetching data
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            set((state) => ({
                data: data,
                loading: false,
                error: null
            }))
        } catch (err: any) {
            set((state) => ({
                error: err.message
            }))
        }
    }
}))