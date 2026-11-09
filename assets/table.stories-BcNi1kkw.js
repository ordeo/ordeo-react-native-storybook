import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,n as a,o,r as s,s as c,t as l}from"./inputs-EVCcd0i4.js";import{a as ee,i as u,n as d,o as f,r as p,t as m}from"./use-interaction-state-DCnx_bf2.js";import{c as te,l as h,o as g,r as ne,t as _,u as re}from"./module-CKa45VFv.js";import{i as ie,n as ae,r as oe,t as se}from"./interaction-state-Cs7nJWgF.js";import{n as ce,t as le}from"./reset-text-styles-Byi4N4n7.js";import{n as ue,t as de}from"./story-inputs-93gyvxKe.js";import{n as fe,t as pe}from"./get-line-clamp-props-J1XJ4XC7.js";import{b as v,f as me,i as y,o as b,p as he,s as x,y as S}from"./iframe-CsLIKixB.js";import{n as ge,t as _e}from"./icon-placeholder-DTqhzWQl.js";import{n as C,t as ve}from"./variant-story-Di2FcdOM.js";function ye(e){return(0,w.jsx)(g,{viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,w.jsx)(ne,{d:`M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V16.5859L18.293 11.293C18.6835 10.9024 19.3165 10.9024 19.707 11.293C20.0975 11.6835 20.0975 12.3165 19.707 12.707L12.707 19.707C12.3165 20.0976 11.6835 20.0976 11.293 19.707L4.29295 12.707C3.90243 12.3165 3.90243 11.6835 4.29295 11.293C4.68348 10.9024 5.31649 10.9024 5.70702 11.293L11 16.5859V5Z`,fill:`currentColor`})})}var w;function be(){return(be=e((()=>{_(),w=n(),ye.__docgenInfo={description:``,methods:[],displayName:`ArrowDown`}})))()}function xe(e){return(0,T.jsx)(g,{viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,T.jsx)(ne,{d:`M6.00005 20V6.41406L3.70708 8.70703C3.31655 9.09756 2.68354 9.09756 2.29302 8.70703C1.90249 8.31651 1.90249 7.68349 2.29302 7.29297L6.29302 3.29297L6.36919 3.22461C6.76196 2.90426 7.34096 2.92685 7.70708 3.29297L11.7071 7.29297C12.0976 7.68349 12.0976 8.31651 11.7071 8.70703C11.3166 9.09756 10.6835 9.09756 10.293 8.70703L8.00005 6.41406V20C8.00005 20.5523 7.55233 21 7.00005 21C6.44776 21 6.00005 20.5523 6.00005 20ZM16 4C16 3.44772 16.4478 3 17 3C17.5523 3 18 3.44772 18 4V17.5859L20.293 15.293C20.6835 14.9024 21.3166 14.9024 21.7071 15.293C22.0976 15.6835 22.0976 16.3165 21.7071 16.707L17.7071 20.707C17.3166 21.0976 16.6835 21.0976 16.293 20.707L12.293 16.707C11.9025 16.3165 11.9025 15.6835 12.293 15.293C12.6835 14.9024 13.3166 14.9024 13.7071 15.293L16 17.5859V4Z`,fill:`currentColor`})})}var T;function Se(){return(Se=e((()=>{_(),T=n(),xe.__docgenInfo={description:``,methods:[],displayName:`ArrowUpDown`}})))()}var Ce,E;function we(){return(we=e((()=>{v(),y(),Ce=n(),E=r(function({as:e=S,density:t,ground:n,head:r,body:i,style:a,...o}){let s=b(),c=x(s.component.table.base,{ground:n});return(0,Ce.jsxs)(e,{...o,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},c,a],children:[r({density:t,ground:n}),i({density:t})]})}),E.__docgenInfo={description:``,methods:[],displayName:`Table`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var Te,Ee;function De(){return(De=e((()=>{a(),de(),Te={density:s([`compact`,`balanced`,`spacious`]),...ue(e=>e.component.table.base),withHeadRowsCellsSort:l([!0,!1]),withBodyRowsCellsPrepend:l([!0,!1])},Ee={density:`compact`,ground:`page`,withHeadRowsCellsSort:!0,withBodyRowsCellsPrepend:!0}})))()}var Oe,D;function ke(){return(ke=e((()=>{v(),y(),Oe=n(),D=r(function({as:e=S,density:t,rows:n,style:r,...i}){let a=b(),o=x(a.component.table.body.base,{});return(0,Oe.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n.map(e=>e({density:t}))})}),D.__docgenInfo={description:``,methods:[],displayName:`TableBody`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var Ae,O;function je(){return(je=e((()=>{p(),m(),f(),y(),Ae=n(),O=r(function({as:e=ee,density:t,selected:n,cells:r,linkedState:i,style:a,...o}){let s=b(),{currentState:c,propsWithHandlers:l}=d(o),f=i??c,p=x(s.component.table.body.row.base,{density:t,selected:n},f);return(0,Ae.jsx)(e,{...l,style:[u,{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`stretch`},p,a],children:r.map(e=>e({density:t,selected:n,style:{flex:1}}))})}),O.__docgenInfo={description:``,methods:[],displayName:`TableBodyRow`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var k,A,j;function M(){return(M=e((()=>{ie(),ae(),p(),m(),me(),f(),y(),k=n(),A=oe(`TableBodyRowCellState`,se),j=r(function({as:e=ee,bold:t,density:n,selected:r,align:i,prepend:a,content:o,linkedState:s,style:c,...l}){let f=b(),p=he(i),{currentState:m,propsWithHandlers:te}=d(l),h=s??m,g=x(f.component.table.body.row.cell.base,{density:n},h);return(0,k.jsx)(e,{...te,style:[u,{flexDirection:`row`,justifyContent:p===`start`?`flex-start`:`flex-end`,alignItems:`center`},g,c],children:(0,k.jsxs)(A,{value:h,children:[a?.({density:n,selected:r}),o({bold:t,density:n,selected:r})]})})}),j.__docgenInfo={description:``,methods:[],displayName:`TableBodyRowCell`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var Me,Ne,N;function Pe(){return(Pe=e((()=>{re(),Me=t(),_(),y(),M(),Ne=n(),N=r(function({as:e=g,density:t,selected:n,style:r,...i}){let a=b(),o=(0,Me.use)(A),s=x(a.component.table.body.row.cell.icon.base,{density:t,selected:n},o);return(0,Ne.jsx)(e,{...h(s),...i,style:r})}),N.__docgenInfo={description:``,methods:[],displayName:`TableBodyRowCellIcon`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var Fe,Ie,P;function Le(){return(Le=e((()=>{fe(),le(),Fe=t(),c(),y(),M(),Ie=n(),P=r(function({as:e=o,bold:t,density:n,selected:r,style:i,...a}){let s=b(),c=(0,Fe.use)(A),l=x(s.component.table.body.row.cell.text.base,{bold:t,density:n,selected:r},c);return(0,Ie.jsx)(e,{...pe(1),...a,style:[ce,{flexShrink:1},l,i]})}),P.__docgenInfo={description:``,methods:[],displayName:`TableBodyRowCellText`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var Re,F;function ze(){return(ze=e((()=>{v(),y(),Re=n(),F=r(function({as:e=S,density:t,ground:n,rows:r,style:i,...a}){let o=b(),s=x(o.component.table.head.base,{});return(0,Re.jsx)(e,{...a,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},s,i],children:r.map(e=>e({density:t,ground:n}))})}),F.__docgenInfo={description:``,methods:[],displayName:`TableHead`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var I,L,R;function z(){return(z=e((()=>{ie(),ae(),p(),m(),me(),f(),y(),I=n(),L=oe(`TableHeadCellState`,se),R=r(function({as:e=ee,density:t,selected:n,align:r,label:i,sort:a,linkedState:o,style:s,...c}){let l=b(),f=he(r),{currentState:p,propsWithHandlers:m}=d(c),te=o??p,h=x(l.component.table.head.cell.base,{density:t},te);return(0,I.jsx)(e,{...m,style:[u,{flexDirection:`row`,justifyContent:f===`start`?`flex-start`:`flex-end`,alignItems:`center`},h,s],children:(0,I.jsxs)(L,{value:te,children:[i({density:t,selected:n}),a?.({density:t,selected:n})]})})}),R.__docgenInfo={description:``,methods:[],displayName:`TableHeadCell`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var Be,Ve,B;function He(){return(He=e((()=>{fe(),le(),Be=t(),c(),y(),z(),Ve=n(),B=r(function({as:e=o,density:t,selected:n,style:r,...i}){let a=b(),s=(0,Be.use)(L),c=x(a.component.table.head.cell.label.base,{density:t,selected:n},s);return(0,Ve.jsx)(e,{...pe(1),...i,style:[ce,{flexShrink:1},c,r]})}),B.__docgenInfo={description:``,methods:[],displayName:`TableHeadCellLabel`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var Ue,We,V;function Ge(){return(Ge=e((()=>{re(),Ue=t(),_(),y(),z(),We=n(),V=r(function({as:e=g,density:t,selected:n,style:r,...i}){let a=b(),o=(0,Ue.use)(L),s=x(a.component.table.head.cell.sort.base,{density:t,selected:n},o);return(0,We.jsx)(e,{...h(s),...i,style:r})}),V.__docgenInfo={description:``,methods:[],displayName:`TableHeadCellSort`,props:{as:{defaultValue:{value:`Svg`,computed:!0},required:!1}}}})))()}var Ke,H;function qe(){return(qe=e((()=>{v(),y(),Ke=n(),H=r(function({as:e=S,density:t,ground:n,cells:r,style:i,...a}){let o=b(),s=x(o.component.table.head.row.base,{density:t,ground:n});return(0,Ke.jsx)(e,{...a,style:[{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`center`},s,i],children:r.map(e=>e({density:t,style:{flex:1}}))})}),H.__docgenInfo={description:``,methods:[],displayName:`TableHeadRow`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function U({withHeadRowsCellsSort:e,withBodyRowsCellsPrepend:t,...n}){return(0,W.jsx)(E,{testID:`table`,...n,head:t=>(0,W.jsx)(F,{...t,rows:[Je(0,e),Je(1,e)]}),body:e=>(0,W.jsx)(D,{...e,rows:[q(0,t,!1),q(1,t,!0),q(2,t,!1)]})})}var W,G,Je,K,q,J,Y,X,Z,Q,$,Ye;function Xe(){return(Xe=e((()=>{ge(),ve(),be(),Se(),we(),De(),ke(),je(),M(),Pe(),Le(),ze(),z(),He(),Ge(),qe(),W=n(),G=(e,t,n,r,i)=>function(a){return(0,W.jsx)(R,{...a,selected:r,align:i,label:e=>(0,W.jsx)(B,{...e,children:n}),sort:t?e=>(0,W.jsx)(V,{...e,as:r?ye:xe}):void 0},e)},Je=(e,t)=>function(n){return(0,W.jsx)(H,{...n,cells:[G(0,t,`Title`,!1,`start`),G(1,t,`Genre`,!1,`start`),G(2,t,`Length`,!1,`end`),G(3,t,`Plays`,!0,`end`)]},e)},K=(e,t,n,r,i)=>function(a){return(0,W.jsx)(j,{...a,bold:r,align:i,prepend:t?e=>(0,W.jsx)(N,{...e,as:_e}):void 0,content:e=>(0,W.jsx)(P,{...e,children:n})},e)},q=(e,t,n)=>function(r){return(0,W.jsx)(O,{...r,selected:n,cells:[K(0,t,`Northern Lights`,!0,`start`),K(1,t,`Documentary`,!1,`start`),K(2,t,`52 min`,!1,`end`),K(3,t,`1,204`,!1,`end`)]},e)},J={title:`Content/Table`,component:E,argTypes:Te,args:Ee,render:U},Y={},X=C(J,`density`,U),Z=C(J,`ground`,U),Q=C(J,`withHeadRowsCellsSort`,U),$=C(J,`withBodyRowsCellsPrepend`,U),Ye=[`Playground`,`Density`,`Ground`,`WithHeadRowsCellsSort`,`WithBodyRowsCellsPrepend`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "density", TableTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`variantStory(meta, "ground", TableTemplate)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`variantStory(meta, "withHeadRowsCellsSort", TableTemplate)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`variantStory(meta, "withBodyRowsCellsPrepend", TableTemplate)`,...$.parameters?.docs?.source}}}})))()}Xe();export{X as Density,Z as Ground,Y as Playground,$ as WithBodyRowsCellsPrepend,Q as WithHeadRowsCellsSort,Ye as __namedExportsOrder,J as default};