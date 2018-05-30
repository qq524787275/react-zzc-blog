/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */
// let baseUrl = 'http://zhuzichu.com:8080';
// let uploadUrl= 'http://zhuzichu.com:8080/api/file/upload';
let baseUrl = 'http://localhost:8012';
let uploadUrl= 'http://localhost:8012/api/file/upload';
export {
	baseUrl,
    uploadUrl,
}