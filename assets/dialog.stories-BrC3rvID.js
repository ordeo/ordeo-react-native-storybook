import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,t as a}from"./inputs-B4MjoMvH.js";import{n as o,t as s}from"./story-inputs-BqaRY7rA.js";import{b as c,i as l,o as u,s as d,y as f}from"./iframe-D-AQh-w-.js";import{n as ee,t as te}from"./icon-placeholder-DT6o9G8r.js";import{n as p,t as ne}from"./variant-story-CuO9tfgF.js";import{n as re,t as ie}from"./text-QaViRebF.js";import{t as ae}from"./text-CK1rXrKs.js";import{c as oe,i as se,r as ce,s as le}from"./button-spinner-Bd8WmeNa.js";import{t as ue}from"./button-ERiD_2u5.js";import{a as de,i as fe,o as pe,r as me}from"./icon-button-spinner-utAA51vr.js";import{t as m}from"./icon-button-hZ4WIyIT.js";import{n as he,t as ge}from"./action-list-CZ7a1vnn.js";import{t as _e}from"./action-list-BdRCQ9X8.js";import{F as h,I as ve,a as g,m as ye,o as be,p as _}from"./title-group-head-title-skeleton-title-bar-Down-QxM.js";import{t as xe}from"./title-group-BA0X-MDd.js";import{n as Se,t as Ce}from"./choice-card-C3gqafbI.js";import{d as we,f as Te,l as Ee,u as De}from"./form-group-words-label-BcPvXysS.js";import{a as Oe,i as ke,t as Ae}from"./form-section-BJoetKSr.js";import{t as je}from"./form-328qwTpL.js";import{b as Me,y as Ne}from"./form-field-label-text-DO-65zVe.js";import{a as v,c as Pe,l as y,n as Fe,o as Ie,s as b,t as Le}from"./form-section-words-title-DjoJ4eUW.js";import{c as Re,i as ze,n as Be,r as Ve,s as He,t as Ue}from"./text-input-rule-CDU1PhFe.js";import{t as We}from"./text-input-DPeHHHhf.js";import{n as Ge,t as Ke}from"./toolbar-Dw7eI7Qp.js";function x(){return(x=e((()=>{Ge()})))()}var S,C;function w(){return(w=e((()=>{c(),l(),S=t(),C=n(function({as:e=f,size:t,header:n,body:r,footer:i,style:a,...o}){let s=u(),c=d(s.component.dialog.base,{size:t});return(0,S.jsxs)(e,{...o,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},c,a],children:[n?.({size:t}),r({size:t}),i?.({size:t})]})}),C.__docgenInfo={description:`Asks for the user's full attention.`,methods:[],displayName:`Dialog`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs,
    onLayout = props.onLayout,
    onMoveShouldSetResponder = props.onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
    onResponderEnd = props.onResponderEnd,
    onResponderGrant = props.onResponderGrant,
    onResponderMove = props.onResponderMove,
    onResponderReject = props.onResponderReject,
    onResponderRelease = props.onResponderRelease,
    onResponderStart = props.onResponderStart,
    onResponderTerminate = props.onResponderTerminate,
    onResponderTerminationRequest = props.onResponderTerminationRequest,
    onScrollShouldSetResponder = props.onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder = props.onStartShouldSetResponder,
    onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  if (process.env.NODE_ENV !== 'production') {
    React.Children.toArray(props.children).forEach(item => {
      if (typeof item === 'string') {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }
  var hasTextAncestor = React.useContext(TextAncestorContext);
  var hostRef = React.useRef(null);
  var _useLocaleContext = useLocaleContext(),
    contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = 'div';
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = 'a';
    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
        rel = hrefAttrs.rel,
        target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return createElement(component, supportedProps, {
    writingDirection
  });
})`,computed:!0},required:!1}}}})))()}var T,E;function D(){return(D=e((()=>{i(),s(),T={...o(e=>e.component.dialog.base),withHeader:a([!0,!1]),headerContentPart:a([`TitleGroup`,`Toolbar`]),bodyContentPart:a([`Text`,`Form`]),withFooter:a([!0,!1])},E={size:`sm`,withHeader:!0,headerContentPart:`TitleGroup`,bodyContentPart:`Text`,withFooter:!0}})))()}var O,k;function A(){return(A=e((()=>{c(),l(),O=t(),k=n(function({as:e=f,size:t,content:n,style:r,...i}){let a=u(),o=d(a.component.dialog.body.base,{size:t});return(0,O.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n({})})}),k.__docgenInfo={description:``,methods:[],displayName:`DialogBody`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs,
    onLayout = props.onLayout,
    onMoveShouldSetResponder = props.onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
    onResponderEnd = props.onResponderEnd,
    onResponderGrant = props.onResponderGrant,
    onResponderMove = props.onResponderMove,
    onResponderReject = props.onResponderReject,
    onResponderRelease = props.onResponderRelease,
    onResponderStart = props.onResponderStart,
    onResponderTerminate = props.onResponderTerminate,
    onResponderTerminationRequest = props.onResponderTerminationRequest,
    onScrollShouldSetResponder = props.onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder = props.onStartShouldSetResponder,
    onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  if (process.env.NODE_ENV !== 'production') {
    React.Children.toArray(props.children).forEach(item => {
      if (typeof item === 'string') {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }
  var hasTextAncestor = React.useContext(TextAncestorContext);
  var hostRef = React.useRef(null);
  var _useLocaleContext = useLocaleContext(),
    contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = 'div';
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = 'a';
    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
        rel = hrefAttrs.rel,
        target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return createElement(component, supportedProps, {
    writingDirection
  });
})`,computed:!0},required:!1}}}})))()}var j,M;function N(){return(N=e((()=>{c(),l(),j=t(),M=n(function({as:e=f,size:t,content:n,style:r,...i}){let a=u(),o=d(a.component.dialog.footer.base,{size:t});return(0,j.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n({size:t,style:{alignSelf:`auto`}})})}),M.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs,
    onLayout = props.onLayout,
    onMoveShouldSetResponder = props.onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
    onResponderEnd = props.onResponderEnd,
    onResponderGrant = props.onResponderGrant,
    onResponderMove = props.onResponderMove,
    onResponderReject = props.onResponderReject,
    onResponderRelease = props.onResponderRelease,
    onResponderStart = props.onResponderStart,
    onResponderTerminate = props.onResponderTerminate,
    onResponderTerminationRequest = props.onResponderTerminationRequest,
    onScrollShouldSetResponder = props.onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder = props.onStartShouldSetResponder,
    onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  if (process.env.NODE_ENV !== 'production') {
    React.Children.toArray(props.children).forEach(item => {
      if (typeof item === 'string') {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }
  var hasTextAncestor = React.useContext(TextAncestorContext);
  var hostRef = React.useRef(null);
  var _useLocaleContext = useLocaleContext(),
    contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = 'div';
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = 'a';
    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
        rel = hrefAttrs.rel,
        target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return createElement(component, supportedProps, {
    writingDirection
  });
})`,computed:!0},required:!1}}}})))()}var P,F;function I(){return(I=e((()=>{c(),l(),P=t(),F=n(function({as:e=f,size:t,content:n,style:r,...i}){let a=u(),o=d(a.component.dialog.header.base,{size:t});return(0,P.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n({size:t})})}),F.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs,
    onLayout = props.onLayout,
    onMoveShouldSetResponder = props.onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
    onResponderEnd = props.onResponderEnd,
    onResponderGrant = props.onResponderGrant,
    onResponderMove = props.onResponderMove,
    onResponderReject = props.onResponderReject,
    onResponderRelease = props.onResponderRelease,
    onResponderStart = props.onResponderStart,
    onResponderTerminate = props.onResponderTerminate,
    onResponderTerminationRequest = props.onResponderTerminationRequest,
    onScrollShouldSetResponder = props.onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder = props.onStartShouldSetResponder,
    onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  if (process.env.NODE_ENV !== 'production') {
    React.Children.toArray(props.children).forEach(item => {
      if (typeof item === 'string') {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }
  var hasTextAncestor = React.useContext(TextAncestorContext);
  var hostRef = React.useRef(null);
  var _useLocaleContext = useLocaleContext(),
    contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = 'div';
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = 'a';
    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
        rel = hrefAttrs.rel,
        target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return createElement(component, supportedProps, {
    writingDirection
  });
})`,computed:!0},required:!1}}}})))()}function L({withHeader:e,headerContentPart:t,bodyContentPart:n,withFooter:r,...i}){return(0,R.jsx)(C,{testID:`dialog`,...i,header:e?e=>(0,R.jsx)(F,{...e,content:e=>t===`Toolbar`?(0,R.jsx)(Ke,{...e,ground:`page`}):(0,R.jsx)(h,{...e,disabled:!1,head:e=>(0,R.jsx)(_,{...e,title:e=>(0,R.jsx)(g,{...e,children:`Label`})})})}):void 0,body:e=>(0,R.jsx)(k,{...e,content:e=>n===`Form`?(0,R.jsx)(ke,{...e,size:`sm`,items:[H(0),V(1),z(2)]}):(0,R.jsx)(ie,{...e,type:`body-sm`,intent:`neutral`,bold:!1,emphasis:`high`,disabled:!1,children:`Label`})}),footer:r?e=>(0,R.jsx)(M,{...e,content:e=>(0,R.jsx)(ge,{...e,actions:[U(0),W(1)]})}):void 0})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ee(),ne(),_e(),ue(),Te(),je(),we(),y(),Ae(),m(),ae(),We(),xe(),x(),w(),D(),A(),N(),I(),R=t(),z=e=>function(t){return(0,R.jsx)(Ne,{...t,invalid:!1,side:`block-start`,readonly:!1,disabled:!1,content:e=>(0,R.jsx)(He,{...e,filled:!1,input:e=>(0,R.jsx)(Ve,{...e,children:`Label`}),rule:e=>(0,R.jsx)(Ue,{...e})})},e)},B=e=>function(t){return(0,R.jsx)(Ce,{...t,selected:!1,elevation:`none`,disabled:!1,content:e=>(0,R.jsx)(h,{...e,head:e=>(0,R.jsx)(_,{...e,title:e=>(0,R.jsx)(g,{...e,children:`Label`})})})},e)},V=e=>function(t){return(0,R.jsx)(Ee,{...t,invalid:!1,items:[z(0),B(1)]},e)},H=e=>function(t){return(0,R.jsx)(b,{...t,words:e=>(0,R.jsx)(v,{...e,title:e=>(0,R.jsx)(Le,{...e,children:`Label`})}),items:[V(0),z(1)]},e)},U=e=>function(t){return(0,R.jsx)(le,{...t,destructive:!1,emphasis:`high`,loading:!1,disabled:!1,label:e=>(0,R.jsx)(ce,{...e,children:`Label`})},e)},W=e=>function(t){return(0,R.jsx)(de,{...t,destructive:!1,emphasis:`high`,loading:!1,disabled:!1,icon:e=>(0,R.jsx)(me,{...e,as:te})},e)},G={title:`Feedback & Status/Dialog`,component:C,argTypes:T,args:E,render:L},K={},q=p(G,`size`,L),J=p(G,`withHeader`,L),Y=p(G,`headerContentPart`,L),X=p(G,`bodyContentPart`,L),Z=p(G,`withFooter`,L),Q=[`Playground`,`Size`,`WithHeader`,`HeaderContentPart`,`BodyContentPart`,`WithFooter`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`variantStory(meta, "size", DialogTemplate)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`variantStory(meta, "withHeader", DialogTemplate)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`variantStory(meta, "headerContentPart", DialogTemplate)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "bodyContentPart", DialogTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooter", DialogTemplate)`,...Z.parameters?.docs?.source}}}})))()}$();export{X as BodyContentPart,Y as HeaderContentPart,K as Playground,q as Size,Z as WithFooter,J as WithHeader,Q as __namedExportsOrder,G as default};