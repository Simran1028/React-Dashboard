import {create} from "zustand";
import {persist} from "zustand/middleware"; //if data is stored in local storage ,then we have to import persist

let appStore=(set)=>({
    dopen:true,
    updateOpen:(dopen)=>set((state)=>({dopen:dopen})),
});
appStore=persist(appStore,{name:"my_app_store"});
export const useAppStore=create(appStore);

