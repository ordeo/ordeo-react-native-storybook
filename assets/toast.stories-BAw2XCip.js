import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r}from"./inputs-B4MjoMvH.js";import{n as i,t as a}from"./story-inputs-BqaRY7rA.js";import{b as o,i as s,o as c,s as l,y as u}from"./iframe-D-AQh-w-.js";import{a as d,c as f,d as p,f as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,t as S,u as C}from"./banner-indicator-line-CYq7dN_G.js";function w(){return(w=e((()=>{_(),m(),C(),f(),y(),h(),v()})))()}var T,E;function D(){return(D=e((()=>{o(),s(),T=t(),E=n(function({as:e=u,items:t,style:n,...r}){let i=c(),a=l(i.component.toast.base,{});return(0,T.jsx)(e,{...r,style:[{flexDirection:`column`,justifyContent:`flex-end`,alignItems:`stretch`},a,n],children:t.map(e=>e({elevation:`overlay`,size:`sm`}))})}),E.__docgenInfo={description:`A short message over the page that goes away on its own, stacked when there are several.`,methods:[],displayName:`Toast`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var O,k;function A(){return(A=e((()=>{a(),O={...i(e=>e.component.toast.base)},k={}})))()}function j(e){return(0,M.jsx)(E,{testID:`toast`,...e,items:[N(0),N(1)]})}var M,N,P,F,I;function L(){return(L=e((()=>{w(),D(),A(),M=t(),N=e=>function(t){return(0,M.jsx)(b,{...t,intent:`neutral`,indicator:e=>(0,M.jsx)(x,{...e,line:e=>(0,M.jsx)(S,{...e})}),content:e=>(0,M.jsx)(p,{...e,words:e=>(0,M.jsx)(g,{...e,title:e=>(0,M.jsx)(d,{...e,children:`Label`})})})},e)},P={title:`Feedback & Status/Toast`,component:E,argTypes:O,args:k,render:j},F={},I=[`Playground`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{}`,...F.parameters?.docs?.source}}}})))()}L();export{F as Playground,I as __namedExportsOrder,P as default};