import{s as x,n as u,o as I}from"../chunks/scheduler.e108d1fd.js";import{S as E,i as y,g as d,s as w,h as f,j as h,f as t,c as p,y as b,k as g,a}from"../chunks/index.a21d6cee.js";function P(v){let r,l,s,c,o,m,i,F=`<img src="/logo.png"/> <iframe id="JotFormIFrame-233385613498062" title="Form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/233385613498062" frameborder="0" style="min-width:100%;max-width:100%;height:539px;border:none;" scrolling="no"></iframe> <script type="text/javascript">var ifr = document.getElementById('JotFormIFrame-233385613498062');
    if (ifr) {
      var src = ifr.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(
          window.location.href
            .substr(window.location.href.indexOf('?') + 1)
            .split('&')
        );
      }
      if (src && src.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(
          src.substr(src.indexOf('?') + 1).split('&')
        );
        src = src.substr(0, src.indexOf('?'));
      }
      iframeParams.push('isIframeEmbed=1');
      ifr.src = src + '?' + iframeParams.join('&');
    }
    window.handleIFrameMessage = function (e) {
      if (typeof e.data === 'object') {
        return;
      }
      var args = e.data.split(':');
      if (args.length > 2) {
        iframe = document.getElementById(
          'JotFormIFrame-' + args[args.length - 1]
        );
      } else {
        iframe = document.getElementById('JotFormIFrame');
      }
      if (!iframe) {
        return;
      }
      switch (args[0]) {
        case 'scrollIntoView':
          iframe.scrollIntoView();
          break;
        case 'setHeight':
          iframe.style.height = args[1] + 'px';
          if (
            !isNaN(args[1]) &&
            parseInt(iframe.style.minHeight) > parseInt(args[1])
          ) {
            iframe.style.minHeight = args[1] + 'px';
          }
          break;
        case 'collapseErrorPage':
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + 'px';
          }
          break;
        case 'reloadPage':
          window.location.reload();
          break;
        case 'loadScript':
          if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) {
            break;
          }
          var src = args[1];
          if (args.length > 3) {
            src = args[1] + ':' + args[2];
          }
          var script = document.createElement('script');
          script.src = src;
          script.type = 'text/javascript';
          document.body.appendChild(script);
          break;
        case 'exitFullscreen':
          if (window.document.exitFullscreen) window.document.exitFullscreen();
          else if (window.document.mozCancelFullScreen)
            window.document.mozCancelFullScreen();
          else if (window.document.mozCancelFullscreen)
            window.document.mozCancelFullScreen();
          else if (window.document.webkitExitFullscreen)
            window.document.webkitExitFullscreen();
          else if (window.document.msExitFullscreen)
            window.document.msExitFullscreen();
          break;
      }
      var isJotForm = e.origin.indexOf('jotform') > -1 ? true : false;
      if (
        isJotForm &&
        'contentWindow' in iframe &&
        'postMessage' in iframe.contentWindow
      ) {
        var urls = {
          docurl: encodeURIComponent(document.URL),
          referrer: encodeURIComponent(document.referrer),
        };
        iframe.contentWindow.postMessage(
          JSON.stringify({ type: 'urls', value: urls }),
          '*'
        );
      }
    };
    window.isPermitted = function (originUrl, whitelisted_domains) {
      var url = document.createElement('a');
      url.href = originUrl;
      var hostname = url.hostname;
      var result = false;
      if (typeof hostname !== 'undefined') {
        whitelisted_domains.forEach(function (element) {
          if (
            hostname.slice(-1 * element.length - 1) === '.'.concat(element) ||
            hostname === element
          ) {
            result = true;
          }
        });
        return result;
      }
    };
    if (window.addEventListener) {
      window.addEventListener('message', handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent('onmessage', handleIFrameMessage);
    }<\/script>`;return{c(){r=d("div"),l=w(),s=d("div"),c=w(),o=d("div"),m=w(),i=d("div"),i.innerHTML=F,this.h()},l(e){r=f(e,"DIV",{class:!0}),h(r).forEach(t),l=p(e),s=f(e,"DIV",{class:!0}),h(s).forEach(t),c=p(e),o=f(e,"DIV",{class:!0}),h(o).forEach(t),m=p(e),i=f(e,"DIV",{"data-svelte-h":!0}),b(i)!=="svelte-1n65u9p"&&(i.innerHTML=F),this.h()},h(){g(r,"class","one"),g(s,"class","two"),g(o,"class","three")},m(e,n){a(e,r,n),a(e,l,n),a(e,s,n),a(e,c,n),a(e,o,n),a(e,m,n),a(e,i,n)},p:u,i:u,o:u,d(e){e&&(t(r),t(l),t(s),t(c),t(o),t(m),t(i))}}}function k(v){return I(()=>{document.createElement("script")}),[]}class C extends E{constructor(r){super(),y(this,r,k,P,x,{})}}export{C as component};
