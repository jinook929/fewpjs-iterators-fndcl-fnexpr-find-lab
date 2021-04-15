function superbowlWin(record) {
  const found = record.find(e => e.result == "W")
  if(found) {
    return found.year
  }
}
