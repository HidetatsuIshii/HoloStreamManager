chrome.runtime.onMessage.addListener((request) => {
    // GitHub Pages上の元のJS(index.html)にデータを渡す
    window.postMessage({ type: "FROM_EXTENSION", data: request }, "*");
});
