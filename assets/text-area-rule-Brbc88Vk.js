import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,o as a,r as o,t as s}from"./module-Dr4boW0v.js";import{a as c,i as l,o as u,s as d}from"./inputs-B4MjoMvH.js";import{n as f,t as p}from"./Pressable-B2SEHg1P.js";import{i as m,n as h,r as g,t as _}from"./interaction-state-Cs7nJWgF.js";import{i as v,n as y,r as b,t as x}from"./use-interaction-state-BFJfQFwk.js";import{n as S,t as C}from"./reset-text-styles-Byi4N4n7.js";import{b as w,f as T,i as E,o as D,p as O,s as k,y as A}from"./iframe-D-AQh-w-.js";var j,M,N;function P(){return(P=e((()=>{m(),h(),b(),x(),T(),f(),E(),j=n(),M=g(`TextAreaState`,_),N=c(function({as:e=p,invalid:t,size:n,filled:r,readonly:i,disabled:a,prepend:o,input:s,append:c,rule:l,grip:u,linkedState:d,style:f,...m}){let h=D(),g=O(a),{currentState:_,propsWithHandlers:b}=y({...m,disabled:g}),x=d??_,S=k(h.component[`text-area`].base,{size:n,invalid:t,readonly:i,disabled:a},x);return(0,j.jsx)(e,{...b,style:[v,{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`flex-start`},S,f],children:(0,j.jsxs)(M,{value:x,children:[o?.({size:n,readonly:i,disabled:a}),s({size:n,filled:r,readonly:i,disabled:a}),c?.({size:n,readonly:i,disabled:a}),l({invalid:t,readonly:i,disabled:a,style:{position:`absolute`,left:0,right:0,bottom:0}}),u?.({size:n,readonly:i,disabled:a,style:{position:`absolute`,right:0,bottom:0}})]})})}),N.__docgenInfo={description:`Several lines of typed text.`,methods:[],displayName:`TextArea`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var F,I,L;function R(){return(R=e((()=>{a(),F=t(),s(),E(),P(),I=n(),L=c(function({as:e=o,size:t,readonly:n,disabled:i,style:a,...s}){let c=D(),l=(0,F.use)(M),u=k(c.component[`text-area`].grip.base,{size:t,readonly:n,disabled:i},l);return(0,I.jsx)(e,{...r(u),...s,style:a})}),L.__docgenInfo={description:``,methods:[],displayName:`TextAreaGrip`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var z,B,V;function H(){return(H=e((()=>{a(),z=t(),s(),E(),P(),B=n(),V=c(function({as:e=o,size:t,readonly:n,disabled:i,style:a,...s}){let c=D(),l=(0,z.use)(M),u=k(c.component[`text-area`].icon.base,{size:t,readonly:n,disabled:i},l);return(0,B.jsx)(e,{...r(u),...s,style:a})}),V.__docgenInfo={description:``,methods:[],displayName:`TextAreaIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var U,W,G;function K(){return(K=e((()=>{C(),U=t(),d(),E(),P(),W=n(),G=c(function({as:e=u,size:t,filled:n,readonly:r,disabled:i,style:a,...o}){let s=D(),c=(0,U.use)(M),l=k(s.component[`text-area`].input.base,{size:t,filled:n,readonly:r,disabled:i},c);return(0,W.jsx)(e,{...o,style:[S,l,a]})}),G.__docgenInfo={description:``,methods:[],displayName:`TextAreaInput`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var q,J,Y;function X(){return(X=e((()=>{q=t(),w(),E(),P(),J=n(),Y=c(function({as:e=A,invalid:t,readonly:n,disabled:r,style:i,...a}){let o=D(),s=(0,q.use)(M),c=k(o.component[`text-area`].rule.base,{invalid:t,readonly:n,disabled:r},s);return(0,J.jsx)(e,{...a,style:[c,i]})}),Y.__docgenInfo={description:``,methods:[],displayName:`TextAreaRule`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}export{V as a,R as c,K as i,N as l,X as n,H as o,G as r,L as s,Y as t,P as u};