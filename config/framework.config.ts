require('dotenv').config({
    path: `.env.${process.env.ENVIRONMENT}`,
    override: true
})

class FrameworkConfig {
    baseURL: string = process.env.BASEURL
    username: string = process.env.USERNAME;
    password: string = process.env.PASSWORD;
}
export default new FrameworkConfig();