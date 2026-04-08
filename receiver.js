// 【受信】Backgroundから届いたコメントを、index.htmlに渡す
chrome.runtime.onMessage.addListener((request) => {
    window.postMessage({ type: "FROM_EXTENSION", data: request }, "*");
});

// 【送信】index.htmlから届いた「取得開始」命令を、Backgroundに渡す
window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "START_POLLING_REQUEST") {
        chrome.runtime.sendMessage({ 
            type: "START_POLLING", 
            videoIds: event.data.videoIds 
        });
    }
});
