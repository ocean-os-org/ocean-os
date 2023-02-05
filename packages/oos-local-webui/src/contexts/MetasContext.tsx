import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from 'react';

type TMetaContext = {
  metas: TMeta[];
  dispatch: Dispatch<MetaAction>;
}

const MetasContext = createContext<TMetaContext>({} as TMetaContext);

const MetasProvider = ({ children }:PropsWithChildren<{}>) => {
  const [metas, dispatch] = useReducer(
    metasReducer,
    initialMetas
  );

  return (
    <MetasContext.Provider value={ { metas, dispatch } }>
      {children}
    </MetasContext.Provider>
  );
}
export default MetasProvider;

export function useMetas() {
  return useContext(MetasContext);
}

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

export type DropProps = {
    drop: TDrop;
}

type MetaAction = {
    type: string;
    meta: TMeta;
    id: string;
    text: string;
}

function metasReducer(drops:TMeta[], action:MetaAction) {
  switch (action.type) {
    case 'added': {
      return [...drops, {
        type: action.id,
        value: action.text,
      }];
    }
    case 'changed': {
      return drops.map(t => {
        if (t.id === action.meta.id) {
          return action.meta;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return drops.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialMetas = [
    { type: 'type', value:'text' },
    { type: 'type', value:'image' },
    { type: 'type', value:'checklist' },
];