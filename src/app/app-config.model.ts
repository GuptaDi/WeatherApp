export interface IAppConfig {
    app: {
        appId: string,
        location: string,
        daysCount: number
    },
    apiServer: {
        url: string
    }
}