let slugdownTime = 200;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const slugdown = {
  setSlugdownTime(time) {
    slugdownTime = time;
  },

  getSlugdownTime() {
    return slugdownTime;
  },

  async slugdown(callback) {
    await sleep(slugdownTime);
    callback();
  }
};
