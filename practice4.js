const myScore = 70;
const friendScore = 35;
if (myScore > 80) {
  if (friendScore > 80) {
    console.log('go for a lunch');
  }
  if (friendScore < 80 && friendScore >= 60) {
    console.log('good luck next time');
  }
  if (friendScore < 60 && friendScore >= 40) {
    console.log('message unseen');
  }
  if (friendScore < 40) {
    console.log('block your friend');
  }
} else {
  console.log('go to home and sleep and act sad');
}
