import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,o as a,s as o}from"./inputs-EVCcd0i4.js";import{a as s,i as ee,n as te,o as c,r as l,t as u}from"./use-interaction-state-DCnx_bf2.js";import{c as d,l as f,o as p,t as m,u as ne}from"./module-CKa45VFv.js";import{i as re,n as ie,r as ae,t as oe}from"./interaction-state-Cs7nJWgF.js";import{n as se,t as ce}from"./reset-text-styles-Byi4N4n7.js";import{n as h,t as le}from"./story-inputs-93gyvxKe.js";import{n as ue,t as de}from"./get-line-clamp-props-J1XJ4XC7.js";import{b as g,i as _,o as v,s as y,y as b}from"./iframe-CsLIKixB.js";import{n as x,t as S}from"./credit-card-D8bp74Ax.js";import{n as C,t as w}from"./folder-BxWgYAzK.js";import{n as T,t as fe}from"./house-e8tVhixk.js";import{n as pe,t as me}from"./user-BuSvp0Vq.js";var E,D;function O(){return(O=e((()=>{g(),_(),E=n(),D=r(function({as:e=b,destinations:t,style:n,...r}){let i=v(),a=y(i.component[`app-navigation`].base,{});return(0,E.jsx)(e,{...r,style:[{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`stretch`},a,n],children:t.map(e=>e({style:{flex:1}}))})}),D.__docgenInfo={description:`The app's primary navigation between its top-level views, one of them current. Every destination renders as a link.`,methods:[],displayName:`AppNavigation`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var k,A;function j(){return(j=e((()=>{le(),k={...h(e=>e.component[`app-navigation`].base)},A={}})))()}var M,N,P;function F(){return(F=e((()=>{re(),ie(),l(),u(),c(),_(),M=n(),N=ae(`AppNavigationDestinationState`,oe),P=r(function({as:e=s,selected:t,indicator:n,label:r,linkedState:i,style:a,...o}){let c=v(),{currentState:l,propsWithHandlers:u}=te(o),d=i??l,f=y(c.component[`app-navigation`].destination.base,{},d);return(0,M.jsx)(e,{...u,style:[ee,{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`center`},f,a],children:(0,M.jsxs)(N,{value:d,children:[n({selected:t}),r({selected:t})]})})}),P.__docgenInfo={description:`Leads to one top-level view. Selected marks the view on screen, the link to the current page.`,methods:[],displayName:`AppNavigationDestination`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var I,L,R;function z(){return(z=e((()=>{I=t(),g(),_(),F(),L=n(),R=r(function({as:e=b,selected:t,icon:n,style:r,...i}){let a=v(),o=(0,I.use)(N),s=y(a.component[`app-navigation`].destination.indicator.base,{selected:t},o);return(0,L.jsx)(e,{...i,style:[{flexDirection:`row`,justifyContent:`center`,alignItems:`center`},s,r],children:n({selected:t})})}),R.__docgenInfo={description:``,methods:[],displayName:`AppNavigationDestinationIndicator`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var B,V,H;function U(){return(U=e((()=>{ne(),B=t(),m(),_(),F(),V=n(),H=r(function({as:e=p,selected:t,style:n,...r}){let i=v(),a=(0,B.use)(N),o=y(i.component[`app-navigation`].destination.indicator.icon.base,{selected:t},a);return(0,V.jsx)(e,{...f(o),...r,style:n})}),H.__docgenInfo={description:``,methods:[],displayName:`AppNavigationDestinationIndicatorIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var W,G,K;function q(){return(q=e((()=>{ue(),ce(),W=t(),o(),_(),F(),G=n(),K=r(function({as:e=a,selected:t,style:n,...r}){let i=v(),o=(0,W.use)(N),s=y(i.component[`app-navigation`].destination.label.base,{selected:t},o);return(0,G.jsx)(e,{...de(1),...r,style:[se,{flexShrink:1},s,n]})}),K.__docgenInfo={description:``,methods:[],displayName:`AppNavigationDestinationLabel`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function he(e){return(0,J.jsx)(D,{testID:`app-navigation`,...e,destinations:[Y(0,!0,e=>(0,J.jsx)(H,{...e,as:fe}),`Home`),Y(1,!1,e=>(0,J.jsx)(H,{...e,as:w}),`Files`),Y(2,!1,e=>(0,J.jsx)(H,{...e,as:S}),`Payments`),Y(3,!1,e=>(0,J.jsx)(H,{...e,as:me}),`Profile`)]})}var J,Y,X,Z,Q;function $(){return($=e((()=>{x(),C(),T(),pe(),O(),j(),F(),z(),U(),q(),J=n(),Y=(e,t,n,r)=>function(i){return(0,J.jsx)(P,{...i,selected:t,indicator:e=>(0,J.jsx)(R,{...e,icon:n}),label:e=>(0,J.jsx)(K,{...e,children:r})},e)},X={title:`Navigation/AppNavigation`,component:D,argTypes:k,args:A,render:he},Z={},Q=[`Playground`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Playground,Q as __namedExportsOrder,X as default};