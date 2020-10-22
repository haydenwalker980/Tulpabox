const Command = require("../structures/command");

module.exports = class StatsCommand extends Command {

	constructor(bot) {
		super(bot);
		this.help = "Show info about the bot.";
		this.usage = [
			["", "Show list of technical info about the bot's status"]
		];
		this.desc =  "Displays a list of useful technical information about the bot's running processes. Lists technical details of all clusters, useful for monitoring recent outages and the progress of ongoing restarts. Displays the total memory usage and allocation of the bot, along with how many servers the bot is serving. Displays which shard is currently supporting this server and which cluster that shard is a part of.";
	}

	execute(ctx) {
		let {bot, msg} = ctx;
		process.send({name: "postStats", channelID: msg.channel.id, shard: msg.channel.guild ? msg.channel.guild.shard.id : 0, cluster: bot.base.clusterID});
	}
};