// Code your solution in this file!
function distanceFromHqInBlocks(n)  {
  const hq = 42
  if (hq > n) {
    return hq - n
  } else {
    return n - hq
  }
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n) * 264
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264
  } else if (start === end) {
    return 0
  } else {
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
