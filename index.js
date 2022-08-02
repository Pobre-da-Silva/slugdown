let slugdown_time = 200;

const sleep = function(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
};

export const slugdown = {
	set_slugdown_time: function(time) {
		slugdown_time = time;
	},

	get_slugdown_time: function(time) {
		return slugdown_time;
	},

	slugdown: async function(target_func) {
		await sleep(slugdown_time);
		target_func();
	}
};
