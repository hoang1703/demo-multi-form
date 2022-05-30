const sleep = async value => {
  await timeout(3000);
  return {
    id: value ? 1 : 0,
  };
};
const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const submitForm = async ({
  valuesForm1,
  valuesForm2,
  valuesForm3,
  valuesForm4,
  valuesForm5,
}) => {
  try {
    const data1 = await sleep(valuesForm1);
  
    if (data1.id) {
      const data2 = await sleep(valuesForm2);
  
      if (data2.id) {
        const data3 = await sleep(valuesForm3);
  
        if (data3.id) {
          // ...
        } else {
          // handleErrorAPI3
        }
      } else {
        // handleErrorAPI2
      }
    } else {
      // handleErrorAPI1
    }
    
  } catch (error) {
    // handleError
  }
};
