import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,o as a,s as o}from"./inputs-EVCcd0i4.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./use-interaction-state-DCnx_bf2.js";import{c as p,l as m,o as h,t as g,u as _}from"./module-CKa45VFv.js";import{i as v,n as y,r as b,t as x}from"./interaction-state-Cs7nJWgF.js";import{n as S,t as C}from"./reset-text-styles-Byi4N4n7.js";import{n as w,t as T}from"./get-line-clamp-props-J1XJ4XC7.js";import{i as E,o as D,s as O}from"./iframe-CsLIKixB.js";var k,A,j;function M(){return(M=e((()=>{v(),y(),d(),f(),u(),E(),k=n(),A=b(`LinkState`,x),j=r(function({as:e=s,size:t,visited:n,prepend:r,label:i,append:a,linkedState:o,style:u,...d}){let f=D(),{currentState:p,propsWithHandlers:m}=l(d,{visited:n}),h=o??p,g=O(f.component.link.base,{size:t},h);return(0,k.jsx)(e,{...m,style:[c,{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`center`,alignSelf:`flex-start`},g,u],children:(0,k.jsxs)(A,{value:h,children:[r?.({size:t}),i({size:t}),a?.({size:t})]})})}),j.__docgenInfo={description:`Goes to another page or place.`,methods:[],displayName:`Link`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var N,P,F;function I(){return(I=e((()=>{_(),N=t(),g(),E(),M(),P=n(),F=r(function({as:e=h,size:t,style:n,...r}){let i=D(),a=(0,N.use)(A),o=O(i.component.link.icon.base,{size:t},a);return(0,P.jsx)(e,{...m(o),...r,style:n})}),F.__docgenInfo={description:``,methods:[],displayName:`LinkIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var L,R,z;function B(){return(B=e((()=>{w(),C(),L=t(),o(),E(),M(),R=n(),z=r(function({as:e=a,size:t,style:n,...r}){let i=D(),o=(0,L.use)(A),s=O(i.component.link.label.base,{size:t},o);return(0,R.jsx)(e,{...T(1),...r,style:[S,{flexShrink:1},s,n]})}),z.__docgenInfo={description:``,methods:[],displayName:`LinkLabel`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs,
    numberOfLines = props.numberOfLines,
    onClick = props.onClick,
    onLayout = props.onLayout,
    onPress = props.onPress,
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
    selectable = props.selectable,
    rest = _objectWithoutPropertiesLoose(props, _excluded);

  /*
  if (selectable != null) {
    warnOnce(
      'selectable',
      'selectable prop is deprecated. Use styles.userSelect.'
    );
  }
  */

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
  var handleClick = React.useCallback(e => {
    if (onClick != null) {
      onClick(e);
    } else if (onPress != null) {
      e.stopPropagation();
      onPress(e);
    }
  }, [onClick, onPress]);
  var component = hasTextAncestor ? 'span' : 'div';
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  // 'auto' by default allows browsers to infer writing direction (root elements only)
  if (!hasTextAncestor) {
    supportedProps.dir = componentDirection != null ? componentDirection : 'auto';
  }
  if (onClick || onPress) {
    supportedProps.onClick = handleClick;
  }
  supportedProps.style = [numberOfLines != null && numberOfLines > 1 && {
    WebkitLineClamp: numberOfLines
  }, hasTextAncestor === true ? styles.textHasAncestor$raw : styles.text$raw, numberOfLines === 1 && styles.textOneLine, numberOfLines != null && numberOfLines > 1 && styles.textMultiLine, props.style, selectable === true && styles.selectable, selectable === false && styles.notSelectable, onPress && styles.pressable];
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
  var element = createElement(component, supportedProps, {
    writingDirection
  });
  return hasTextAncestor ? element : /*#__PURE__*/React.createElement(TextAncestorContext.Provider, {
    value: true
  }, element);
})`,computed:!0},required:!1}}}})))()}export{j as a,I as i,B as n,M as o,F as r,z as t};