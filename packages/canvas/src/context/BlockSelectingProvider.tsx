import React from "react";
import { IBlock, ITreeBlock } from "../block/IBlock";

type BlockSelectingContext = {
  pathSelectedBlock?: string;
  setPathSelectedBlock: (path: string) => void;
  onResetSelectedBlock: () => void
};

const BlockSelectingContext = React.createContext({} as BlockSelectingContext);

export const BlockSelectingProvider = ({ children }: { children: any, treeBlock: ITreeBlock }) => {
  const [pathSelectedBlock, setPathSelectedBlock] = React.useState<string>();

  const onResetSelectedBlock = React.useCallback(() => {
    setPathSelectedBlock(undefined);
  }, [setPathSelectedBlock]);

  const value = React.useMemo(() => {
    return { pathSelectedBlock, setPathSelectedBlock, onResetSelectedBlock };
  }, [pathSelectedBlock, setPathSelectedBlock, onResetSelectedBlock]);
  
  return (
    <BlockSelectingContext.Provider value={value}>
      {children}
    </BlockSelectingContext.Provider>
  );
};

export const useBlockSelecting = () => React.useContext(BlockSelectingContext);
