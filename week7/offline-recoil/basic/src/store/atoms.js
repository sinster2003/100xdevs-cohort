import { atom, atomFamily, selector } from "recoil";
import axios from "axios";
import { todos } from "../todos";

export const networkAtom = atom({
    key: "networkAtom",
    default: 10 // initial state
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})

export const backendAsyncAtom = atom({
    key: "backendAsyncAtom",
    default: selector({
        key: "backendAsyncSelector",
        get: async () => {
            // const hello = await new Promise(resolve => setTimeout(() => resolve("Hello"), 5000));
            // console.log(hello);
            try{
                const response = await axios.get("https://sum-server.100xdevs.com/notifications");
                return response.data;
            }
            catch(error) {
                console.log(error);
                throw error;
            }
        }
    })
})

// dynamic atom creation
export const todoAtomsFamily = atomFamily({
    key: "todoAtomsFamily",
    default: (id) => {
        return todos.find(todo => todo.id === id);
    }
})

export const totalCountSelector = selector({
    key: "totalCountSelector",
    get: ({ get }) => {
        const networkCount = get(networkAtom);
        const messagingCount = get(messagingAtom);
        const notificationsCount = get(notificationsAtom);
        const jobsCount = get(jobsAtom);
        return networkCount + messagingCount + notificationsCount + jobsCount;
    }
})