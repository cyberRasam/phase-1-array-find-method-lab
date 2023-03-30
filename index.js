// code your solution here
function superbowlWin(records) {
     const winRecord = records.find((record) => {
        return record.result === "W"
     })
     return winRecord ? winRecord.year : undefined;
}