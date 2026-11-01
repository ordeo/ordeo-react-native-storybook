import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,n as a,r as o}from"./inputs-B4MjoMvH.js";import{n as s,t as c}from"./Pressable-B2SEHg1P.js";import{i as l,n as u,r as d,t as f}from"./interaction-state-Cs7nJWgF.js";import{i as p,n as m,r as h,t as g}from"./use-interaction-state-BFJfQFwk.js";import{n as _,t as v}from"./story-inputs-BqaRY7rA.js";import{b as y,f as b,i as x,o as S,p as C,s as w,y as T}from"./iframe-D-AQh-w-.js";import{n as E,t as D}from"./variant-story-CuO9tfgF.js";import{n as O,t as k}from"./text-QaViRebF.js";import{t as A}from"./text-CK1rXrKs.js";var j,M,N;function P(){return(P=e((()=>{l(),u(),h(),g(),b(),s(),x(),j=n(),M=d(`InteractiveSurfaceState`,f),N=r(function({as:e=c,size:t,selected:n,disabled:r,background:i,content:a,linkedState:o,style:s,...l}){let u=S(),d=C(r),{currentState:f,propsWithHandlers:h}=m({...l,disabled:d}),g=o??f,_=w(u.component[`interactive-surface`].base,{size:t},g);return(0,j.jsx)(e,{...h,style:[p,{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},_,s],children:(0,j.jsxs)(M,{value:g,children:[i({size:t,selected:n,disabled:r,style:{position:`absolute`,left:0,right:0,top:0,bottom:0,zIndex:-1}}),a({size:t,selected:n,disabled:r})]})})}),N.__docgenInfo={description:`Makes a whole composition one link or button.`,methods:[],displayName:`InteractiveSurface`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var F,I;function L(){return(L=e((()=>{a(),v(),F={..._(e=>e.component[`interactive-surface`].base),selected:o([!1,!0]),disabled:o([!1,!0])},I={size:`sm`,selected:!1,disabled:!1}})))()}var R,z,B;function V(){return(V=e((()=>{R=t(),y(),x(),P(),z=n(),B=r(function({as:e=T,size:t,selected:n,disabled:r,style:i,...a}){let o=S(),s=(0,R.use)(M),c=w(o.component[`interactive-surface`].background.base,{size:t,selected:n,disabled:r},s);return(0,z.jsx)(e,{...a,style:[c,i]})}),B.__docgenInfo={description:``,methods:[],displayName:`InteractiveSurfaceBackground`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function H(e){return(0,U.jsx)(N,{testID:`interactive-surface`,...e,background:e=>(0,U.jsx)(B,{...e}),content:e=>(0,U.jsx)(k,{type:`body-sm`,intent:`neutral`,bold:!1,emphasis:`high`,disabled:e.disabled,children:`Label`})})}var U,W,G,K,q,J,Y;function X(){return(X=e((()=>{D(),A(),P(),L(),V(),U=n(),W={title:`Content/InteractiveSurface`,component:N,argTypes:F,args:I,render:H},G={},K=E(W,`size`,H),q=E(W,`selected`,H),J=E(W,`disabled`,H),Y=[`Playground`,`Size`,`Selected`,`Disabled`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`variantStory(meta, "size", InteractiveSurfaceTemplate)`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`variantStory(meta, "selected", InteractiveSurfaceTemplate)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`variantStory(meta, "disabled", InteractiveSurfaceTemplate)`,...J.parameters?.docs?.source}}}})))()}X();export{J as Disabled,G as Playground,q as Selected,K as Size,Y as __namedExportsOrder,W as default};