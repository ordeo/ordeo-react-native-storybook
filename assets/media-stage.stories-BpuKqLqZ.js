import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,o as a,s as o,t as s}from"./inputs-EVCcd0i4.js";import{a as c,c as l,i as ee,n as te,o as ne,r as re,s as ie,t as ae}from"./module-CKa45VFv.js";import{n as u,t as d}from"./reset-text-styles-Byi4N4n7.js";import{n as oe,t as se}from"./map-responsive-value-CExytUMx.js";import{n as ce,t as le}from"./story-inputs-93gyvxKe.js";import{n as ue,t as de}from"./get-line-clamp-props-J1XJ4XC7.js";import{b as f,f as fe,i as p,nt as pe,o as m,p as me,s as h,tt as he,y as g}from"./iframe-CsLIKixB.js";import{n as ge,t as _e}from"./icon-placeholder-DTqhzWQl.js";import{n as _,t as ve}from"./variant-story-Di2FcdOM.js";import{a as ye,c as be,i as xe,o as Se,r as v,s as y}from"./button-spinner-eHS1FUoR.js";import{t as Ce}from"./button-B3GuFyUn.js";import{a as we,i as Te,o as Ee,r as De}from"./icon-button-spinner-A9fj4J6P.js";import{t as Oe}from"./icon-button-DxfCqB4Y.js";import{a as ke,i as Ae,o as je,r as Me}from"./status-dot-inner-icon-Df3Dghri.js";import{t as Ne}from"./status-dot--mokvU-U.js";import{n as Pe,t as Fe}from"./toolbar-qsjR9vIn.js";import{t as Ie}from"./toolbar-CHxb_vy0.js";import{n as Le,t as Re}from"./heading-Z01THsW2.js";import{t as ze}from"./heading-Dkoy5Aax.js";import{i as Be,n as Ve,r as He,t as Ue}from"./progress-bar-progress-CWfegGVQ.js";import{t as We}from"./progress-bar-D11FBi3O.js";function Ge({style:e,...t}){return(0,b.jsx)(g,{...t,style:[Ke,e],children:(0,b.jsxs)(ne,{width:`100%`,height:`100%`,style:pe.absoluteFill,children:[(0,b.jsx)(te,{children:(0,b.jsxs)(ee,{id:`slot`,width:x,height:x,patternUnits:`userSpaceOnUse`,children:[(0,b.jsx)(c,{width:x,height:x,fill:`#f3f4f4`}),(0,b.jsx)(re,{d:`M0 0L80 80M0 41.5H80M41.5 0V80`,stroke:`#e6e7e7`,strokeWidth:1}),(0,b.jsx)(ie,{x:46,y:36.5,fontFamily:`sans-serif`,fontSize:13,fontWeight:`700`,fill:`#d2d2d2`,children:`SLOT`})]})}),(0,b.jsx)(c,{width:`100%`,height:`100%`,fill:`url(#slot)`})]})})}var b,x,Ke;function qe(){return(qe=e((()=>{b=t(),he(),f(),ae(),x=80,Ke={minHeight:x,overflow:`hidden`}})))()}var Je,S;function Ye(){return(Ye=e((()=>{f(),p(),Je=t(),S=n(function({as:e=g,size:t,backdrop:n,header:r,fade:i,footer:a,style:o,...s}){let c=m(),l=h(c.component[`media-stage`].base,{size:t});return(0,Je.jsxs)(e,{...s,style:[{overflow:`hidden`,flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},l,o],children:[n?.({style:{position:`absolute`,left:0,right:0,top:0,bottom:0,width:`100%`,height:`100%`,zIndex:-1}}),r?.({size:t}),i({size:t,style:{position:`absolute`,left:0,right:0,top:0,bottom:0,width:`100%`,height:`100%`,zIndex:-1}}),a({size:t,style:{flex:1}})]})}),S.__docgenInfo={description:`The hero of a home, a programme's picture, where it stands now and what to do with it.`,methods:[],displayName:`MediaStage`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var Xe,Ze;function Qe(){return(Qe=e((()=>{i(),le(),Xe={...ce(e=>e.component[`media-stage`].base),withBackdrop:s([!0,!1]),withHeader:s([!0,!1]),withFooterWordsEyebrow:s([!0,!1]),withFooterWordsFacts:s([!0,!1]),withFooterWordsFactsSeparator:s([!0,!1]),withFooterWordsFactsMeta:s([!0,!1]),withFooterRail:s([!0,!1]),withFooterRailLive:s([!0,!1]),withFooterActions:s([!0,!1]),withFooterActionsSecondary:s([!0,!1])},Ze={size:`sm`,withBackdrop:!0,withHeader:!0,withFooterWordsEyebrow:!0,withFooterWordsFacts:!0,withFooterWordsFactsSeparator:!0,withFooterWordsFactsMeta:!0,withFooterRail:!0,withFooterRailLive:!0,withFooterActions:!0,withFooterActionsSecondary:!0}})))()}var $e,C;function et(){return(et=e((()=>{f(),p(),$e=t(),C=n(function({as:e=g,size:t,style:n,...r}){let i=m(),a=h(i.component[`media-stage`].fade.base,{size:t});return(0,$e.jsx)(e,{...r,style:[a,n]})}),C.__docgenInfo={description:``,methods:[],displayName:`MediaStageFade`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var tt,w;function nt(){return(nt=e((()=>{f(),p(),tt=t(),w=n(function({as:e=g,size:t,words:n,rail:r,actions:i,style:a,...o}){let s=m(),c=h(s.component[`media-stage`].footer.base,{size:t});return(0,tt.jsxs)(e,{...o,style:[{flexDirection:`column`,justifyContent:`flex-end`,alignItems:`stretch`},c,a],children:[n({size:t}),r?.({size:t}),i?.({size:t})]})}),w.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooter`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var rt,T;function it(){return(it=e((()=>{se(),fe(),f(),p(),rt=t(),T=n(function({as:e=g,size:t,secondary:n,primary:r,style:i,...a}){let o=m(),s=me(t),c=h(o.component[`media-stage`].footer.actions.base,{size:t});return(0,rt.jsxs)(e,{...a,style:[{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`center`},c,i],children:[n?.({emphasis:`medium`,size:oe(t,e=>({sm:`md`,md:`lg`,lg:`lg`})[e]),style:{alignSelf:`auto`}}),r({emphasis:`high`,size:oe(t,e=>({sm:`md`,md:`lg`,lg:`lg`})[e]),style:s===`sm`?{flex:1,alignSelf:`auto`}:{alignSelf:`auto`}})]})}),T.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterActions`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var at,E;function ot(){return(ot=e((()=>{f(),p(),at=t(),E=n(function({as:e=g,size:t,bar:n,live:r,style:i,...a}){let o=m(),s=h(o.component[`media-stage`].footer.rail.base,{size:t});return(0,at.jsxs)(e,{...a,style:[{flexDirection:`row`,justifyContent:`flex-start`,alignItems:`center`},s,i],children:[n({intent:`neutral`,size:`xl`,style:{flex:1}}),r?.({size:t,style:{alignSelf:`auto`}})]})}),E.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterRail`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var st,D;function ct(){return(ct=e((()=>{f(),p(),st=t(),D=n(function({as:e=g,size:t,dot:n,label:r,style:i,...a}){let o=m(),s=h(o.component[`media-stage`].footer.rail.live.base,{size:t});return(0,st.jsxs)(e,{...a,style:[{flexDirection:`row`,justifyContent:`center`,alignItems:`center`,alignSelf:`flex-start`},s,i],children:[n({intent:`live`,placement:`flow`,size:`md`,style:{alignSelf:`auto`}}),r({size:t})]})}),D.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterRailLive`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var lt,O;function ut(){return(ut=e((()=>{ue(),d(),o(),p(),lt=t(),O=n(function({as:e=a,size:t,style:n,...r}){let i=m(),o=h(i.component[`media-stage`].footer.rail.live.label.base,{size:t});return(0,lt.jsx)(e,{...de(1),...r,style:[u,{flexShrink:1},o,n]})}),O.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterRailLiveLabel`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var dt,k;function ft(){return(ft=e((()=>{fe(),f(),p(),dt=t(),k=n(function({as:e=g,size:t,eyebrow:n,title:r,facts:i,style:a,...o}){let s=m(),c=me(t),l=h(s.component[`media-stage`].footer.words.base,{size:t});return(0,dt.jsxs)(e,{...o,style:[{flexDirection:`column`,justifyContent:`flex-end`,alignItems:c===`sm`?`flex-start`:`center`},l,a],children:[n?.({size:t}),r({size:t}),i?.({size:t})]})}),k.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterWords`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var pt,A;function mt(){return(mt=e((()=>{d(),o(),p(),pt=t(),A=n(function({as:e=a,size:t,style:n,...r}){let i=m(),o=h(i.component[`media-stage`].footer.words.eyebrow.base,{size:t});return(0,pt.jsx)(e,{...r,style:[u,o,n]})}),A.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterWordsEyebrow`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var ht,j;function gt(){return(gt=e((()=>{fe(),f(),p(),ht=t(),j=n(function({as:e=g,size:t,subtitle:n,separator:r,meta:i,style:a,...o}){let s=m(),c=me(t),l=h(s.component[`media-stage`].footer.words.facts.base,{size:t});return(0,ht.jsxs)(e,{...o,style:[{flexDirection:c===`sm`?`column`:`row`,justifyContent:c===`sm`?`flex-start`:`center`,alignItems:c===`sm`?`flex-start`:`center`},l,a],children:[n({size:t}),r?.({size:t}),i?.({size:t})]})}),j.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterWordsFacts`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var _t,M;function vt(){return(vt=e((()=>{d(),o(),p(),_t=t(),M=n(function({as:e=a,size:t,style:n,...r}){let i=m(),o=h(i.component[`media-stage`].footer.words.facts.meta.base,{size:t});return(0,_t.jsx)(e,{...r,style:[u,o,n]})}),M.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterWordsFactsMeta`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var yt,N;function bt(){return(bt=e((()=>{f(),p(),yt=t(),N=n(function({as:e=g,size:t,style:n,...r}){let i=m(),a=h(i.component[`media-stage`].footer.words.facts.separator.base,{size:t});return(0,yt.jsx)(e,{...r,style:[a,n]})}),N.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterWordsFactsSeparator`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var xt,P;function St(){return(St=e((()=>{d(),o(),p(),xt=t(),P=n(function({as:e=a,size:t,style:n,...r}){let i=m(),o=h(i.component[`media-stage`].footer.words.facts.subtitle.base,{size:t});return(0,xt.jsx)(e,{...r,style:[u,o,n]})}),P.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterWordsFactsSubtitle`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var Ct,F;function wt(){return(wt=e((()=>{d(),o(),p(),Ct=t(),F=n(function({as:e=a,size:t,style:n,...r}){let i=m(),o=h(i.component[`media-stage`].footer.words.title.base,{size:t});return(0,Ct.jsx)(e,{...r,style:[u,o,n]})}),F.__docgenInfo={description:``,methods:[],displayName:`MediaStageFooterWordsTitle`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var Tt,I;function Et(){return(Et=e((()=>{se(),f(),p(),Tt=t(),I=n(function({as:e=g,size:t,bars:n,style:r,...i}){let a=m(),o=h(a.component[`media-stage`].header.base,{size:t});return(0,Tt.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n({ground:`page`,size:oe(t,e=>({sm:`md`,md:`md`,lg:`lg`})[e])})})}),I.__docgenInfo={description:``,methods:[],displayName:`MediaStageHeader`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function L({withBackdrop:e,withHeader:t,withFooterWordsEyebrow:n,withFooterWordsFacts:r,withFooterWordsFactsSeparator:i,withFooterWordsFactsMeta:a,withFooterRail:o,withFooterRailLive:s,withFooterActions:c,withFooterActionsSecondary:l,...ee}){return(0,R.jsx)(S,{testID:`media-stage`,...ee,backdrop:e?()=>(0,R.jsx)(Ge,{}):void 0,header:t?e=>(0,R.jsx)(I,{...e,bars:e=>(0,R.jsx)(Fe,{...e,content:[Dt(0,`Home`)],append:[Ot(0)]})}):void 0,fade:e=>(0,R.jsx)(C,{...e}),footer:e=>(0,R.jsx)(w,{...e,words:e=>(0,R.jsx)(k,{...e,eyebrow:n?e=>(0,R.jsx)(A,{...e,children:`Tonight`}):void 0,title:e=>(0,R.jsx)(F,{...e,children:`The night of fires`}),facts:r?e=>(0,R.jsx)(j,{...e,subtitle:e=>(0,R.jsx)(P,{...e,children:`Second half, 56th minute`}),separator:i?e=>(0,R.jsx)(N,{...e}):void 0,meta:a?e=>(0,R.jsx)(M,{...e,children:`Arena Sport · 20:30–22:20`}):void 0}):void 0}),rail:o?e=>(0,R.jsx)(E,{...e,bar:e=>(0,R.jsx)(He,{...e,progress:e=>(0,R.jsx)(Ue,{...e})}),live:s?e=>(0,R.jsx)(D,{...e,dot:e=>(0,R.jsx)(ke,{...e,inner:e=>(0,R.jsx)(Me,{...e})}),label:e=>(0,R.jsx)(O,{...e,children:`Live`})}):void 0}):void 0,actions:c?e=>(0,R.jsx)(T,{...e,secondary:l?e=>(0,R.jsx)(y,{...e,destructive:!1,loading:!1,disabled:!1,label:e=>(0,R.jsx)(v,{...e,children:`From the start`})}):void 0,primary:e=>(0,R.jsx)(y,{...e,destructive:!1,loading:!1,disabled:!1,label:e=>(0,R.jsx)(v,{...e,children:`Watch`})})}):void 0})})}var R,Dt,Ot,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,kt;function At(){return(At=e((()=>{ge(),qe(),ve(),Ce(),ze(),Oe(),We(),Ne(),Ie(),Ye(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),R=t(),Dt=(e,t)=>function(n){return(0,R.jsx)(Re,{...n,intent:`neutral`,emphasis:`high`,size:`sm`,disabled:!1,children:t},e)},Ot=e=>function(t){return(0,R.jsx)(we,{...t,destructive:!1,emphasis:`medium`,loading:!1,disabled:!1,icon:e=>(0,R.jsx)(De,{...e,as:_e})},e)},z={title:`Content/MediaStage`,component:S,argTypes:Xe,args:Ze,render:L},B={},V=_(z,`size`,L),H=_(z,`withBackdrop`,L),U=_(z,`withHeader`,L),W=_(z,`withFooterWordsEyebrow`,L),G=_(z,`withFooterWordsFacts`,L),K=_(z,`withFooterWordsFactsSeparator`,L),q=_(z,`withFooterWordsFactsMeta`,L),J=_(z,`withFooterRail`,L),Y=_(z,`withFooterRailLive`,L),X=_(z,`withFooterActions`,L),Z=_(z,`withFooterActionsSecondary`,L),Q={args:{size:`sm`},render:e=>(0,R.jsx)(S,{...e,header:e=>(0,R.jsx)(I,{...e,bars:e=>(0,R.jsx)(Fe,{...e,content:[Dt(0,`Tonight`)],append:[Ot(0),Ot(1)]})}),fade:e=>(0,R.jsx)(C,{...e}),footer:e=>(0,R.jsx)(w,{...e,words:e=>(0,R.jsx)(k,{...e,eyebrow:e=>(0,R.jsx)(A,{...e,children:`Super League · Round 14`}),title:e=>(0,R.jsx)(F,{...e,children:`Zürich 2–1 Bern`}),facts:e=>(0,R.jsx)(j,{...e,subtitle:e=>(0,R.jsx)(P,{...e,children:`Second half, 56th minute`}),separator:e=>(0,R.jsx)(N,{...e}),meta:e=>(0,R.jsx)(M,{...e,children:`Arena Sport · 20:30–22:20`})})}),rail:e=>(0,R.jsx)(E,{...e,bar:e=>(0,R.jsx)(He,{...e,progress:e=>(0,R.jsx)(Ue,{...e})}),live:e=>(0,R.jsx)(D,{...e,dot:e=>(0,R.jsx)(ke,{...e,inner:e=>(0,R.jsx)(Me,{...e})}),label:e=>(0,R.jsx)(O,{...e,children:`Live`})})}),actions:e=>(0,R.jsx)(T,{...e,secondary:e=>(0,R.jsx)(y,{...e,destructive:!1,loading:!1,disabled:!1,label:e=>(0,R.jsx)(v,{...e,children:`From the start`})}),primary:e=>(0,R.jsx)(y,{...e,destructive:!1,loading:!1,disabled:!1,prepend:e=>(0,R.jsx)(ye,{...e,as:_e}),label:e=>(0,R.jsx)(v,{...e,children:`Watch live`})})})})})},$={args:{size:`lg`},render:e=>(0,R.jsx)(S,{...e,fade:e=>(0,R.jsx)(C,{...e}),footer:e=>(0,R.jsx)(w,{...e,words:e=>(0,R.jsx)(k,{...e,eyebrow:e=>(0,R.jsx)(A,{...e,children:`Tonight at 20:15`}),title:e=>(0,R.jsx)(F,{...e,children:`The night of fires`}),facts:e=>(0,R.jsx)(j,{...e,subtitle:e=>(0,R.jsx)(P,{...e,children:`A fire crew holds one valley.`})})}),rail:e=>(0,R.jsx)(E,{...e,bar:e=>(0,R.jsx)(He,{...e,progress:e=>(0,R.jsx)(Ue,{...e})})}),actions:e=>(0,R.jsx)(T,{...e,secondary:e=>(0,R.jsx)(y,{...e,destructive:!1,loading:!1,disabled:!1,label:e=>(0,R.jsx)(v,{...e,children:`From the start`})}),primary:e=>(0,R.jsx)(y,{...e,destructive:!1,loading:!1,disabled:!1,prepend:e=>(0,R.jsx)(ye,{...e,as:_e}),label:e=>(0,R.jsx)(v,{...e,children:`Continue`})})})})})},kt=[`Playground`,`Size`,`WithBackdrop`,`WithHeader`,`WithFooterWordsEyebrow`,`WithFooterWordsFacts`,`WithFooterWordsFactsSeparator`,`WithFooterWordsFactsMeta`,`WithFooterRail`,`WithFooterRailLive`,`WithFooterActions`,`WithFooterActionsSecondary`,`LiveMatch`,`Film`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`variantStory(meta, "size", MediaStageTemplate)`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`variantStory(meta, "withBackdrop", MediaStageTemplate)`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`variantStory(meta, "withHeader", MediaStageTemplate)`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooterWordsEyebrow", MediaStageTemplate)`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooterWordsFacts", MediaStageTemplate)`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooterWordsFactsSeparator", MediaStageTemplate)`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooterWordsFactsMeta", MediaStageTemplate)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooterRail", MediaStageTemplate)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooterRailLive", MediaStageTemplate)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooterActions", MediaStageTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooterActionsSecondary", MediaStageTemplate)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: args => <MediaStage {...args} header={config => <MediaStageHeader {...config} bars={config => <Toolbar {...config} content={[heading(0, "Tonight")]} append={[iconButton(0), iconButton(1)]} />} />} fade={config => <MediaStageFade {...config} />} footer={config => <MediaStageFooter {...config} words={config => <MediaStageFooterWords {...config} eyebrow={config => <MediaStageFooterWordsEyebrow {...config}>
                  Super League · Round 14
                </MediaStageFooterWordsEyebrow>} title={config => <MediaStageFooterWordsTitle {...config}>Zürich 2–1 Bern</MediaStageFooterWordsTitle>} facts={config => <MediaStageFooterWordsFacts {...config} subtitle={config => <MediaStageFooterWordsFactsSubtitle {...config}>
                      Second half, 56th minute
                    </MediaStageFooterWordsFactsSubtitle>} separator={config => <MediaStageFooterWordsFactsSeparator {...config} />} meta={config => <MediaStageFooterWordsFactsMeta {...config}>
                      Arena Sport · 20:30–22:20
                    </MediaStageFooterWordsFactsMeta>} />} />} rail={config => <MediaStageFooterRail {...config} bar={config => <ProgressBar {...config} progress={config => <ProgressBarProgress {...config} />} />} live={config => <MediaStageFooterRailLive {...config} dot={config => <StatusDot {...config} inner={config => <StatusDotInner {...config} />} />} label={config => <MediaStageFooterRailLiveLabel {...config}>Live</MediaStageFooterRailLiveLabel>} />} />} actions={config => <MediaStageFooterActions {...config} secondary={config => <Button {...config} destructive={false} loading={false} disabled={false} label={config => <ButtonLabel {...config}>From the start</ButtonLabel>} />} primary={config => <Button {...config} destructive={false} loading={false} disabled={false} prepend={config => <ButtonIcon {...config} as={IconPlaceholder} />} label={config => <ButtonLabel {...config}>Watch live</ButtonLabel>} />} />} />} />
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: args => <MediaStage {...args} fade={config => <MediaStageFade {...config} />} footer={config => <MediaStageFooter {...config} words={config => <MediaStageFooterWords {...config} eyebrow={config => <MediaStageFooterWordsEyebrow {...config}>
                  Tonight at 20:15
                </MediaStageFooterWordsEyebrow>} title={config => <MediaStageFooterWordsTitle {...config}>
                  The night of fires
                </MediaStageFooterWordsTitle>} facts={config => <MediaStageFooterWordsFacts {...config} subtitle={config => <MediaStageFooterWordsFactsSubtitle {...config}>
                      A fire crew holds one valley.
                    </MediaStageFooterWordsFactsSubtitle>} />} />} rail={config => <MediaStageFooterRail {...config} bar={config => <ProgressBar {...config} progress={config => <ProgressBarProgress {...config} />} />} />} actions={config => <MediaStageFooterActions {...config} secondary={config => <Button {...config} destructive={false} loading={false} disabled={false} label={config => <ButtonLabel {...config}>From the start</ButtonLabel>} />} primary={config => <Button {...config} destructive={false} loading={false} disabled={false} prepend={config => <ButtonIcon {...config} as={IconPlaceholder} />} label={config => <ButtonLabel {...config}>Continue</ButtonLabel>} />} />} />} />
}`,...$.parameters?.docs?.source}}}})))()}At();export{$ as Film,Q as LiveMatch,B as Playground,V as Size,H as WithBackdrop,X as WithFooterActions,Z as WithFooterActionsSecondary,J as WithFooterRail,Y as WithFooterRailLive,W as WithFooterWordsEyebrow,G as WithFooterWordsFacts,q as WithFooterWordsFactsMeta,K as WithFooterWordsFactsSeparator,U as WithHeader,kt as __namedExportsOrder,z as default};