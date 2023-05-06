import React, {useState} from "react";
import Items from "./Items";
import Tags from "./Tags";
import {useFormContext} from "react-hook-form";

export type GroupType = {
  name: string;
  id: number;
  items: {name: string; id: number}[],
  tags: {name: string; id: number}[]
};
const groups: GroupType[] = [
  {
    name: '欲しいポケモン',
    id: 1,
    items: [
      {name: 'ヒコザル', id: 1},
      {name: 'ポッチャマ', id: 2},
      {name: 'ナエトル', id: 3},
    ],
    tags: [
      {name: '色違い', id: 1},
      {name: 'Lv100', id: 2},
      {name: '6v', id: 3},
    ]
  },
  {
    name: 'あげるポケモン',
    id: 2,
    items: [
      {name: 'ヒコザル', id: 1},
      {name: 'ポッチャマ', id: 2},
      {name: 'ナエトル', id: 3},
    ],
    tags: [
      {name: '色違い', id: 1},
      {name: 'Lv100', id: 2},
      {name: '6v', id: 3},
    ]
  }
];
type GroupFormType = {
  groups: {
    items: number[];
    tags: number[];
  }[]
};

type GroupProps = {
  group: GroupType;
  index: number;
};
const Group: React.FC<GroupProps> = ({group, index}) => {
  const [open, setOpen] = useState<boolean>(false);
  const {register, getFieldState, formState} = useFormContext<GroupFormType>();
  register(`groups.${group.id}.items`, {required: `${group.name}を最低ひとつ選択してください`});
  const onClick = () => setOpen(true);
  const {error} = getFieldState(`groups.${group.id}.items`, formState);

  return (
    <div className="Groups-item">
      <input type="text" placeholder={`${group.name}を入力`} onClick={onClick} />
      {error && <p style={{color: "red"}}>{error.message}</p>}
      <Items group={group} isOpen={open} />
      <Tags group={group} tags={group.tags} />
    </div>
  );
}

const Groups: React.FC = () => {
  return (
    <div className="HookForm-Groups">
      {
        groups.map((group, index) => (
          <Group key={group.id} group={group} index={index} />
        ))
      }
    </div>
  );
};

export default Groups;
