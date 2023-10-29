export const customArgTypes = (hideProps: string[]) => {
  let res = {};
  hideProps.forEach((prop) => {
    res = {
      ...res,
      [prop]: {
        table: {
          disable: true,
        },
      },
    };
  });
  return res;
};
