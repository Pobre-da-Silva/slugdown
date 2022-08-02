export const slugdown = {
	slugdown_time: 200,

	sleep: function(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	},

	set_slugdown_time: function(time) {
		this.slugdown_time = time;
	},

	get_slugdown_time: function(time) {
		return this.slugdown_time;
	},

	slugdown: async function(target_func) {
		await this.sleep(this.slugdown_time);
		target_func();
	}
};
