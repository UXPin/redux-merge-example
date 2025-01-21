module.exports = {
    components: {
        categories: [
            {
                name: 'General',
                include: [
                    'src/components/ReduxStateEditor.tsx',
                    'src/components/UserAgeDisplay.tsx',
                    'src/components/UserNameDisplay.tsx',
                ],
            },
        ],
        wrapper: 'src/components/UXPinWrapper.tsx',
        webpackConfig: 'webpack.config.js',
    },
    name: 'TypeScript Design System'
};
