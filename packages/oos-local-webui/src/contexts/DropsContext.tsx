import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from 'react';

type TDropContext = {
  drops: TDrop[];
  dispatch: Dispatch<DropAction>;
}

const DropsContext = createContext<TDropContext>({} as TDropContext);

const DropsProvider = ({ children }:PropsWithChildren<{}>) => {
  const [drops, dispatch] = useReducer(
    dropsReducer,
    initialDrops
  );

  return (
    <DropsContext.Provider value={ { drops, dispatch } }>
      {children}
    </DropsContext.Provider>
  );
}
export default DropsProvider;

export function useDrops() {
  return useContext(DropsContext);
}

export type TDrop = {
  id: string;
  content: any;
  metas: TMeta[];
}

export type TMeta = {
  key:string;
  value:string;
}

export type DropProps = {
  drop: TDrop;
}

type DropAction = {
    type: string;
    drop: TDrop;
    id: string;
    text: string;
}

function dropsReducer(drops:TDrop[], action:DropAction) {
  switch (action.type) {
    case 'added': {
      return [...drops, {
        id: action.id,
        content: action.text,
        metas: []
      }];
    }
    case 'changed': {
      return drops.map(t => {
        if (t.id === action.drop.id) {
          return action.drop;
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

const initialDrops = [
  { id:"111",content: "This is a note taken to remember", metas: [ { key: 'type', value:'text' }, { key:'extension', value:"Recurrent"}, { key:'label', value:"Personal Tag"}]},
  { id:"222",content: [{ item: "Do Dishes", checked: false},{ item: "Make Bed", checked: false},{ item: "Clean Bathroom", checked: false},{ item: "Feed Dog", checked: false}], metas: [ { key: 'type', value:'checklist' }, { key:'person', value:"Christine Pike"}, { key:'group', value:"Project"}]},
  { id:"333",content: { description:"This is a beautiful image...", src: '/assets/images/placeholders/covers/1.jpg'}, metas: [ {key: 'type', value: 'image' }, {key: 'public', value: 'OceanOS Blog' }]},
  { id:"444",content: "This is a response from ChatGPT", metas: [ { key:'type', value:"text"}, { key:'dapp', value:"ChatGPT"}]}
];