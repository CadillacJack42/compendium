export const fetchChords = async () => {
  const res = await fetch('https://api.uberchord.com/v1');
  //   const json = await res.json();
  console.log(res);
};
