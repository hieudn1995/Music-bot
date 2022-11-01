module.exports = {
    app: {
        token: 'NjA4NTM3ODY0OTQyMzg3MjMx.GPF2Ga.LGT4XrlsDFVitI4lhyO6eK3H0y4azKrahnUM1M',
        playing: 'by Hiếu ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
