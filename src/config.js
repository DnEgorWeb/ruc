const config = {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    isBrowser: typeof window !== 'undefined',

    basename: process.env.PUBLIC_PATH,
}

module.exports = config
