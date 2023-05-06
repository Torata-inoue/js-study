import React, {useState} from "react";
import {useFormContext} from "react-hook-form";
import {GroupType} from "./Groups";

type GroupFormTagType = {
  groups: {tags: number[]}[]
};
type TagsProps = {
  group: GroupType;
  tags: {name: string, id: number}[];
};
const Tags: React.FC<TagsProps> = ({group, tags}) => {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const {setValue} = useFormContext<GroupFormTagType>();
  const onTagClick = (tagId: number) => () => {
    setSelectedTags([...selectedTags, tagId]);
    setValue(`groups.${group.id}.tags`, [...selectedTags, tagId]);
  };
  const isSelected = (tagId: number): boolean => selectedTags.some(selectedTag => selectedTag === tagId);
  return (
    <div className="Groups-tags">
      {
        tags.map(tag =>
          <button
            key={tag.id}
            type="button"
            onClick={onTagClick(tag.id)}
            style={{backgroundColor: isSelected(tag.id) ? 'red' : undefined}}
          >
            {tag.name}
          </button>)
      }
    </div>
  )
};

export default Tags;
