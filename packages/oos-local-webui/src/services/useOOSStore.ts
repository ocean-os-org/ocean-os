import { useSyncExternalStore } from 'react';
import { BehaviorSubject, from, withLatestFrom, Subject, map } from 'rxjs';
import { DropsState, MetasState, TDrop, TMeta, UMeta } from '../interfaces';


const initialDrops:TDrop[] = [
    { id:"111",content: "This is a note taken to remember!!", 
        metas: [ { type: 'media', name:'DropText',content:{} }, { type:'extension', name:"Recurrent",content:{}}, { type:'label', name:"Personal Tag",content:{}}]},
    { id:"222",content: [{ item: "Do Dishes", checked: false},{ item: "Make Bed", checked: false},{ item: "Clean Bathroom", checked: false},{ item: "Feed Dog", checked: false}], metas: [ { type: 'media', name:'DropCheckList',content:{} }, { type:'person', name:"Christine Pike",content:{}}, { type:'group', name:"Project",content:{}}]},
    { id:"333",content: { description:"This is a beautiful image...", src: '/assets/images/placeholders/covers/1.jpg'}, metas: [ {type: 'media', name: 'DropImage',content:{} }, {type: 'public', name: 'OceanOS Blog',content:{} }]},
    { id:"444",content: "This is a response from ChatGPT", metas: [ { type:'media', name:"DropText",content:{}}, { type:'dapp', name:"ChatGPT",content:{}}]}
];


const initialMetas:TMeta<UMeta>[] = [
    { type: 'media', name: 'DropText',content:{} },
    { type: 'media', name: 'DropImage',content:{} },
    { type: 'media', name: 'DropCheckList',content:{} },
    { type: 'label', name: 'personal',content:{} },
    { type: 'label', name: 'project',content:{} },
    { type: 'person', name: 'person',content:{} },
    { type: 'person', name: 'friend',content:{} },
    { type: 'extension', name: 'extension',content:{} },
    { type: 'public', name: 'Morpho',content:{ description: 'This is a Great Description', skin: 'morpho' } },
    { type: 'group', name: 'group',content:{} },
    { type: 'dapp', name: 'dapp' ,content:{}},
]


export type OOSState = DropsState & MetasState;

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
    addMeta: (meta:TMeta<UMeta>) => set((state) => ({ metas: [...state.metas, meta] })),
    delMeta: (id:string) => set((state) => ({ metas: state.metas.filter( m => m.name != id) })),
    metaTypes: () => [...get().metas.reduce( (acc,v) => acc.add(v.type), new Set<string>)],
    getMetasType: (type:string) => [...get().metas.filter( m => m.type === type) ]
})

export const useOOSStore = create<OOSState>(initState)