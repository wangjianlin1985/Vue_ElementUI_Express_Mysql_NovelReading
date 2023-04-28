const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejs4ph8u/",
            name: "nodejs4ph8u",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejs4ph8u/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电子书阅读与共享平台"
        } 
    }
}
export default base
