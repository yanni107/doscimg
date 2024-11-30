function FindProxyForURL(url, host) {
    // 定义允许访问的域名列表
    var allowedDomains = [
        "youtube.com",
        "google.com",
        "github.com"
    ];

    // 检查请求的域名是否在允许列表中
    for (var i = 0; i < allowedDomains.length; i++) {
        if (dnsDomainIs(host, allowedDomains[i])) {
            return "DIRECT"; // 直接访问
        }
    }

    // 所有不在允许列表中的域名请求均被阻止
    return "PROXY 127.0.0.1:7777"; // 将请求指向一个无效代理来阻止访问
}
