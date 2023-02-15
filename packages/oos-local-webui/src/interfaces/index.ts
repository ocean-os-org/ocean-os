export type TDrop = {
    id: string;
    content: any;
    metas: TMeta<UMeta>[];
}

export type Label = { }

export type Public = {
    description: string
    skin: string
}

export type UMeta = Label | Public

export type TMeta<T> = {
    id?: string
    type: 'label' | 'person' | 'dapp' | 'media' | 'extension' | 'public' | 'group'
    name: string
    content: T
}

export interface MetasState {
    metas: TMeta<UMeta>[];
    addMeta: (meta:TMeta<UMeta>) => void;
    delMeta: (id:string) => void;
    metaTypes: () => string[];
    getMetasType: (type:string) => TMeta<UMeta>[]
}

export interface DropsState {
    drops: TDrop[];
    addDrop: (drop:TDrop) => void;
}

export interface MenuItem {
    name: string;
    url?: string;
    icon?: string;
    avatar?: string;
    items?: MenuItem[];
}