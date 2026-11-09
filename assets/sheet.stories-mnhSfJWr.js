import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,t as a}from"./inputs-EVCcd0i4.js";import{n as o,t as s}from"./story-inputs-93gyvxKe.js";import{b as c,i as l,o as u,s as d,y as f}from"./iframe-CsLIKixB.js";import{n as p,t as m}from"./variant-story-Di2FcdOM.js";import{F as ee,I as te,a as ne,m as re,o as ie,p as ae}from"./title-group-head-title-skeleton-title-bar-DqdeFsLc.js";import{t as oe}from"./title-group-Dsnrdq9j.js";import{n as se,t as ce}from"./choice-card-DSsf_aUG.js";import{i as le,r as ue}from"./form-footer-BC5n5Plq.js";import{t as de}from"./form-DwmZqWhE.js";import{b as fe,y as pe}from"./form-field-label-text-BrZWsQco.js";import{t as me}from"./form-field-DxE5zJ7g.js";import{c as he,i as ge,n as _e,r as ve,s as ye,t as be}from"./text-input-rule-d6Yno49X.js";import{t as xe}from"./text-input-BHVOvZxz.js";import{i as Se,n as Ce,r as we,t as h}from"./drag-indicator-mark-da6cRHdS.js";import{d as g,l as _,u as Te}from"./form-group-words-label-BemfRcMc.js";import{a as v,c as Ee,l as y,n as De,o as Oe,s as b,t as x}from"./form-section-words-title-DcGjqfq7.js";import{t as S}from"./form-section-J1JmPEkI.js";import{S as ke,c as Ae,d as C,f as je,g as Me,h as w,i as Ne,m as Pe,p as T,r as E,s as D,x as O}from"./listbox-rows-option-group-puwPlP4P.js";import{t as k}from"./listbox-CqRaxMPw.js";function A(){return(A=e((()=>{Se(),Ce()})))()}var j,M;function N(){return(N=e((()=>{c(),l(),j=t(),M=n(function({as:e=f,side:t,handle:n,content:r,style:i,...a}){let o=u(),s=d(o.component.sheet.base,{side:t});return(0,j.jsxs)(e,{...a,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},s,i],children:[n?.({}),r({})]})}),M.__docgenInfo={description:`A task that keeps the page in view.`,methods:[],displayName:`Sheet`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function B({withHandle:e,contentPart:t,...n}){return(0,V.jsx)(M,{testID:`sheet`,...n,handle:e?e=>(0,V.jsx)(R,{...e,indicator:e=>(0,V.jsx)(we,{...e,disabled:!1,mark:e=>(0,V.jsx)(h,{...e})})}):void 0,content:e=>t===`Form`?(0,V.jsx)(ue,{...e,size:`sm`,items:[K(0),G(1),U(2)]}):(0,V.jsx)(O,{...e,size:`sm`,divided:!1,rows:e=>(0,V.jsx)(w,{...e,items:[H(0,`Live TV`),H(1,`Highlights`)]})})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{m(),g(),A(),de(),me(),y(),S(),k(),xe(),oe(),N(),I(),z(),V=t(),H=(e,t)=>function(n){return(0,V.jsx)(T,{...n,selected:!1,disabled:!1,box:e=>(0,V.jsx)(C,{...e,words:e=>(0,V.jsx)(D,{...e,label:e=>(0,V.jsx)(E,{...e,children:t})})})},e)},U=e=>function(t){return(0,V.jsx)(pe,{...t,invalid:!1,side:`block-start`,readonly:!1,disabled:!1,content:e=>(0,V.jsx)(ye,{...e,filled:!1,input:e=>(0,V.jsx)(ve,{...e,children:`name@example.com`}),rule:e=>(0,V.jsx)(be,{...e})})},e)},W=e=>function(t){return(0,V.jsx)(ce,{...t,selected:!1,elevation:`none`,disabled:!1,content:e=>(0,V.jsx)(ee,{...e,head:e=>(0,V.jsx)(ae,{...e,title:e=>(0,V.jsx)(ne,{...e,children:`Premium`})})})},e)},G=e=>function(t){return(0,V.jsx)(_,{...t,invalid:!1,items:[U(0),W(1)]},e)},K=e=>function(t){return(0,V.jsx)(b,{...t,words:e=>(0,V.jsx)(v,{...e,title:e=>(0,V.jsx)(x,{...e,children:`Delivery`})}),items:[G(0),U(1)]},e)},q={title:`Feedback & Status/Sheet`,component:M,argTypes:P,args:F,render:B},J={},Y=p(q,`side`,B),X=p(q,`withHandle`,B),Z=p(q,`contentPart`,B),Q=[`Playground`,`Side`,`WithHandle`,`ContentPart`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`variantStory(meta, "side", SheetTemplate)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "withHandle", SheetTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`variantStory(meta, "contentPart", SheetTemplate)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as ContentPart,J as Playground,Y as Side,X as WithHandle,Q as __namedExportsOrder,q as default};