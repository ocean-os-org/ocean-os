import { lazy, Suspense } from 'react';
import { TDrop } from '../../interfaces';
import DropCheckList from './types/DropCheckList';
import DropImage from './types/DropImage';
import DropText from './types/DropText';


export const DropContentType = (drop: TDrop) => {

  const dropType = drop.metas.find((i) => i.type == "media")?.name || "unknown"; 

  const types:Record<string,JSX.Element> = {
    'DropText': <DropText {...drop} />,
    'DropImage': <DropImage {...drop} />,
    'DropCheckList': <DropCheckList {...drop} />
  }
    
  return types[dropType];
};

/*

Flickering becasue of the dynamic component
export const ADropContentType = (drop: TDrop) => {

  const dropType = drop.metas.find((i) => i.type == "media")?.value || "unknown"; 

  const DynamicComponent = lazy(() => import(`./types/${dropType}.tsx`) );
    
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent {...drop} />
    </Suspense>
  );
};
*/