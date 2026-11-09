import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Image-CKFfYgGR.js";import{a,i as o}from"./inputs-EVCcd0i4.js";import{n as s,t as c}from"./story-inputs-93gyvxKe.js";import{_ as l,b as u,g as d,i as f,o as p,s as m,y as h}from"./iframe-CsLIKixB.js";import{n as g,t as _}from"./variant-story-Di2FcdOM.js";import{n as v,t as y}from"./images-BgUnNHkz.js";function b(){var e=(0,x.useState)(()=>d.get(`window`)),t=e[0],n=e[1];return(0,x.useEffect)(()=>{function e(e){var t=e.window;t!=null&&n(t)}return d.addEventListener(`change`,e),n(d.get(`window`)),()=>{d.removeEventListener(`change`,e)}},[]),t}var x;function S(){return(S=e((()=>{l(),x=t()})))()}var C,w;function T(){return(T=e((()=>{u(),f(),C=n(),w=a(function({as:e=h,size:t,content:n,style:r,...i}){let a=p(),o=m(a.component.container.base,{size:t});return(0,C.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n({size:t})})}),w.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var E,D;function O(){return(O=e((()=>{c(),E={...s(e=>e.component.container.base)},D={size:`sm`}})))()}function k({style:e,...t}){let{status:n,line:r}=p().semantic.color;return(0,j.jsx)(w,{testID:`container`,...t,style:[{backgroundColor:n.info.medium.bg,outlineWidth:1,outlineStyle:`dashed`,outlineColor:r.medium.border},e],content:()=>(0,j.jsx)(i,{source:v.slotPlaceholder,resizeMode:`repeat`,style:{width:`100%`,minHeight:80}})})}function A(e){let{width:t}=b();return(0,j.jsx)(k,{...e,style:{width:t}})}var j,M,N,P,F;function I(){return(I=e((()=>{_(),r(),S(),y(),f(),T(),O(),j=n(),M={title:`Layout/Container`,component:w,argTypes:E,args:D,render:k},N={},P=g(M,`size`,e=>(0,j.jsx)(A,{...e})),F=[`Playground`,`Size`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`variantStory(meta, "size", args => <FullWidthContainerTemplate {...args} />)`,...P.parameters?.docs?.source}}}})))()}I();export{N as Playground,P as Size,F as __namedExportsOrder,M as default};