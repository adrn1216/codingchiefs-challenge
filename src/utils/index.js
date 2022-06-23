// I separated this function just to show how I structure my folder. I place reusable / commong functions here
export const generateKey = (pre) => {
  // this is a solution I use on my past projects for generating a unique key because using index when mapping an array is not recommended
  return `${pre}_${new Date().getTime()}`;
};
