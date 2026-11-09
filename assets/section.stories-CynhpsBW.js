import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,r as a,t as o}from"./inputs-EVCcd0i4.js";import{n as s,t as c}from"./map-responsive-value-CExytUMx.js";import{n as l,t as ee}from"./story-inputs-93gyvxKe.js";import{b as u,i as d,o as f,s as p,y as m}from"./iframe-CsLIKixB.js";import{n as te,t as h}from"./icon-placeholder-DTqhzWQl.js";import{n as g,t as ne}from"./variant-story-Di2FcdOM.js";import{c as re,i as ie,r as _,s as v}from"./button-spinner-eHS1FUoR.js";import{t as ae}from"./button-B3GuFyUn.js";import{a as oe,i as se,o as ce,r as le}from"./icon-button-spinner-A9fj4J6P.js";import{t as ue}from"./icon-button-DxfCqB4Y.js";import{F as de,I as fe,a as pe,m as me,o as he,p as ge}from"./title-group-head-title-skeleton-title-bar-DqdeFsLc.js";import{t as _e}from"./title-group-Dsnrdq9j.js";import{a as ve,l as ye,n as be,o as xe,t as y,u as Se}from"./chip-button-words-label-Dj_0cYDR.js";import{n as Ce,t as b}from"./text-Y3jPezbc.js";import{t as x}from"./text-BfavOA0J.js";import{a as S,i as we,n as Te,r as C,t as w}from"./overflow-list-track-DPAYiXvO.js";import{t as T}from"./overflow-list-CiLnmVg0.js";import{a as E,i as D,n as O,o as k,t as A}from"./link-label-Dq0Aw8gl.js";function j(){return(j=e((()=>{k(),D(),O()})))()}var M,N;function P(){return(P=e((()=>{u(),d(),M=t(),N=n(function({as:e=m,density:t,ground:n,divided:r,header:i,content:a,style:o,...s}){let c=f(),l=p(c.component.section.base,{density:t,ground:n});return(0,M.jsxs)(e,{...s,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},l,o],children:[i({density:t,divided:r}),a({})]})}),N.__docgenInfo={description:`A titled group of content, with actions beside the title.`,methods:[],displayName:`Section`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var F,I;function L(){return(L=e((()=>{i(),ee(),F={...l(e=>e.component.section.base),divided:a([!1,!0]),withHeaderAppend:o([!0,!1]),headerAppendPart:o([`Button`,`IconButton`,`Link`,`OverflowList`])},I={density:`compact`,ground:`page`,divided:!1,withHeaderAppend:!0,headerAppendPart:`Button`}})))()}var R,z;function B(){return(B=e((()=>{c(),u(),d(),R=t(),z=n(function({as:e=m,density:t,divided:n,words:r,append:i,style:a,...o}){let c=f(),l=p(c.component.section.header.base,{divided:n});return(0,R.jsxs)(e,{...o,style:[{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`center`},l,a],children:[r({size:s(t,e=>({compact:`xs`,balanced:`sm`,spacious:`md`})[e]),style:{flex:1}}),i?.({size:s(t,e=>({compact:`sm`,balanced:`md`,spacious:`lg`})[e]),style:{alignSelf:`auto`}})]})}),z.__docgenInfo={description:``,methods:[],displayName:`SectionHeader`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function V({withHeaderAppend:e,headerAppendPart:t,...n}){return(0,H.jsx)(N,{testID:`section`,...n,header:n=>(0,H.jsx)(z,{...n,words:e=>(0,H.jsx)(de,{...e,disabled:!1,head:e=>(0,H.jsx)(ge,{...e,title:e=>(0,H.jsx)(pe,{...e,children:`The night of fires`})})}),append:e?e=>t===`IconButton`?(0,H.jsx)(oe,{...e,destructive:!1,emphasis:`high`,loading:!1,disabled:!1,icon:e=>(0,H.jsx)(le,{...e,as:h})}):t===`Link`?(0,H.jsx)(E,{...e,label:e=>(0,H.jsx)(A,{...e,children:`terms of use`})}):t===`OverflowList`?(0,H.jsx)(C,{...e,side:`inline-start`,track:e=>(0,H.jsx)(w,{...e,items:[U(0,`Overview`),U(1,`Devices`),U(2,`Billing`),U(3,`Members`),W(4)]})}):(0,H.jsx)(v,{...e,destructive:!1,emphasis:`high`,loading:!1,disabled:!1,label:e=>(0,H.jsx)(_,{...e,children:`Button`})}):void 0}),content:e=>(0,H.jsx)(b,{...e,type:`body-md`,intent:`neutral`,bold:!1,emphasis:`medium`,disabled:!1,children:`Pixel 9, signed in 2 minutes ago`})})}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{te(),ne(),ae(),S(),ue(),j(),T(),x(),_e(),P(),L(),B(),H=t(),U=(e,t)=>function(n){return(0,H.jsx)(v,{...n,destructive:!1,emphasis:`low`,loading:!1,disabled:!1,label:e=>(0,H.jsx)(_,{...e,children:t})},e)},W=e=>function(t){return(0,H.jsx)(ye,{...t,selected:!1,disabled:!1,words:e=>(0,H.jsx)(ve,{...e,label:e=>(0,H.jsx)(y,{...e,children:`Sort`})})},e)},G={title:`Layout/Section`,component:N,argTypes:F,args:I,render:V},K={},q=g(G,`density`,V),J=g(G,`ground`,V),Y=g(G,`divided`,V),X=g(G,`withHeaderAppend`,V),Z=g(G,`headerAppendPart`,V),Q=[`Playground`,`Density`,`Ground`,`Divided`,`WithHeaderAppend`,`HeaderAppendPart`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`variantStory(meta, "density", SectionTemplate)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`variantStory(meta, "ground", SectionTemplate)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`variantStory(meta, "divided", SectionTemplate)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "withHeaderAppend", SectionTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`variantStory(meta, "headerAppendPart", SectionTemplate)`,...Z.parameters?.docs?.source}}}})))()}$();export{q as Density,Y as Divided,J as Ground,Z as HeaderAppendPart,K as Playground,X as WithHeaderAppend,Q as __namedExportsOrder,G as default};