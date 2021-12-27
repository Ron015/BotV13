const eco = require('../../database/models/economy')

module.exports = {
    name: 'expandbank',
    aliases: ['addbankspace'],
   run: async (client,message, args)=>{
        const allowed = ['882978452918128641']

        if(!allowed.includes(message.author.id)) return

        const target = message.mentions.users.first() || null
        if(!target) return message.channel.send(`Please @ the user.`)

        args.shift()
        const amount = parseInt(args[0]) || null
        if(!amount || isNaN(amount)) return message.channel.send("Enter a valid amount.")
        
        let user = await eco.findOne({ userID: target.id })
        await eco.findOneAndUpdate({
                userID: target.id,
              },
              {
                $inc: {
                  maxBank: amount,
                },
              })
            user.save()
            return message.channel.send(`Done! Successfully added ${amount} to ${target} bankspace`)
        
        user.coins = amount
        user.save()
        message.channel.send(`Done! Successfully added ${amount} to ${target} bankspace`)

    }
              }