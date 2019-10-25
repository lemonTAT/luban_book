# Loader

## LubanLoader.css(url, blockId)

- url(加载地址): string
- blockId(区块ID):string

加载CSS束

## LubanLoader.loadScript(url, blockId, async, next)

[网页性能优化之异步加载js文件](https://juejin.im/post/5bcdaed7e51d457a8254e1b7)

- url(加载地址): string
- blockId(区块ID):string
- async(JS 延时加载):defer|async
- next(区块ID):function

加载CSS束

## LubanLoader.getCurrentBigRenderData()

## LubanLoader.getBigRenderData(blockId)

- blockId(区块ID):string

## LubanLoader.removeBundle(blockId)

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
    root.LubanLoader = factory();
  }
}(this, function() {
  var LubanLoader = LubanLoader || (function(window, document) {
    var LubanLoader = {};
    LubanLoader.version = '1.0.0';

    var head = document.getElementsByTagName('head')[0];
    var body = document.getElementsByTagName('body')[0];

    // 异步加载JS
    var loadScript = LubanLoader.loadScript = function(url, blockId, async, next) {
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
    var loadCss = LubanLoader.loadCss = function(url, blockId) {
      var style = document.createElement('link');
      style.href = url;
      if (blockId) {
        style.dataset.cssBlockId = blockId;
      }
      style.rel = 'stylesheet';
      style.type = 'text/css';
      head.appendChild(style);
    };

    /**
     * 获取当前执行JS的blockId
     */
    var getCurrentBlockId = LubanLoader.getCurrentBlockId = function() {
      /**
       * 当前正在被执行的脚本
       * https://caniuse.com/#search=currentScript
       */
      var currentScript = document.currentScript;
      return (currentScript && currentScript.dataset.jsBlockId) || 'container';
    };

    /**
     * 获取blockId对应BigRenderData
     * @type {function()}
     */
    var getCurrentBigRenderData = LubanLoader.getCurrentBigRenderData = function() {
      /**
       * 当前正在被执行的脚本
       * https://caniuse.com/#search=currentScript
       */
      var currentUUID = LubanLoader.getCurrentBlockId();
      var bigRenderDataEle = document.querySelectorAll(`[data-block-textarea="${currentUUID}"]`);
      var bigRenderDataStr = (bigRenderDataEle.length > 0 && bigRenderDataEle[0].innerText) || '';

      var bigRenderDataObj = {};
      if (bigRenderDataStr) {
        bigRenderDataObj = JSON.parse(bigRenderDataStr);
      }

      return bigRenderDataObj;
    };

    /**
     * 获取block bigrenderData
     */
    var getBigRenderData = LubanLoader.getBigRenderData = function(blockId) {
      var bigRenderDataEle = document.querySelectorAll(`[data-block-textarea="${blockId}"]`);
      var bigRenderDataStr = (bigRenderDataEle.length > 0 && bigRenderDataEle[0].innerText) || '';

      var bigRenderDataObj = {};
      if (bigRenderDataStr) {
        bigRenderDataObj = JSON.parse(bigRenderDataStr);
      }

      return bigRenderDataObj;
    };

    /**
     * 移除block bundle 资源
     */
    var removeBundleEle = LubanLoader.removeBundleEle = function(blockId) {
      var cssBundleEle = document.querySelectorAll(`[data-css-block-id="${blockId}"]`);
      var jsBundleEle = document.querySelectorAll(`[data-js-block-id="${blockId}"]`);

      cssBundleEle && cssBundleEle[0] && cssBundleEle[0].remove();
      jsBundleEle && jsBundleEle[0] && jsBundleEle[0].remove();
    };

    /**
     * eventId收敛
     */
    var getLubanEventId = LubanLoader.getLubanEventId = function(moduleName, blockId, eventType) {
      var eventStr = 'Luban';

      if (moduleName) {
        eventStr = eventStr + `.${moduleName}`;
      }

      if (blockId) {
        eventStr = eventStr + `.${blockId}`;
      }

      if (eventType) {
        eventStr = eventStr + `.${eventType}`;
      }

      return eventStr;
    };

    var throwLubanError = LubanLoader.throwLubanError = function(msg) {
      throw new Error(`${msg}`);
    };

    return LubanLoader;
  }(window, document));

  return LubanLoader;
}));
```
