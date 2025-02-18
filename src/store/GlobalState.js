import { atom } from "recoil";

const documentState = atom({
    key:'documentState',
    default:[],
})

export{
    documentState
}