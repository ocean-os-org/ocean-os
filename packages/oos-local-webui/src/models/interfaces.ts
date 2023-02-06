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

export interface MetasState {
    metas: TMeta[];
    addMetas: () => void;
    metaTypes: () => string[];
}

export interface DropsState {
    drops: TDrop[];
    addDrop: (drop:TDrop) => void;
}