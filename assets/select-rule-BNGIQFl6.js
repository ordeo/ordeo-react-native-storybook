import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,o as a,s as o}from"./inputs-EVCcd0i4.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./use-interaction-state-DCnx_bf2.js";import{c as p,l as m,o as h,t as g,u as _}from"./module-CKa45VFv.js";import{i as v,n as y,r as b,t as x}from"./interaction-state-Cs7nJWgF.js";import{n as S,t as C}from"./reset-text-styles-Byi4N4n7.js";import{n as w,t as T}from"./get-line-clamp-props-J1XJ4XC7.js";import{b as E,f as D,i as O,o as k,p as A,s as j,y as M}from"./iframe-CsLIKixB.js";var N,P,F;function I(){return(I=e((()=>{v(),y(),d(),f(),D(),u(),O(),N=n(),P=b(`SelectState`,x),F=r(function({as:e=s,invalid:t,emphasis:n,size:r,filled:i,readonly:a,disabled:o,prepend:u,input:d,append:f,rule:p,linkedState:m,style:h,...g}){let _=k(),v=A(o),{currentState:y,propsWithHandlers:b}=l({...g,disabled:v}),x=m??y,S=j(_.component.select.base,{invalid:t,emphasis:n,size:r,readonly:a,disabled:o},x);return(0,N.jsx)(e,{...b,style:[c,{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`center`,overflow:`hidden`},S,h],children:(0,N.jsxs)(P,{value:x,children:[u?.({invalid:t,emphasis:n,size:r,filled:i,readonly:a,disabled:o}),d({size:r,filled:i,readonly:a,disabled:o,style:{flex:1}}),f?.({size:r,readonly:a,disabled:o}),p({invalid:t,emphasis:n,readonly:a,disabled:o,style:{position:`absolute`,left:0,right:0,width:`100%`,bottom:0}})]})})}),F.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var L,R,z;function B(){return(B=e((()=>{_(),L=t(),g(),O(),I(),R=n(),z=r(function({as:e=h,size:t,readonly:n,disabled:r,style:i,...a}){let o=k(),s=(0,L.use)(P),c=j(o.component.select.icon.base,{size:t,readonly:n,disabled:r},s);return(0,R.jsx)(e,{...m(c),...a,style:i})}),z.__docgenInfo={description:``,methods:[],displayName:`SelectIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var V,H,U;function W(){return(W=e((()=>{w(),C(),V=t(),o(),O(),I(),H=n(),U=r(function({as:e=a,size:t,filled:n,readonly:r,disabled:i,style:o,...s}){let c=k(),l=(0,V.use)(P),u=j(c.component.select.input.base,{size:t,filled:n,readonly:r,disabled:i},l);return(0,H.jsx)(e,{...T(1),...s,style:[S,{flexShrink:1},u,o]})}),U.__docgenInfo={description:``,methods:[],displayName:`SelectInput`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var G,K,q;function J(){return(J=e((()=>{G=t(),E(),O(),I(),K=n(),q=r(function({as:e=M,invalid:t,emphasis:n,readonly:r,disabled:i,style:a,...o}){let s=k(),c=(0,G.use)(P),l=j(s.component.select.rule.base,{invalid:t,emphasis:n,readonly:r,disabled:i},c);return(0,K.jsx)(e,{...o,style:[l,a]})}),q.__docgenInfo={description:``,methods:[],displayName:`SelectRule`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}export{z as a,I as c,W as i,J as n,B as o,U as r,F as s,q as t};