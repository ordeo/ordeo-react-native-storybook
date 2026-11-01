import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r}from"./inputs-B4MjoMvH.js";import{n as i,t as a}from"./story-inputs-BqaRY7rA.js";import{b as o,i as s,o as c,s as l,y as u}from"./iframe-D-AQh-w-.js";import{n as d,t as f}from"./variant-story-CuO9tfgF.js";import{F as p,I as m,a as h,m as g,o as _,p as v}from"./title-group-head-title-skeleton-title-bar-Down-QxM.js";import{t as y}from"./title-group-BA0X-MDd.js";var b,x;function S(){return(S=e((()=>{o(),s(),b=t(),x=n(function({as:e=u,size:t,elevation:n,content:r,style:i,...a}){let o=c(),s=l(o.component.card.base,{size:t,elevation:n});return(0,b.jsx)(e,{...a,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},s,i],children:r({size:t})})}),x.__docgenInfo={description:`Groups related content.`,methods:[],displayName:`Card`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var C,w;function T(){return(T=e((()=>{a(),C={...i(e=>e.component.card.base)},w={size:`sm`,elevation:`none`}})))()}function E(e){return(0,D.jsx)(x,{testID:`card`,...e,content:e=>(0,D.jsx)(p,{...e,disabled:!1,head:e=>(0,D.jsx)(v,{...e,title:e=>(0,D.jsx)(h,{...e,children:`Label`})})})})}var D,O,k,A,j,M;function N(){return(N=e((()=>{f(),y(),S(),T(),D=t(),O={title:`Layout/Card`,component:x,argTypes:C,args:w,render:E},k={},A=d(O,`size`,E),j=d(O,`elevation`,E),M=[`Playground`,`Size`,`Elevation`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`variantStory(meta, "size", CardTemplate)`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`variantStory(meta, "elevation", CardTemplate)`,...j.parameters?.docs?.source}}}})))()}N();export{j as Elevation,k as Playground,A as Size,M as __namedExportsOrder,O as default};