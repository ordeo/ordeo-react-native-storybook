import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,o as a,s as o}from"./inputs-EVCcd0i4.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./use-interaction-state-DCnx_bf2.js";import{c as p,l as m,o as h,t as g,u as _}from"./module-CKa45VFv.js";import{i as v,n as y,r as b,t as x}from"./interaction-state-Cs7nJWgF.js";import{n as S,t as C}from"./reset-text-styles-Byi4N4n7.js";import{b as w,f as T,i as E,o as D,p as O,s as k,y as A}from"./iframe-CsLIKixB.js";var j,M,N;function P(){return(P=e((()=>{v(),y(),d(),f(),T(),u(),E(),j=n(),M=b(`TextAreaState`,x),N=r(function({as:e=s,invalid:t,size:n,filled:r,readonly:i,disabled:a,prepend:o,input:u,append:d,rule:f,grip:p,linkedState:m,style:h,...g}){let _=D(),v=O(a),{currentState:y,propsWithHandlers:b}=l({...g,disabled:v}),x=m??y,S=k(_.component[`text-area`].base,{size:n,invalid:t,readonly:i,disabled:a},x);return(0,j.jsx)(e,{...b,style:[c,{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`flex-start`,overflow:`hidden`},S,h],children:(0,j.jsxs)(M,{value:x,children:[o?.({size:n,readonly:i,disabled:a}),u({size:n,filled:r,readonly:i,disabled:a,style:{flex:1}}),d?.({size:n,readonly:i,disabled:a}),f({invalid:t,readonly:i,disabled:a,style:{position:`absolute`,left:0,right:0,bottom:0,width:`100%`}}),p?.({size:n,readonly:i,disabled:a,style:{position:`absolute`,right:0,bottom:0}})]})})}),N.__docgenInfo={description:`Several lines of typed text.`,methods:[],displayName:`TextArea`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var F,I,L;function R(){return(R=e((()=>{_(),F=t(),g(),E(),P(),I=n(),L=r(function({as:e=h,size:t,readonly:n,disabled:r,style:i,...a}){let o=D(),s=(0,F.use)(M),c=k(o.component[`text-area`].grip.base,{size:t,readonly:n,disabled:r},s);return(0,I.jsx)(e,{...m(c),...a,style:i})}),L.__docgenInfo={description:``,methods:[],displayName:`TextAreaGrip`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var z,B,V;function H(){return(H=e((()=>{_(),z=t(),g(),E(),P(),B=n(),V=r(function({as:e=h,size:t,readonly:n,disabled:r,style:i,...a}){let o=D(),s=(0,z.use)(M),c=k(o.component[`text-area`].icon.base,{size:t,readonly:n,disabled:r},s);return(0,B.jsx)(e,{...m(c),...a,style:i})}),V.__docgenInfo={description:``,methods:[],displayName:`TextAreaIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var U,W,G;function K(){return(K=e((()=>{C(),U=t(),o(),E(),P(),W=n(),G=r(function({as:e=a,size:t,filled:n,readonly:r,disabled:i,style:o,...s}){let c=D(),l=(0,U.use)(M),u=k(c.component[`text-area`].input.base,{size:t,filled:n,readonly:r,disabled:i},l);return(0,W.jsx)(e,{...s,style:[S,u,o]})}),G.__docgenInfo={description:``,methods:[],displayName:`TextAreaInput`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var q,J,Y;function X(){return(X=e((()=>{q=t(),w(),E(),P(),J=n(),Y=r(function({as:e=A,invalid:t,readonly:n,disabled:r,style:i,...a}){let o=D(),s=(0,q.use)(M),c=k(o.component[`text-area`].rule.base,{invalid:t,readonly:n,disabled:r},s);return(0,J.jsx)(e,{...a,style:[c,i]})}),Y.__docgenInfo={description:``,methods:[],displayName:`TextAreaRule`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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