import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Image-CKFfYgGR.js";import{a as i,i as a,o,s}from"./inputs-EVCcd0i4.js";import{c,l,o as u,t as d,u as f}from"./module-CKa45VFv.js";import{n as p,t as m}from"./reset-text-styles-Byi4N4n7.js";import{n as h,t as g}from"./map-responsive-value-CExytUMx.js";import{n as _,t as v}from"./get-line-clamp-props-J1XJ4XC7.js";import{b as y,i as b,o as x,s as S,y as C}from"./iframe-CsLIKixB.js";var w,T;function E(){return(E=e((()=>{g(),y(),b(),w=t(),T=i(function({as:e=C,size:t,shape:n,content:r,status:i,style:a,...o}){let s=x(),c=S(s.component.avatar.base,{size:t,shape:n});return(0,w.jsxs)(e,{...o,style:[{flexDirection:`row`,justifyContent:`center`,alignItems:`center`,alignSelf:`flex-start`,overflow:`hidden`},c,a],children:[r({size:t,shape:n}),i?.({placement:`overlay`,size:h(t,e=>({xs:`sm`,sm:`sm`,md:`md`,lg:`lg`,xl:`xl`})[e]),style:{position:`absolute`,right:0,bottom:0}})]})}),T.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var D,O;function k(){return(k=e((()=>{y(),b(),D=t(),O=i(function({as:e=C,size:t,shape:n,fallback:r,image:i,style:a,...o}){let s=x(),c=S(s.component.avatar.content.base,{size:t,shape:n});return(0,D.jsxs)(e,{...o,style:[{flexDirection:`row`,justifyContent:`center`,alignItems:`center`,overflow:`hidden`},c,a],children:[r({size:t}),i?.({size:t,shape:n,style:{position:`absolute`,left:0,right:0,top:0,bottom:0,width:`100%`,height:`100%`}})]})}),O.__docgenInfo={description:``,methods:[],displayName:`AvatarContent`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var A,j;function M(){return(M=e((()=>{f(),d(),b(),A=t(),j=i(function({as:e=u,size:t,style:n,...r}){let i=x(),a=S(i.component.avatar.content.icon.base,{size:t});return(0,A.jsx)(e,{...l(a),...r,style:n})}),j.__docgenInfo={description:``,methods:[],displayName:`AvatarContentIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var N,P;function F(){return(F=e((()=>{n(),b(),N=t(),P=i(function({as:e=r,size:t,shape:n,style:i,...a}){let o=x(),s=S(o.component.avatar.content.image.base,{size:t,shape:n});return(0,N.jsx)(e,{...a,style:[{objectFit:`cover`},s,i]})}),P.__docgenInfo={description:``,methods:[],displayName:`AvatarContentImage`,props:{as:{defaultValue:{value:`React.forwardRef((props, ref) => {
  var _ariaLabel = props['aria-label'],
    accessibilityLabel = props.accessibilityLabel,
    blurRadius = props.blurRadius,
    defaultSource = props.defaultSource,
    draggable = props.draggable,
    onError = props.onError,
    onLayout = props.onLayout,
    onLoad = props.onLoad,
    onLoadEnd = props.onLoadEnd,
    onLoadStart = props.onLoadStart,
    pointerEvents = props.pointerEvents,
    source = props.source,
    style = props.style,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var ariaLabel = _ariaLabel || accessibilityLabel;
  if (process.env.NODE_ENV !== 'production') {
    if (props.children) {
      throw new Error('The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.');
    }
  }
  var _React$useState = React.useState(() => {
      var uri = resolveAssetUri(source);
      if (uri != null) {
        var isLoaded = ImageLoader.has(uri);
        if (isLoaded) {
          return LOADED;
        }
      }
      return IDLE;
    }),
    state = _React$useState[0],
    updateState = _React$useState[1];
  var _React$useState2 = React.useState({}),
    layout = _React$useState2[0],
    updateLayout = _React$useState2[1];
  var hasTextAncestor = React.useContext(TextAncestorContext);
  var hiddenImageRef = React.useRef(null);
  var filterRef = React.useRef(_filterId++);
  var requestRef = React.useRef(null);
  var shouldDisplaySource = state === LOADED || state === LOADING && defaultSource == null;
  var _extractNonStandardSt = extractNonStandardStyleProps(style, blurRadius, filterRef.current, props.tintColor),
    _resizeMode = _extractNonStandardSt[0],
    filter = _extractNonStandardSt[1],
    _tintColor = _extractNonStandardSt[2];
  var resizeMode = props.resizeMode || _resizeMode || 'cover';
  var tintColor = props.tintColor || _tintColor;
  var selectedSource = shouldDisplaySource ? source : defaultSource;
  var displayImageUri = resolveAssetUri(selectedSource);
  var imageSizeStyle = resolveAssetDimensions(selectedSource);
  var backgroundImage = displayImageUri ? "url(\\"" + displayImageUri + "\\")" : null;
  var backgroundSize = getBackgroundSize();

  // Accessibility image allows users to trigger the browser's image context menu
  var hiddenImage = displayImageUri ? createElement('img', {
    alt: ariaLabel || '',
    style: styles.accessibilityImage$raw,
    draggable: draggable || false,
    ref: hiddenImageRef,
    src: displayImageUri
  }) : null;
  function getBackgroundSize() {
    if (hiddenImageRef.current != null && (resizeMode === 'center' || resizeMode === 'repeat')) {
      var _hiddenImageRef$curre = hiddenImageRef.current,
        naturalHeight = _hiddenImageRef$curre.naturalHeight,
        naturalWidth = _hiddenImageRef$curre.naturalWidth;
      var _height3 = layout.height,
        _width3 = layout.width;
      if (naturalHeight && naturalWidth && _height3 && _width3) {
        var scaleFactor = Math.min(1, _width3 / naturalWidth, _height3 / naturalHeight);
        var x = Math.ceil(scaleFactor * naturalWidth);
        var y = Math.ceil(scaleFactor * naturalHeight);
        return x + "px " + y + "px";
      }
    }
  }
  function handleLayout(e) {
    if (resizeMode === 'center' || resizeMode === 'repeat' || onLayout) {
      var _layout = e.nativeEvent.layout;
      onLayout && onLayout(e);
      updateLayout(_layout);
    }
  }

  // Image loading
  // Read the load handlers through a ref, so that a new handler identity does
  // not abort and restart the request for the same uri.
  var loadEventHandlersRef = React.useRef({
    onError,
    onLoad,
    onLoadEnd,
    onLoadStart
  });
  useLayoutEffect(() => {
    loadEventHandlersRef.current = {
      onError,
      onLoad,
      onLoadEnd,
      onLoadStart
    };
  });
  var uri = resolveAssetUri(source);
  React.useEffect(() => {
    abortPendingRequest();
    if (uri != null) {
      updateState(LOADING);
      var _onLoadStart = loadEventHandlersRef.current.onLoadStart;
      if (_onLoadStart) {
        _onLoadStart();
      }
      requestRef.current = ImageLoader.load(uri, function load(e) {
        updateState(LOADED);
        var _loadEventHandlersRef = loadEventHandlersRef.current,
          onLoad = _loadEventHandlersRef.onLoad,
          onLoadEnd = _loadEventHandlersRef.onLoadEnd;
        if (onLoad) {
          onLoad(e);
        }
        if (onLoadEnd) {
          onLoadEnd();
        }
      }, function error() {
        updateState(ERRORED);
        var _loadEventHandlersRef2 = loadEventHandlersRef.current,
          onError = _loadEventHandlersRef2.onError,
          onLoadEnd = _loadEventHandlersRef2.onLoadEnd;
        if (onError) {
          onError({
            nativeEvent: {
              error: "Failed to load resource " + uri
            }
          });
        }
        if (onLoadEnd) {
          onLoadEnd();
        }
      });
    }
    function abortPendingRequest() {
      if (requestRef.current != null) {
        ImageLoader.abort(requestRef.current);
        requestRef.current = null;
      }
    }
    return abortPendingRequest;
  }, [uri, requestRef, updateState]);
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    "aria-label": ariaLabel,
    onLayout: handleLayout,
    pointerEvents: pointerEvents,
    ref: ref,
    style: [styles.root, hasTextAncestor && styles.inline, imageSizeStyle, style, styles.undo,
    // TEMP: avoid deprecated shadow props regression
    // until Image refactored to use createElement.
    {
      boxShadow: null
    }]
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.image, resizeModeStyles[resizeMode], {
      backgroundImage,
      filter
    }, backgroundSize != null && {
      backgroundSize
    }],
    suppressHydrationWarning: true
  }), hiddenImage, createTintColorSVG(tintColor, filterRef.current));
})`,computed:!0},required:!1}}}})))()}var I,L;function R(){return(R=e((()=>{_(),m(),s(),b(),I=t(),L=i(function({as:e=o,size:t,style:n,...r}){let i=x(),a=S(i.component.avatar.content.initials.base,{size:t});return(0,I.jsx)(e,{...v(1),...r,style:[p,{flexShrink:1},a,n]})}),L.__docgenInfo={description:``,methods:[],displayName:`AvatarContentInitials`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}export{j as a,k as c,F as i,T as l,R as n,M as o,P as r,O as s,L as t,E as u};