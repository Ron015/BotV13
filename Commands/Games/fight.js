const { Fight }  = require("weky") 


module.exports = {
	name: 'fight',
  description: "First one to shoot wins!",
	aliases: ['battle'],
	run: async (client, message, args) => {

await Fight({
    message: message,
    opponent: message.mentions.users.first(),
    embed: {
        title: 'Fight | Lunar Development',
        color: '#5865F2',
        footer: '©️ Lunar Development',
        timestamp: true
    },
    buttons: {
      hit: 'Attack',
      heal: 'Heal',
      cancel: 'Run Away',
      accept: 'Accept',
      deny: 'Deny'
    },
    acceptMessage: '<@{{challenger}}> has challenged <@{{opponent}}> for a fight!',
    winMessage: 'GG, <@{{winner}}> won the fight!',
    endMessage: '<@{{opponent}}> didn\'t answer in time. So, I dropped the game!',
    cancelMessage: '<@{{opponent}}> refused to have a fight with you!',
    fightMessage: '{{player}} you go first!',
    opponentsTurnMessage: 'Please wait for your opponents move!',
    highHealthMessage: 'You cannot heal if your HP is above 80!',
    lowHealthMessage: 'You cannot cancel the fight if your HP is below 50!',
    returnWinner: false,
    othersMessage: 'Only {{author}} can use the buttons!'
});
  }}