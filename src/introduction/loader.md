# Loader

## LuBanLoader.css(url, blockId)

- url(加载地址): string
- blockId(区块ID):string

加载CSS束

## LuBanLoader.loadScript(url, blockId, async, next)

[网页性能优化之异步加载js文件](https://juejin.im/post/5bcdaed7e51d457a8254e1b7)

- url(加载地址): string
- blockId(区块ID):string
- async(JS 延时加载):defer|async
- next(区块ID):function

加载CSS束

## LuBanLoader.getCurrentBlockData()

## LuBanLoader.getBlockData(blockId)

- blockId(区块ID):string

## LuBanLoader.removeBundle(blockId)

- blockId(区块ID):string

```
;(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else {
    // Global (browser)
    root.LuBanLoader = factory();
  }
}(this, function() {
  var LuBanLoader = LuBanLoader || (function(window, document) {
    var LuBanLoader = {};
    LuBanLoader.version = '1.0.0';

    var head = document.getElementsByTagName('head')[0];
    var body = document.getElementsByTagName('body')[0];

    // 异步加载JS
    var loadScript = LuBanLoader.loadScript = function(url, blockId, async, next) {
      var script = document.createElement('script');
      script.charset = 'UTF-8';
      script.async = async;
      if (blockId) {
        script.dataset.jsBlockId = blockId;
      }
      script.onerror = function() {
        next && next(true);
      };
      var loaded = false;
      script.onload = script.onreadystatechange = function() {
        if (!loaded &&
          (!script.readyState ||
            'loaded' === script.readyState ||
            'complete' === script.readyState)) {

          loaded = true;
          setTimeout(function() {
            next && next(false);
          }, 0);
        }
      };
      script.src = url;
      body.appendChild(script);
    };

    // 异步加载CSS
    var loadCss = LuBanLoader.loadCss = function(url, blockId) {
      var style = document.createElement('link');
      style.href = url;
      if (blockId) {
        style.dataset.cssBlockId = blockId;
      }
      style.rel = 'stylesheet';
      style.type = 'text/css';
      head.appendChild(style);
    };

    var getCurrentBlockData = LuBanLoader.getCurrentBlockData = function() {
      /**
       * 当前正在被执行的脚本
       * https://caniuse.com/#search=currentScript
       */
      var currentScript = document.currentScript;
      var currentUUID = (currentScript && currentScript.dataset.jsBlockId) || '';
      var blockDataEle = document.querySelectorAll(`[data-block-textarea="${currentUUID}"]`);
      var currentBlockDataStr = (blockDataEle.length > 0 && blockDataEle[0].innerText) || '';

      var blockObj = {};
      if (currentBlockDataStr) {
        blockObj = JSON.parse(currentBlockDataStr);
      }

      return blockObj;
    };
    
    var getBlockData = LuBanLoader.getBlockData = function(blockId) {
      var blockDataEle = document.querySelectorAll(`[data-block-textarea="${blockId}"]`);
      var blockDataStr = (blockDataEle.length > 0 && blockDataEle[0].innerText) || '';

      var blockObj = {};
      if (blockDataStr) {
        blockObj = JSON.parse(blockDataStr);
      }

      return blockObj;
    };

    var removeBundle = Loader.removeBundle = function(blockId) {
      var cssBundleEle = document.querySelectorAll(`[data-css-block-id="${blockId}"]`);
      var jsBundleEle = document.querySelectorAll(`[data-js-block-id="${blockId}"]`);

      cssBundleEle && cssBundleEle[0] && cssBundleEle[0].remove();
      jsBundleEle && jsBundleEle[0] && jsBundleEle[0].remove();
    };

    return LuBanLoader;
  }(window, document));

  return LuBanLoader;
}));
```
