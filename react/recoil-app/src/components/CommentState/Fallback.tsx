import React from "react";

type SuspenseFallbackProps = {type: string};
const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({type}) => {
  console.log(`${type} loading...`);
  return <div>{type} loading...</div>
};

export default SuspenseFallback;
