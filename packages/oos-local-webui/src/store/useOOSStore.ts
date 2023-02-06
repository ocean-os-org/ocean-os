import { create, StateCreator } from 'zustand';

const initialDrops = [
    { id:"111",content: "This is a note taken to remember!!", metas: [ { type: 'type', value:'text' }, { type:'extension', value:"Recurrent"}, { type:'label', value:"Personal Tag"}]},
    { id:"222",content: [{ item: "Do Dishes", checked: false},{ item: "Make Bed", checked: false},{ item: "Clean Bathroom", checked: false},{ item: "Feed Dog", checked: false}], metas: [ { type: 'type', value:'checklist' }, { type:'person', value:"Christine Pike"}, { type:'group', value:"Project"}]},
    { id:"333",content: { description:"This is a beautiful image...", src: '/assets/images/placeholders/covers/1.jpg'}, metas: [ {type: 'type', value: 'image' }, {type: 'public', value: 'OceanOS Blog' }]},
    { id:"444",content: "This is a response from ChatGPT", metas: [ { type:'type', value:"text"}, { type:'dapp', value:"ChatGPT"}]}
];
export type TDrop = {
    id: string;
    content: any;
    metas: TMeta[];
}

export type TMeta = {
    id?: string;
    type:string;
    value:string;
}

interface MetasState {
    metas: TMeta[];
    addMetas: () => void;
}

interface DropsState {
    drops: TDrop[];
    addDrop: () => void;
}

type OOSState = DropsState & MetasState;

export const dropsState:StateCreator<DropsState, [],[], DropsState> = (set) => ({
    drops: initialDrops,
    addDrop: () => set((state) => ({ drops: [] })),
})

export const metasState:StateCreator<MetasState, [],[], MetasState> = (set) => ({
    metas: [],
    addMetas: () => set((state) => ({ metas: [] })),
})


export const useOOSStore = create<OOSState>()((...set) => ({
    ...dropsState(...set),
    ...metasState(...set)
}))

