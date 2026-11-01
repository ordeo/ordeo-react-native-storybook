import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./spinning-circle-C6_jkdIh.js";import{a,i as o,o as s,r as c,t as l}from"./module-Dr4boW0v.js";import{a as u,i as d,o as f,s as p}from"./inputs-B4MjoMvH.js";import{n as m,t as h}from"./Pressable-B2SEHg1P.js";import{i as g,n as _,r as v,t as y}from"./interaction-state-Cs7nJWgF.js";import{i as b,n as x,r as S,t as C}from"./use-interaction-state-BFJfQFwk.js";import{n as w,t as T}from"./reset-text-styles-Byi4N4n7.js";import{n as E,t as D}from"./get-line-clamp-props-J1XJ4XC7.js";import{f as O,i as k,o as A,p as j,s as M}from"./iframe-D-AQh-w-.js";var N,P,F;function I(){return(I=e((()=>{g(),_(),S(),C(),O(),m(),k(),N=n(),P=v(`ButtonState`,y),F=u(function({as:e=h,destructive:t,emphasis:n,size:r,loading:i,disabled:a,prepend:o,label:s,append:c,spinner:l,linkedState:u,style:d,...f}){let p=A(),m=j(a),{currentState:g,propsWithHandlers:_}=x({...f,disabled:m}),v=u??g,y=M(p.component.button.base,{destructive:t,emphasis:n,size:r,loading:i,disabled:a},v);return(0,N.jsx)(e,{..._,style:[b,{flexDirection:`row`,justifyContent:`center`,alignItems:`center`,alignSelf:`flex-start`},y,d],children:(0,N.jsxs)(P,{value:v,children:[o?.({destructive:t,emphasis:n,size:r,loading:i,disabled:a}),s({destructive:t,emphasis:n,size:r,loading:i,disabled:a}),c?.({destructive:t,emphasis:n,size:r,loading:i,disabled:a}),l?.({destructive:t,emphasis:n,size:r,style:{position:`absolute`,left:`50%`,top:`50%`,transform:[{translateX:`-50%`},{translateY:`-50%`}]}})]})})}),F.__docgenInfo={description:`Starts an action.`,methods:[],displayName:`Button`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var L,R,z;function B(){return(B=e((()=>{s(),L=t(),l(),k(),I(),R=n(),z=u(function({as:e=c,destructive:t,emphasis:n,size:r,loading:i,disabled:o,style:s,...l}){let u=A(),d=(0,L.use)(P),f=M(u.component.button.icon.base,{destructive:t,emphasis:n,size:r,loading:i,disabled:o},d);return(0,R.jsx)(e,{...a(f),...l,style:s})}),z.__docgenInfo={description:``,methods:[],displayName:`ButtonIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var V,H,U;function W(){return(W=e((()=>{E(),T(),V=t(),p(),k(),I(),H=n(),U=u(function({as:e=f,destructive:t,emphasis:n,size:r,loading:i,disabled:a,style:o,...s}){let c=A(),l=(0,V.use)(P),u=M(c.component.button.label.base,{destructive:t,emphasis:n,size:r,loading:i,disabled:a},l);return(0,H.jsx)(e,{...D(1),...s,style:[w,{flexShrink:1},u,o]})}),U.__docgenInfo={description:``,methods:[],displayName:`ButtonLabel`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var G,K,q;function J(){return(J=e((()=>{s(),G=t(),r(),k(),I(),K=n(),q=u(function({destructive:e,emphasis:t,size:n,style:r,...o}){let s=A(),c=(0,G.use)(P),l=M(s.component.button.spinner.base,{destructive:e,emphasis:t,size:n},c);return(0,K.jsx)(i,{...a(l),...o,style:r})}),q.__docgenInfo={description:``,methods:[],displayName:`ButtonSpinner`}})))()}export{z as a,I as c,W as i,J as n,B as o,U as r,F as s,q as t};