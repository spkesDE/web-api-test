module.exports = {
    async foo({homey}: any) {
        return await homey.app.foo();
    },
    async fooPost({homey, body}: any) {
        return homey.app.fooPost(body);
    }
};
