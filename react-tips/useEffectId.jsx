useEffect(() => {
  (async () => {
    const res = await fetch("https://awesomeurl.com");
    const resData = await res.json();

    if (resData) {
      setData(addId(resData));
    }
  })();
}, []);

const addId = (data) => {
  data.map((item) => {
    return { ...item, id: uuid.v4() };
  });
};
