import { lazy, Suspense } from 'react';
import { TDrop } from '../../interfaces/interfaces';

export const DropContentType = (drop: TDrop) => {

  const dropType = drop.metas.find((i) => i.type == "type")?.value || "unknown"; 

  const DynamicComponent = lazy(() => import(`./types/${dropType}.tsx`));
    
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent {...drop} />
    </Suspense>
  );
};
