import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r}from"./inputs-EVCcd0i4.js";import{n as i,t as a}from"./story-inputs-93gyvxKe.js";import{b as o,i as s,o as c,s as l,y as u}from"./iframe-CsLIKixB.js";import{n as d,t as f}from"./variant-story-Di2FcdOM.js";import{F as p,I as m,N as h,P as g,a as _,b as v,m as y,o as b,p as x,y as S}from"./title-group-head-title-skeleton-title-bar-DqdeFsLc.js";import{t as C}from"./title-group-Dsnrdq9j.js";var w,T;function E(){return(E=e((()=>{o(),s(),w=t(),T=n(function({as:e=u,size:t,elevation:n,content:r,style:i,...a}){let o=c(),s=l(o.component.card.base,{size:t,elevation:n});return(0,w.jsx)(e,{...a,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},s,i],children:r({size:t})})}),T.__docgenInfo={description:`Groups related content.`,methods:[],displayName:`Card`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var D,O;function k(){return(k=e((()=>{a(),D={...i(e=>e.component.card.base)},O={size:`sm`,elevation:`none`}})))()}function A(e){return(0,j.jsx)(T,{testID:`card`,...e,content:e=>(0,j.jsx)(p,{...e,size:`2xs`,disabled:!1,head:e=>(0,j.jsx)(x,{...e,title:e=>(0,j.jsx)(_,{...e,children:`Premium`})}),body:e=>(0,j.jsx)(h,{...e,subtitle:e=>(0,j.jsx)(S,{...e,children:`Your plan renews on 1 November.`})})})})}var j,M,N,P,F,I;function L(){return(L=e((()=>{f(),C(),E(),k(),j=t(),M={title:`Layout/Card`,component:T,argTypes:D,args:O,render:A},N={},P=d(M,`size`,A),F=d(M,`elevation`,A),I=[`Playground`,`Size`,`Elevation`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`variantStory(meta, "size", CardTemplate)`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`variantStory(meta, "elevation", CardTemplate)`,...F.parameters?.docs?.source}}}})))()}L();export{F as Elevation,N as Playground,P as Size,I as __namedExportsOrder,M as default};