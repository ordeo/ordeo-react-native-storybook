import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,r as a,t as o}from"./inputs-B4MjoMvH.js";import{n as s,t as c}from"./map-responsive-value-DmXwP75M.js";import{n as l,t as ee}from"./story-inputs-BqaRY7rA.js";import{b as u,i as d,o as f,s as p,y as m}from"./iframe-D-AQh-w-.js";import{n as te,t as h}from"./icon-placeholder-DT6o9G8r.js";import{n as g,t as ne}from"./variant-story-CuO9tfgF.js";import{n as re,t as _}from"./text-QaViRebF.js";import{t as v}from"./text-CK1rXrKs.js";import{c as ie,i as ae,r as y,s as b}from"./button-spinner-Bd8WmeNa.js";import{t as oe}from"./button-ERiD_2u5.js";import{a as se,i as ce,o as le,r as ue}from"./icon-button-spinner-utAA51vr.js";import{t as de}from"./icon-button-hZ4WIyIT.js";import{F as fe,I as pe,a as me,m as he,o as ge,p as _e}from"./title-group-head-title-skeleton-title-bar-Down-QxM.js";import{t as ve}from"./title-group-BA0X-MDd.js";import{a as ye,l as be,n as xe,o as Se,t as x,u as Ce}from"./chip-button-words-label-BvFDKU_M.js";import{a as S,i as C,n as w,o as T,t as E}from"./link-label-Cj7D7qpd.js";import{n as we,r as D,t as O}from"./overflow-list-w5h1I8YM.js";import{t as k}from"./overflow-list-BDihb_iE.js";function A(){return(A=e((()=>{T(),C(),w()})))()}var j,M;function N(){return(N=e((()=>{u(),d(),j=t(),M=n(function({as:e=m,density:t,ground:n,divided:r,header:i,content:a,style:o,...s}){let c=f(),l=p(c.component.section.base,{density:t,ground:n});return(0,j.jsxs)(e,{...s,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},l,o],children:[i?.({density:t,divided:r}),a({})]})}),M.__docgenInfo={description:`A titled group of content, with actions beside the title.`,methods:[],displayName:`Section`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var P,F;function I(){return(I=e((()=>{i(),ee(),P={...l(e=>e.component.section.base),divided:a([!1,!0]),withHeader:o([!0,!1]),withHeaderAppend:o([!0,!1]),headerAppendPart:o([`Button`,`IconButton`,`Link`,`OverflowList`])},F={density:`compact`,ground:`page`,divided:!1,withHeader:!0,withHeaderAppend:!0,headerAppendPart:`Button`}})))()}var L,R;function z(){return(z=e((()=>{c(),u(),d(),L=t(),R=n(function({as:e=m,density:t,divided:n,words:r,append:i,style:a,...o}){let c=f(),l=p(c.component.section.header.base,{divided:n});return(0,L.jsxs)(e,{...o,style:[{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`center`},l,a],children:[r({size:s(t,e=>({compact:`xs`,balanced:`sm`,spacious:`md`})[e]),style:{flex:1}}),i?.({size:s(t,e=>({compact:`sm`,balanced:`md`,spacious:`lg`})[e]),style:{alignSelf:`auto`}})]})}),R.__docgenInfo={description:``,methods:[],displayName:`SectionHeader`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function B({withHeader:e,withHeaderAppend:t,headerAppendPart:n,...r}){return(0,V.jsx)(M,{testID:`section`,...r,header:e?e=>(0,V.jsx)(R,{...e,words:e=>(0,V.jsx)(fe,{...e,disabled:!1,head:e=>(0,V.jsx)(_e,{...e,title:e=>(0,V.jsx)(me,{...e,children:`Label`})})}),append:t?e=>n===`IconButton`?(0,V.jsx)(se,{...e,destructive:!1,emphasis:`high`,loading:!1,disabled:!1,icon:e=>(0,V.jsx)(ue,{...e,as:h})}):n===`Link`?(0,V.jsx)(S,{...e,label:e=>(0,V.jsx)(E,{...e,children:`Label`})}):n===`OverflowList`?(0,V.jsx)(O,{...e,side:`inline-start`,items:[H(0),U(1)]}):(0,V.jsx)(b,{...e,destructive:!1,emphasis:`high`,loading:!1,disabled:!1,label:e=>(0,V.jsx)(y,{...e,children:`Label`})}):void 0}):void 0,content:e=>(0,V.jsx)(_,{...e,type:`body-sm`,intent:`neutral`,bold:!1,emphasis:`high`,disabled:!1,children:`Label`})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{te(),ne(),oe(),D(),de(),A(),k(),v(),ve(),N(),I(),z(),V=t(),H=e=>function(t){return(0,V.jsx)(b,{...t,destructive:!1,emphasis:`high`,loading:!1,disabled:!1,label:e=>(0,V.jsx)(y,{...e,children:`Label`})},e)},U=e=>function(t){return(0,V.jsx)(be,{...t,selected:!1,disabled:!1,words:e=>(0,V.jsx)(ye,{...e,label:e=>(0,V.jsx)(x,{...e,children:`Label`})})},e)},W={title:`Layout/Section`,component:M,argTypes:P,args:F,render:B},G={},K=g(W,`density`,B),q=g(W,`ground`,B),J=g(W,`divided`,B),Y=g(W,`withHeader`,B),X=g(W,`withHeaderAppend`,B),Z=g(W,`headerAppendPart`,B),Q=[`Playground`,`Density`,`Ground`,`Divided`,`WithHeader`,`WithHeaderAppend`,`HeaderAppendPart`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`variantStory(meta, "density", SectionTemplate)`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`variantStory(meta, "ground", SectionTemplate)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`variantStory(meta, "divided", SectionTemplate)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`variantStory(meta, "withHeader", SectionTemplate)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "withHeaderAppend", SectionTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`variantStory(meta, "headerAppendPart", SectionTemplate)`,...Z.parameters?.docs?.source}}}})))()}$();export{K as Density,J as Divided,q as Ground,Z as HeaderAppendPart,G as Playground,Y as WithHeader,X as WithHeaderAppend,Q as __namedExportsOrder,W as default};