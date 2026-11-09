import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r}from"./inputs-EVCcd0i4.js";import{n as i,t as a}from"./story-inputs-93gyvxKe.js";import{b as o,i as s,o as c,s as l,y as u}from"./iframe-CsLIKixB.js";import{a as d,c as f,d as p,f as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w}from"./banner-indicator-line-CQbrH9OA.js";function T(){return(T=e((()=>{_(),m(),w(),f(),y(),h(),v()})))()}var E,D;function O(){return(O=e((()=>{o(),s(),E=t(),D=n(function({as:e=u,items:t,style:n,...r}){let i=c(),a=l(i.component.toast.base,{});return(0,E.jsx)(e,{...r,style:[{flexDirection:`column`,justifyContent:`flex-end`,alignItems:`stretch`},a,n],children:t.map(e=>e({elevation:`overlay`,size:`sm`}))})}),D.__docgenInfo={description:`A short message over the page that goes away on its own, stacked when there are several.`,methods:[],displayName:`Toast`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var k,A;function j(){return(j=e((()=>{a(),k={...i(e=>e.component.toast.base)},A={}})))()}function M(e){return(0,N.jsx)(D,{testID:`toast`,...e,items:[P(0,`neutral`,`Link copied`),P(1,`success`,`Added to your list`,`You can find it under Saved.`),P(2,`danger`,`Recording failed`,`Check your connection and try again.`)]})}var N,P,F,I,L;function R(){return(R=e((()=>{T(),O(),j(),N=t(),P=(e,t,n,r)=>function(i){return(0,N.jsx)(b,{...i,intent:t,indicator:e=>(0,N.jsx)(x,{...e,line:e=>(0,N.jsx)(C,{...e})}),content:e=>(0,N.jsx)(p,{...e,words:e=>(0,N.jsx)(g,{...e,title:e=>(0,N.jsx)(d,{...e,children:n}),description:r?e=>(0,N.jsx)(S,{...e,children:r}):void 0})})},e)},F={title:`Feedback & Status/Toast`,component:D,argTypes:k,args:A,render:M},I={},L=[`Playground`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}}})))()}R();export{I as Playground,L as __namedExportsOrder,F as default};