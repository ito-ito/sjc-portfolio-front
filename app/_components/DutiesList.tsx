const fetchDuties = async () => {
  const response = await fetch("http://172.18.0.1:3000/duties", {
    // const response = await fetch("http://back:3000/duties", {
    cache: "no-store",
  });
  return response.json();
};

export const DutiesList = async () => {
  const duties = await fetchDuties();

  return (
    <>
      {duties.map((duty) => (
        <p>{duty.title}</p>
      ))}
    </>
  );
};
