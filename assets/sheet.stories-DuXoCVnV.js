import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,t as a}from"./inputs-B4MjoMvH.js";import{n as o,t as s}from"./story-inputs-BqaRY7rA.js";import{b as c,i as l,o as u,s as d,y as f}from"./iframe-D-AQh-w-.js";import{n as p,t as m}from"./variant-story-CuO9tfgF.js";import{F as ee,I as te,a as ne,m as re,o as ie,p as ae}from"./title-group-head-title-skeleton-title-bar-Down-QxM.js";import{t as oe}from"./title-group-BA0X-MDd.js";import{n as se,t as ce}from"./choice-card-C3gqafbI.js";import{d as le,f as ue,l as de,u as fe}from"./form-group-words-label-BcPvXysS.js";import{a as pe,i as me,t as he}from"./form-section-BJoetKSr.js";import{t as ge}from"./form-328qwTpL.js";import{b as _e,y as ve}from"./form-field-label-text-DO-65zVe.js";import{a as ye,c as be,l as xe,n as Se,o as Ce,s as we,t as h}from"./form-section-words-title-DjoJ4eUW.js";import{c as Te,i as Ee,n as De,r as g,s as _,t as v}from"./text-input-rule-CDU1PhFe.js";import{t as y}from"./text-input-DPeHHHhf.js";import{i as b,n as x,r as S,t as C}from"./drag-indicator-mark-DpHV5_-P.js";import{S as Oe,c as ke,d as w,f as Ae,g as je,h as T,i as Me,m as Ne,p as E,r as D,s as O,x as k}from"./listbox-rows-option-group-DdR0aU0M.js";import{t as Pe}from"./listbox-JkQsg594.js";function A(){return(A=e((()=>{b(),x()})))()}var j,M;function N(){return(N=e((()=>{c(),l(),j=t(),M=n(function({as:e=f,side:t,handle:n,content:r,style:i,...a}){let o=u(),s=d(o.component.sheet.base,{side:t});return(0,j.jsxs)(e,{...a,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},s,i],children:[n?.({}),r({})]})}),M.__docgenInfo={description:`A task that keeps the page in view.`,methods:[],displayName:`Sheet`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var P,F;function I(){return(I=e((()=>{i(),s(),P={...o(e=>e.component.sheet.base),withHandle:a([!0,!1]),contentPart:a([`Listbox`,`Form`])},F={side:`block-end`,withHandle:!0,contentPart:`Listbox`}})))()}var L,R;function z(){return(z=e((()=>{c(),l(),L=t(),R=n(function({as:e=f,indicator:t,style:n,...r}){let i=u(),a=d(i.component.sheet.handle.base,{});return(0,L.jsx)(e,{...r,style:[{flexDirection:`row`,justifyContent:`center`,alignItems:`center`},a,n],children:t({orientation:`horizontal`})})}),R.__docgenInfo={description:``,methods:[],displayName:`SheetHandle`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function B({withHandle:e,contentPart:t,...n}){return(0,V.jsx)(M,{testID:`sheet`,...n,handle:e?e=>(0,V.jsx)(R,{...e,indicator:e=>(0,V.jsx)(S,{...e,disabled:!1,mark:e=>(0,V.jsx)(C,{...e})})}):void 0,content:e=>t===`Form`?(0,V.jsx)(me,{...e,size:`sm`,items:[K(0),G(1),U(2)]}):(0,V.jsx)(k,{...e,size:`sm`,divided:!1,rows:e=>(0,V.jsx)(T,{...e,items:[H(0),H(1)]})})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{m(),ue(),A(),ge(),le(),xe(),he(),Pe(),y(),oe(),N(),I(),z(),V=t(),H=e=>function(t){return(0,V.jsx)(E,{...t,selected:!1,disabled:!1,box:e=>(0,V.jsx)(w,{...e,words:e=>(0,V.jsx)(O,{...e,label:e=>(0,V.jsx)(D,{...e,children:`Label`})})})},e)},U=e=>function(t){return(0,V.jsx)(ve,{...t,invalid:!1,side:`block-start`,readonly:!1,disabled:!1,content:e=>(0,V.jsx)(_,{...e,filled:!1,input:e=>(0,V.jsx)(g,{...e,children:`Label`}),rule:e=>(0,V.jsx)(v,{...e})})},e)},W=e=>function(t){return(0,V.jsx)(ce,{...t,selected:!1,elevation:`none`,disabled:!1,content:e=>(0,V.jsx)(ee,{...e,head:e=>(0,V.jsx)(ae,{...e,title:e=>(0,V.jsx)(ne,{...e,children:`Label`})})})},e)},G=e=>function(t){return(0,V.jsx)(de,{...t,invalid:!1,items:[U(0),W(1)]},e)},K=e=>function(t){return(0,V.jsx)(we,{...t,words:e=>(0,V.jsx)(ye,{...e,title:e=>(0,V.jsx)(h,{...e,children:`Label`})}),items:[G(0),U(1)]},e)},q={title:`Feedback & Status/Sheet`,component:M,argTypes:P,args:F,render:B},J={},Y=p(q,`side`,B),X=p(q,`withHandle`,B),Z=p(q,`contentPart`,B),Q=[`Playground`,`Side`,`WithHandle`,`ContentPart`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`variantStory(meta, "side", SheetTemplate)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "withHandle", SheetTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`variantStory(meta, "contentPart", SheetTemplate)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as ContentPart,J as Playground,Y as Side,X as WithHandle,Q as __namedExportsOrder,q as default};