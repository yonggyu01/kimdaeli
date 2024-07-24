import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Jobstore {
  job: string
  id: number
  content : string
  addjob(item:string): void 

}

export const usejobStore = create(
  persist<Jobstore>(
    (set,get) => {
      return {
        job: 'chef',
        id: 1,
        content:'',
        addjob: (item:string) => set({...get(), job:item }),
      };
    },
    {
      name: 'Jobstore',
      getStorage: () => {
        return localStorage;
      },
    },
  ),
);
