import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./spinning-circle-D_2FWNqN.js";import{a,i as o,o as s,s as c}from"./inputs-EVCcd0i4.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./use-interaction-state-DCnx_bf2.js";import{c as h,l as g,o as _,t as v,u as y}from"./module-CKa45VFv.js";import{i as b,n as x,r as S,t as C}from"./interaction-state-Cs7nJWgF.js";import{n as w,t as T}from"./reset-text-styles-Byi4N4n7.js";import{n as E,t as D}from"./get-line-clamp-props-J1XJ4XC7.js";import{f as O,i as k,o as A,p as j,s as M}from"./iframe-CsLIKixB.js";var N,P,F;function I(){return(I=e((()=>{b(),x(),p(),m(),O(),f(),k(),N=n(),P=S(`ButtonState`,C),F=a(function({as:e=l,destructive:t,emphasis:n,size:r,loading:i,disabled:a,prepend:o,label:s,append:c,spinner:f,linkedState:p,style:m,...h}){let g=A(),_=j(a),{currentState:v,propsWithHandlers:y}=d({...h,disabled:_}),b=p??v,x=M(g.component.button.base,{destructive:t,emphasis:n,size:r,loading:i,disabled:a},b);return(0,N.jsx)(e,{...y,style:[u,{flexDirection:`row`,justifyContent:`center`,alignItems:`center`,alignSelf:`flex-start`,overflow:`hidden`},x,m],children:(0,N.jsxs)(P,{value:b,children:[o?.({destructive:t,emphasis:n,size:r,loading:i,disabled:a}),s({destructive:t,emphasis:n,size:r,loading:i,disabled:a}),c?.({destructive:t,emphasis:n,size:r,loading:i,disabled:a}),f?.({destructive:t,emphasis:n,size:r,style:{position:`absolute`,left:`50%`,top:`50%`,transform:[{translateX:`-50%`},{translateY:`-50%`}]}})]})})}),F.__docgenInfo={description:`Starts an action.`,methods:[],displayName:`Button`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var L,R,z;function B(){return(B=e((()=>{y(),L=t(),v(),k(),I(),R=n(),z=a(function({as:e=_,destructive:t,emphasis:n,size:r,loading:i,disabled:a,style:o,...s}){let c=A(),l=(0,L.use)(P),u=M(c.component.button.icon.base,{destructive:t,emphasis:n,size:r,loading:i,disabled:a},l);return(0,R.jsx)(e,{...g(u),...s,style:o})}),z.__docgenInfo={description:``,methods:[],displayName:`ButtonIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var V,H,U;function W(){return(W=e((()=>{E(),T(),V=t(),c(),k(),I(),H=n(),U=a(function({as:e=s,destructive:t,emphasis:n,size:r,loading:i,disabled:a,style:o,...c}){let l=A(),u=(0,V.use)(P),d=M(l.component.button.label.base,{destructive:t,emphasis:n,size:r,loading:i,disabled:a},u);return(0,H.jsx)(e,{...D(1),...c,style:[w,{flexShrink:1},d,o]})}),U.__docgenInfo={description:``,methods:[],displayName:`ButtonLabel`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var G,K,q;function J(){return(J=e((()=>{y(),G=t(),r(),k(),I(),K=n(),q=a(function({destructive:e,emphasis:t,size:n,style:r,...a}){let o=A(),s=(0,G.use)(P),c=M(o.component.button.spinner.base,{destructive:e,emphasis:t,size:n},s);return(0,K.jsx)(i,{...g(c),...a,style:r})}),q.__docgenInfo={description:``,methods:[],displayName:`ButtonSpinner`}})))()}export{z as a,I as c,W as i,J as n,B as o,U as r,F as s,q as t};