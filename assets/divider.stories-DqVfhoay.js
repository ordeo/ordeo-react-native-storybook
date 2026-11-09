import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r}from"./inputs-EVCcd0i4.js";import{n as i,t as a}from"./story-inputs-93gyvxKe.js";import{b as o,i as s,o as c,s as l,y as u}from"./iframe-CsLIKixB.js";import{n as d,t as f}from"./variant-story-Di2FcdOM.js";var p,m;function h(){return(h=e((()=>{o(),s(),p=t(),m=n(function({as:e=u,emphasis:t,size:n,orientation:r,style:i,...a}){let o=c(),s=l(o.component.divider.base,{emphasis:t,size:n,orientation:r});return(0,p.jsx)(e,{...a,style:[s,i]})}),m.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var g,_;function v(){return(v=e((()=>{a(),g={...i(e=>e.component.divider.base)},_={emphasis:`high`,size:`sm`,orientation:`horizontal`}})))()}function y(e){return(0,b.jsx)(m,{testID:`divider`,style:{width:e.orientation===`horizontal`?192:void 0,height:e.orientation===`vertical`?192:void 0},...e})}var b,x,S,C,w,T,E;function D(){return(D=e((()=>{f(),h(),v(),b=t(),x={title:`Layout/Divider`,component:m,argTypes:g,args:_,render:y},S={},C=d(x,`emphasis`,y),w=d(x,`size`,y),T=d(x,`orientation`,y),E=[`Playground`,`Emphasis`,`Size`,`Orientation`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`variantStory(meta, "emphasis", DividerTemplate)`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`variantStory(meta, "size", DividerTemplate)`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`variantStory(meta, "orientation", DividerTemplate)`,...T.parameters?.docs?.source}}}})))()}D();export{C as Emphasis,T as Orientation,S as Playground,w as Size,E as __namedExportsOrder,x as default};