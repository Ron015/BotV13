const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const API = require('leoapi.xyz');
const leo = new API()
module.exports = {
  name: 'image',
  description: 'Image commands',
  options: [
      {
          name: 'achievement',
          description: 'Achieve something in your life for once',
          type: 'SUB_COMMAND',
          options: [
            {
                name: 'title',
                type: "STRING",
                required: true,
                description: 'Title for the achievement'
            },
            {
                name: 'text',
                type: "STRING",
                required: true,
                description: 'Text for the achievement'
            }
          ]
      },
      {
          name: 'beautiful',
          type: 'SUB_COMMAND',
          description: 'Beautify yourself',
          options: [
              {
                name: 'user',
                type: 'USER',
                required: false,
                description: 'User to beautify'
              }
          ]
      },
      {
        name: 'bobross',
        type: 'SUB_COMMAND',
        description: 'Let Bob Ross paint you',
        options: [
            {
              name: 'user',
              type: 'USER',
              required: false,
              description: 'User to paint'
            }
        ]
    },
    {
        name: 'busted',
        type: 'SUB_COMMAND',
        description: 'Bust that user',
        options: [
            {
              name: 'user',
              type: 'USER',
              required: false,
              description: 'User to snitch on'
            }
        ]
    },
    {
        name: 'changemymind',
        type: 'SUB_COMMAND',
        description: 'I dare you to change my mind',
        options: [
            {
              name: 'text',
              type: 'STRING',
              required: true,
              description: 'Text to change my mind about'
            }
        ]
    },
    {
        name: 'drake',
        type: 'SUB_COMMAND',
        description: 'You used to call me on my cell phone',
        options: [
            {
              name: 'nah',
              type: 'STRING',
              required: true,
              description: 'Nah not this'
            },
            {
                name: 'yea',
                type: 'STRING',
                required: true,
                description: 'YEAAAA THIS'
              }
        ]
    },
    {
        name: 'fear-man',
        type: 'SUB_COMMAND',
        description: 'That thing I fear it',
        options: [
            {
              name: 'user',
              type: 'USER',
              required: false,
              description: 'User to be feared'
            }
        ]
    },
    {
        name: 'invert',
        type: 'SUB_COMMAND',
        description: 'Make an avatar cursed',
        options: [
            {
              name: 'user',
              type: 'USER',
              required: false,
              description: 'User to be cursed'
            }
        ]
    },
    {
        name: 'jokeoverhead',
        type: 'SUB_COMMAND',
        description: 'You missed the joke',
        options: [
            {
              name: 'user',
              type: 'USER',
              required: false,
              description: 'User that missed it'
            }
        ]
    },
    {
        name: 'panik-kalm',
        type: 'SUB_COMMAND',
        description: 'I am paniking',
        options: [
            {
                name: 'panik',
                type: 'STRING',
                required: true,
                description: "I am paniking"
            },
            {
              name: 'kalm',
              type: 'STRING',
              required: true,
              description: 'I am kalm'
          },
          {
              name: 'panik2',
              type: 'STRING',
              required: true,
              description: "I am paniking AGAIN"
          }
        ]
    },
    {
        name: 'pixelize',
        type: 'SUB_COMMAND',
        description: 'Censor them',
        options: [
            {
              name: 'user',
              type: 'USER',
              required: false,
              description: 'User to "censor"'
            }
        ]
    },
    {
        name: 'spongebob-burn',
        type: 'SUB_COMMAND',
        description: 'BURN IT NOW',
        options: [
            {
              name: 'text',
              type: 'STRING',
              required: true,
              description: 'Text to burn...'
            }
        ]
    },
    {
        name: 'this-guy',
        description: 'hey Joe come take a look at this guy',
        type: 'SUB_COMMAND',
        options: [
            {
                name: 'user',
                type: 'USER',
                required: false,
                description: 'Laugh at this user'
            }
        ],
    },
    {
        name: 'tuxedo-pooh',
        description: "Pooh cannot be more formal than this",
        type: 'SUB_COMMAND',
        options: [
            {
                name: 'normal',
                type: 'STRING',
                required: true,
                description: "Yucky very casual"
            },
            {
                name: 'formal',
                type: 'STRING',
                required: true,
                description: 'Yesss very formal'
            }
        ]
    },
    {
        name: 'wanted',
        description: 'Wanted Dead or Alive',
        type: 'SUB_COMMAND',
        options: [
            {
                name: 'user',
                type: 'USER',
                required: false,
                description: 'I want this kid NOW'
            }
        ],
    }, 
    {
        name: 'gay',
        type: 'SUB_COMMAND',
        description: 'Become happy ;)',
        options: [
            {
                name: 'user', 
                required: false,
                type: 'USER',
                description: 'User to make happy ;)'
            }
        ]
    }, 
    {
        name: 'spotify',
        description: 'Play something in spotify',
        type: 'SUB_COMMAND',
        options: [
            {
                name: 'name',
                required: true,
                description: 'Name of song',
                type: 'STRING'
            }, 
            {
                name: 'title',
                required: false,
                description: 'Title of album',
                type: 'STRING'
            },
            {
                name: 'artist',
                type: 'STRING',
                description: 'Artist of the song',
                required: false
            },
            {
                name: 'user',
                type: 'USER',
                required: false,
                description: 'The song image'
            }
        ]
    }
  ],
  userPerm: ['SEND_MESSAGES'],
  botPerm: ['SEND_MESSAGES'],
  /**
    @param {CommandInteraction} interaction
    @param {Client} client
    @param {String[]} args
  */
  run: async(client, interaction, args) => {

     switch (interaction.options.getSubcommand()) {
         case 'achievement': {
            const title = interaction.options.getString('title');
            const text = interaction.options.getString('text');
            leo.image('achievement', {
                title,
                text,
            }).then(image => interaction.followUp({ files: [image]}))
            break;
         }
     
            case 'beautiful':{
                const user = interaction.options.getUser('user')
                if(user) {
                    leo.image('beautiful', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('beautiful', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'bobross': {
                const user = interaction.options.getUser('user')
                if(user) {
                    leo.image('bobross', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('bobross', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'busted': {
                const user = interaction.options.getUser('user')
                if(user) {
                    leo.image('busted', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('busted', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'changemymind': {
                const text = interaction.options.getString('text')
                
                leo.image('changemymind', {
                    text
                }).then(image => interaction.followUp({ files: [image]}))
                break;
            }

            case 'drake': {
                const nah = interaction.options.getString('nah')
                const yea = interaction.options.getString('yea')

                leo.image('drake', {
                    text1: nah,
                    text2: yea
                }).then(image => interaction.followUp({ files: [image]}))
                break;
            }

            case 'fear-man': {
                const user = interaction.options.getUser('user')
                if(user) {
                    leo.image('fear-man', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('fear-man', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'invert': {
                const user = interaction.options.getUser('user')
                if(user) {
                    leo.image('invert', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('invert', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'jokeoverhead': {
                const user = interaction.options.getUser('user')
                if(user) {
                    leo.image('jokeoverhead', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('jokeoverhead', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'panik-kalm': {
                const panik = interaction.options.getString('panik');
                const kalm = interaction.options.getString('kalm');
                const panik2 = interaction.options.getString('panik2');
                leo.image('panik-kalm', {
                    panik1: panik,
                    kalm,
                    panik2,
                }).then(image => interaction.followUp({ files: [image]}))
                break;
            }

            case 'pixelize': {
                const user = interaction.options.getUser('user')
                if(user) {
                    leo.image('pixelize', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('pixelize', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'spongebob-burn': {
                const text = interaction.options.getString('text')
                leo.image('spongebob-burn', {
                    text
                }).then(image => interaction.followUp({ files: [image]}))
                break;
            }

            case 'this-guy': {
                if(user) {
                    leo.image('this-guy', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('this-guy', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'tuxedo-pooh': {
                const normal = interaction.options.getString('normal')
                const formal = interaction.options.getString('formal');

                leo.image('tuxedo-pooh', {
                    text1: normal,
                    text2: formal
                }).then(image => interaction.followUp({ files: [image]}))
                break;
            }
            
            case 'wanted': {
                const user = interaction.options.getUser('user')

                if(user) {
                    leo.image('wanted', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('wanted', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'gay': {
                const user = interaction.options.getUser('user')

                if(user) {
                    leo.image('gay', {
                        image: user.displayAvatarURL({dynamic: true, format: 'jpg' })
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('gay', {
                        image: interaction.member.user.displayAvatarURL({dynamic: true,  format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }
                break;
            }

            case 'spotify': {
                const name = interaction.options.getString('name');
                const title = interaction.options.getString('title');
                const artist = interaction.options.getString('artist')
                const user = interaction.options.getUser('user')

                const title1 = title ? title : 'No title'
                const artist1 = artist ? artist : 'No Artist'

                if(user) {
                    leo.image('spotify', {
                        name: name,
                        title: title1,
                        artist: artist1,
                        image: user.displayAvatarURL({ dynamic: true, format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                } else {
                    leo.image('spotify', {
                        name: name,
                        title: title1,
                        artist: artist1,
                        image: interaction.member.user.displayAvatarURL({ dynamic: true, format: 'jpg'})
                    }).then(image => interaction.followUp({ files: [image]}))
                }

                break;
            }
     }
  }
}