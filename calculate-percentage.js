const calculatePercentage = (partNum, wholeNum) => {
  let percentage = (partNum / wholeNum) * 100;
  percentage = percentage.toFixed(2);
  console.log(`Result: ${partNum} is ${percentage}% of ${wholeNum}`);
  return percentage;
};

const [partNum, wholeNum] = process.argv.slice(2);
calculatePercentage(partNum, wholeNum);