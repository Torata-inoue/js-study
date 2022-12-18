import React, {useState} from "react";
import {useFormContext} from "react-hook-form";
import {GroupType} from "./Groups";

type GroupFormItemType = {
  groups: {items: number[]}[]
};
type ItemsProps = {
  group: GroupType;
  isOpen: boolean;
};
const Items: React.FC<ItemsProps> = ({group, isOpen}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const {setValue} = useFormContext<GroupFormItemType>();
  const onItemClick = (itemId: number) => () => {
    setSelectedItems([...selectedItems, itemId]);
    setValue(`groups.${group.id}.items`, [...selectedItems, itemId]);
  };
  return (
    <div className="Groups-item-list" style={{display: isOpen ? 'block' : 'none'}}>
      <ul>
        {
          group.items.map(item => (
            <li key={item.id}>
              <button type="button" onClick={onItemClick(item.id)}>{item.name}</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Items;
