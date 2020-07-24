(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(6),i=(n(0),n(124)),o={id:"files",title:"Files",sidebar_label:"Files"},c={id:"files",title:"Files",description:"startFileTransfer",source:"@site/docs/files.md",permalink:"/react-native-watch-connectivity/docs/files",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/files.md",sidebar_label:"Files",sidebar:"someSidebar",previous:{title:"Application Context",permalink:"/react-native-watch-connectivity/docs/application-context"},next:{title:"Watch State",permalink:"/react-native-watch-connectivity/docs/api-watch-state"}},s=[{value:"startFileTransfer",id:"startfiletransfer",children:[]},{value:"getFileTransfers",id:"getfiletransfers",children:[]},{value:"monitorFileTransfers",id:"monitorfiletransfers",children:[]}],l={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"startfiletransfer"},"startFileTransfer"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import {startFileTransfer} from 'react-native-watch-connectivity';\n\nconst metadata = {};\n\nconst {id} = await startFileTransfer(\"file:///path/to/file\", metadata);\n\nconsole.log(`Started a new file transfer with id ${id}`);\n")),Object(i.b)("h2",{id:"getfiletransfers"},"getFileTransfers"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import {getFileTransfers} from 'react-native-watch-connectivity';\n\nconst fileTransfers = await getFileTransfers();\n\nObject.entries(fileTransfers).map(([transferId, transferInfo]) => {\n    const {\n        completedUnitCount, // num bytes completed\n        estimatedTimeRemaining, \n        fractionCompleted,\n        throughput, // Bit rate\n        totalUnitCount, // total num. bytes \n        url, // url of file being transferred\n        metadata, // file metadata\n        id, // id === transferId\n        startTime, // time that the file transfer started\n        endTime, // time that the file transfer ended\n        error // null or [Error] if the file transfer failed\n    } = transferInfo;\n})\n")),Object(i.b)("h2",{id:"monitorfiletransfers"},"monitorFileTransfers"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import {monitorFileTransfers} from 'react-native-watch-connectivity';\n\nconst cancel = monitorFileTransfers(event => {\n    const {\n        type, // started | progress | finished | error\n        completedUnitCount, // num bytes completed\n        estimatedTimeRemaining, \n        fractionCompleted,\n        throughput, // Bit rate\n        totalUnitCount, // total num. bytes \n        url, // url of file being transferred\n        metadata, // file metadata\n        id, // id === transferId\n        startTime, // time that the file transfer started\n        endTime, // time that the file transfer ended\n        error // null or [Error] if the file transfer failed\n    } = transferInfo;\n});\n\n// ...\n\ncancel();\n")))}f.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),f=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=f(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=f(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);