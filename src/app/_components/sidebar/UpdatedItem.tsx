import { Check } from "lucide-react";
import React from "react";

type Props = {
  handleSaveEdit: () => void;
  newTitle: string;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
};

// always update, no x or check (cog as toggle only) .. if sub list not opened , can't open & edit (ethier allow or not )
const UpdatedItem = ({
  handleSaveEdit,
  newTitle,
  setNewTitle
}: Props) => {
  return (
    <div className="flex items-center">
      <input
        className="w-10/12 focus-visible:outline-none pl-[2px]"
        type='text'
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
      />
      <button onClick={handleSaveEdit} className="bg-gray-300"><Check color="#25bb1b" /></button>
    </div>
  );
};

export default UpdatedItem;
