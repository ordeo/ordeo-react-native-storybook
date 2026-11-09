import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Image-CKFfYgGR.js";import{a as i,i as a,n as o,r as s}from"./inputs-EVCcd0i4.js";import{n as c,t as l}from"./map-responsive-value-CExytUMx.js";import{n as u,t as d}from"./story-inputs-93gyvxKe.js";import{b as f,i as p,o as m,s as h,y as g}from"./iframe-CsLIKixB.js";import{n as _,t as v}from"./variant-story-Di2FcdOM.js";import{n as y,t as b}from"./chevron-down-Dbg64li5.js";import{n as x,t as S}from"./images-BgUnNHkz.js";import{a as C,c as w,d as T,f as E,i as D,l as O,n as k,o as A,r as j,s as M,t as N,u as P}from"./collapsible-trigger-box-title-DabBQoxY.js";function F(){return(F=e((()=>{E(),P(),w(),A(),D(),k()})))()}var I,L;function R(){return(R=e((()=>{f(),p(),I=t(),L=i(function({as:e=g,density:t,divided:n,items:r,style:i,...a}){let o=m(),s=h(o.component.accordion.base,{density:t});return(0,I.jsx)(e,{...a,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},s,i],children:r.map(e=>e({density:t,divided:n}))})}),L.__docgenInfo={description:`A stack of sections of which the consumer opens one or several.`,methods:[],displayName:`Accordion`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var z,B;function V(){return(V=e((()=>{o(),d(),z={...u(e=>e.component.accordion.base),divided:s([!1,!0])},B={density:`compact`,divided:!1}})))()}var H,U;function W(){return(W=e((()=>{l(),f(),p(),H=t(),U=i(function({as:e=g,density:t,divided:n,collapsible:r,style:i,...a}){let o=m(),s=h(o.component.accordion.item.base,{divided:n});return(0,H.jsx)(e,{...a,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},s,i],children:r({size:c(t,e=>({compact:`sm`,balanced:`md`,spacious:`lg`})[e])})})}),U.__docgenInfo={description:``,methods:[],displayName:`AccordionItem`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function G(e){return(0,K.jsx)(L,{testID:`accordion`,...e,items:[q(0,!0),q(1,!1)]})}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{v(),n(),y(),S(),F(),R(),V(),W(),K=t(),q=(e,t)=>function(n){return(0,K.jsx)(U,{...n,collapsible:e=>(0,K.jsx)(T,{...e,chevron:`end`,disabled:!1,trigger:e=>(0,K.jsx)(M,{...e,box:e=>(0,K.jsx)(C,{...e,label:e=>(0,K.jsx)(N,{...e,children:`Shipping and returns`}),indicator:e=>(0,K.jsx)(j,{...e,as:b})})}),panel:e=>t?(0,K.jsx)(O,{...e,content:()=>(0,K.jsx)(r,{source:x.slotPlaceholder,resizeMode:`repeat`,style:{width:`100%`,minHeight:80}})}):(0,K.jsx)(K.Fragment,{children:null})})},e)},J={title:`Layout/Accordion`,component:L,argTypes:z,args:B,render:G},Y={},X=_(J,`density`,G),Z=_(J,`divided`,G),Q=[`Playground`,`Density`,`Divided`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "density", AccordionTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`variantStory(meta, "divided", AccordionTemplate)`,...Z.parameters?.docs?.source}}}})))()}$();export{X as Density,Z as Divided,Y as Playground,Q as __namedExportsOrder,J as default};