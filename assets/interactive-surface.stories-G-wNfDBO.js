import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Image-CKFfYgGR.js";import{a,i as o,n as s,r as c}from"./inputs-EVCcd0i4.js";import{a as ee,i as te,n as ne,o as l,r as u,t as d}from"./use-interaction-state-DCnx_bf2.js";import{i as f,n as p,r as m,t as h}from"./interaction-state-Cs7nJWgF.js";import{n as re,t as g}from"./story-inputs-93gyvxKe.js";import{b as _,f as ie,i as v,o as y,p as b,s as x,y as S}from"./iframe-CsLIKixB.js";import{n as C,t as ae}from"./variant-story-Di2FcdOM.js";import{n as oe,t as se}from"./images-BgUnNHkz.js";import{c as ce,l as le,s as ue,u as de}from"./media-skeleton-wash-SmcDy8ku.js";import{C as fe,S as pe,b as me,c as he,f as ge,g as _e,i as ve,l as w,m as T,n as E,o as D,u as O,v as k,x as A,y as j}from"./video-teaser-content-visual-live-badge-label-D4kwFTnC.js";function M(){return(M=e((()=>{pe(),me(),k(),_e(),T(),ge(),O(),he(),D(),ve(),E()})))()}var N,P,F;function I(){return(I=e((()=>{f(),p(),u(),d(),ie(),l(),v(),N=n(),P=m(`InteractiveSurfaceState`,h),F=a(function({as:e=ee,size:t,selected:n,disabled:r,background:i,content:a,linkedState:o,style:s,...c}){let l=y(),u=b(r),{currentState:d,propsWithHandlers:f}=ne({...c,disabled:u}),p=o??d,m=x(l.component[`interactive-surface`].base,{size:t},p);return(0,N.jsx)(e,{...f,style:[te,{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`,overflow:`hidden`},m,s],children:(0,N.jsxs)(P,{value:p,children:[i({size:t,selected:n,disabled:r,style:{position:`absolute`,left:0,right:0,top:0,bottom:0,width:`100%`,height:`100%`,zIndex:-1}}),a({size:t,selected:n,disabled:r})]})})}),F.__docgenInfo={description:`Makes a whole composition one link or button.`,methods:[],displayName:`InteractiveSurface`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var L,R;function z(){return(z=e((()=>{s(),g(),L={...re(e=>e.component[`interactive-surface`].base),selected:c([!1,!0]),disabled:c([!1,!0])},R={size:`sm`,selected:!1,disabled:!1}})))()}var B,V,H;function U(){return(U=e((()=>{B=t(),_(),v(),I(),V=n(),H=a(function({as:e=S,size:t,selected:n,disabled:r,style:i,...a}){let o=y(),s=(0,B.use)(P),c=x(o.component[`interactive-surface`].background.base,{size:t,selected:n,disabled:r},s);return(0,V.jsx)(e,{...a,style:[c,i]})}),H.__docgenInfo={description:``,methods:[],displayName:`InteractiveSurfaceBackground`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function W(e){return(0,G.jsx)(F,{testID:`interactive-surface`,...e,background:e=>(0,G.jsx)(H,{...e}),content:()=>(0,G.jsx)(i,{source:oe.slotPlaceholder,resizeMode:`repeat`,style:{width:`100%`,minHeight:80}})})}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ae(),r(),se(),fe(),M(),I(),z(),U(),G=n(),K={title:`Content/InteractiveSurface`,component:F,argTypes:L,args:R,render:W},q={},J=C(K,`size`,W),Y=C(K,`selected`,W),X=C(K,`disabled`,W),Z={render:e=>(0,G.jsx)(F,{...e,background:e=>(0,G.jsx)(H,{...e}),content:e=>(0,G.jsx)(A,{...e,content:e=>(0,G.jsx)(j,{...e,visual:e=>(0,G.jsx)(w,{...e,media:e=>(0,G.jsx)(le,{...e,ratio:`landscape`,bottom:e=>(0,G.jsx)(ue,{...e})})})})})})},Q=[`Playground`,`Size`,`Selected`,`Disabled`,`ClickableVideoTeaser`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`variantStory(meta, "size", InteractiveSurfaceTemplate)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`variantStory(meta, "selected", InteractiveSurfaceTemplate)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "disabled", InteractiveSurfaceTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveSurface {...args} background={config => <InteractiveSurfaceBackground {...config} />} content={config => <VideoTeaser {...config} content={config => <VideoTeaserContent {...config} visual={config => <VideoTeaserContentVisual {...config} media={config => <Media {...config} ratio="landscape" bottom={config => <MediaBottom {...config} />} />} />} />} />} />
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as ClickableVideoTeaser,X as Disabled,q as Playground,Y as Selected,J as Size,Q as __namedExportsOrder,K as default};