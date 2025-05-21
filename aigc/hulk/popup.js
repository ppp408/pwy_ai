/**
 *  @desc 页面背景切换
 * @author pp
 * @data 2024-06-20 16:21:35
 */
// JS面向对象 语言
// 事件监听
// 弹窗加载完后
document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    changeColorButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0].id) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "changeBackgroundColor"}, 
                    () => chrome.runtime.lastError); // 处理连接错误
            }
        });
    });
});
