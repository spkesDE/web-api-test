module.exports = {
    async foo({homey}: any) {
        return await homey.app.foo();
    },
    async fooPost({homey, body}: any) {
        console.log(body);
        return await homey.app.fooPost(body);
    }
};
