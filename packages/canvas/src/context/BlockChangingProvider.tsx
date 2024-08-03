import React from "react";
import { IBlock, ITreeBlock } from "../block/IBlock";
import { useBlockSelecting } from "./BlockSelectingProvider";

type BlockChangingContext = {

};

const BlockChangingContext = React.createContext({} as BlockChangingContext);

export const BlockChangingProvider = ({ children, treeBlock }: { children: any, treeBlock: ITreeBlock }) => {
  const [blockTree, setBlockTree] = React.useState<ITreeBlock>(treeBlock);
  const { pathSelectedBlock } = useBlockSelecting()

  const value = React.useMemo(() => {
    return { };
  }, []);
  
  return (
    <BlockChangingContext.Provider value={value}>
      {children}
    </BlockChangingContext.Provider>
  );
};

export const useBlockChanging = () => React.useContext(BlockChangingContext);
