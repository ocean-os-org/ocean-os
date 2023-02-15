import { useSyncExternalStore } from 'react';
import { BehaviorSubject, from, withLatestFrom } from 'rxjs';
import { DropsState, MetasState, TDrop, TMeta } from '../interfaces';


const initialDrops = [
    { id:"111",content: "This is a note taken to remember!!", metas: [ { type: 'media', value:'DropText' }, { type:'extension', value:"Recurrent"}, { type:'label', value:"Personal Tag"}]},
    { id:"222",content: [{ item: "Do Dishes", checked: false},{ item: "Make Bed", checked: false},{ item: "Clean Bathroom", checked: false},{ item: "Feed Dog", checked: false}], metas: [ { type: 'media', value:'DropCheckList' }, { type:'person', value:"Christine Pike"}, { type:'group', value:"Project"}]},
    { id:"333",content: { description:"This is a beautiful image...", src: '/assets/images/placeholders/covers/1.jpg'}, metas: [ {type: 'media', value: 'DropImage' }, {type: 'public', value: 'OceanOS Blog' }]},
    { id:"444",content: "This is a response from ChatGPT", metas: [ { type:'media', value:"DropText"}, { type:'dapp', value:"ChatGPT"}]}
];


const initialMetas = [
    { type: 'media', value: 'DropText' },
    { type: 'media', value: 'DropImage' },
    { type: 'media', value: 'DropCheckList' },
    { type: 'label', value: 'personal' },
    { type: 'person', value: 'person' },
    { type: 'extension', value: 'extension' },
    { type: 'public', value: 'public' },
    { type: 'group', value: 'group' },
    { type: 'dapp', value: 'dapp' },
]


export type OOSState = DropsState & MetasState;
/*
export const dropsState:StateCreator<DropsState> = (set,get) => ({
    drops: initialDrops,
    addDrop: (drop:TDrop) => set((state) => ({ drops: [...state.drops, drop] })),
})

export const metasState:StateCreator<MetasState> = (set,get) => ({
    metas: initialMetas,
    addMetas: () => set((state) => ({ metas: [] })),
    metaTypes: () => [...get().metas.reduce( (acc,v) => acc.add(v.type), new Set<string>)],
    getMetasType: (type:string) => [...get().metas.filter( m => m.type === type) ],
})


export const useOOSStore = create<OOSState>()((...a) => ({
    ...dropsState(...a),
    ...metasState(...a)
}))

*/

type SetType<T> = ( fn:(a:T) => Partial<T> ) => void 
type GetType<T> = () => T
type StateCreator<T> = ( set:SetType<T>, get: GetType<T>) => T

export const create = <T>(init:StateCreator<T> )  => {

    type Selector = {
        selector: (state:T) => any
        value: any
        listeners: Set<()=>void>
    }
    
    const setValue = ( set:(a:T) => Partial<T>) => {
        from( [ set( state$.getValue() ) ] ).pipe( withLatestFrom(state$) ).subscribe( ([nextState,state]) => {
            const newState = { ...state,...nextState }
            state$.next( newState ) 
            selectors.forEach( sel => {
                const oldValue = sel.value
                const newValue = sel.selector(newState)
                if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                    selectors.set(sel.selector.toString(), {...sel, value: newValue })
                    sel.listeners.forEach(l => l())
                }
            })
        })
    }

    const getValue = (): T => state$.getValue()

    const state$ = new BehaviorSubject<T>(init(setValue,getValue))
    const selectors: Map<string,Selector> = new Map();

    const getSnapshot = <R>(selector: (state:T) => R ) => {
        if (!selectors.has(selector.toString())) {
            selectors.set(selector.toString(),{ value: selector(getValue()), listeners: new Set(), selector: selector } )
        }
        return () => selectors.get(selector.toString())?.value as R
    }
    
    const addListener = (selector: (state:T) => any, listener: () => void) => {
        const s = selectors.get(selector.toString())
        if (s) {
            s.listeners.add(listener)
            selectors.set(selector.toString(), s)    
        }
    }
    const removeListener = (selector: (state:T) => any, listener: () => void) => {
        const s = selectors.get(selector.toString())
        if (s) {
            s.listeners.delete(listener)
            selectors.set(selector.toString(), s)    
        }
    }

    return <R = T>( selector: ( (state: T) => R ) = (state:T) => state as R extends T ? R : never) => {

        const subscribe = (l: () => void) => { 
            addListener(selector,l);
            return () => {
                removeListener(selector,l);
            }
        }; 

        return useSyncExternalStore(subscribe, getSnapshot(selector),  getSnapshot(selector))
    }
}

const initState:StateCreator<OOSState> = (set, get) => ({ 
    drops: initialDrops,
    metas: initialMetas,
    addDrop: (drop:TDrop) => set((state) => ({ drops: [...state.drops, drop] })),
    addMetas: () => set((state) => ({ metas: [] })),
    metaTypes: () => [...get().metas.reduce( (acc,v) => acc.add(v.type), new Set<string>)],
    getMetasType: (type:string) => [...get().metas.filter( m => m.type === type) ]
})

//export const OOSStore = <R = State>( selector = (state:State) => state as R) => Create<State>(initState)(selector)

export const useOOSStore = create<OOSState>(initState)
