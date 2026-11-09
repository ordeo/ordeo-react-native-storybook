import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i}from"./inputs-EVCcd0i4.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./use-interaction-state-DCnx_bf2.js";import{i as d,n as f,r as p,t as m}from"./interaction-state-Cs7nJWgF.js";import{b as h,f as g,i as _,o as v,p as y,s as b,y as x}from"./iframe-CsLIKixB.js";var S,C,w;function T(){return(T=e((()=>{d(),f(),l(),u(),g(),c(),_(),S=n(),C=p(`DragIndicatorState`,m),w=r(function({as:e=a,orientation:t,disabled:n,mark:r,linkedState:i,style:c,...l}){let u=v(),d=y(n),{currentState:f,propsWithHandlers:p}=s({...l,disabled:d}),m=i??f,h=b(u.component[`drag-indicator`].base,{orientation:t},m);return(0,S.jsx)(e,{...p,style:[o,{flexDirection:`row`,justifyContent:`center`,alignItems:`center`},h,c],children:(0,S.jsx)(C,{value:m,children:r({orientation:t,disabled:n})})})}),w.__docgenInfo={description:``,methods:[],displayName:`DragIndicator`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var E,D,O;function k(){return(k=e((()=>{E=t(),h(),_(),T(),D=n(),O=r(function({as:e=x,orientation:t,disabled:n,style:r,...i}){let a=v(),o=(0,E.use)(C),s=b(a.component[`drag-indicator`].mark.base,{orientation:t,disabled:n},o);return(0,D.jsx)(e,{...i,style:[s,r]})}),O.__docgenInfo={description:``,methods:[],displayName:`DragIndicatorMark`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}export{T as i,k as n,w as r,O as t};